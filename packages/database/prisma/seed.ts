import "dotenv/config";
import { nanoid } from "nanoid";

import { createUser, getUserByEmail, deleteUserById } from "../src/services/user-services";
import { createStudioService } from "../src/services/studio-services";
import { client } from "../src/client";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function hashPassword(plain: string): Promise<string> {
  return Bun.password.hash(plain, { algorithm: "bcrypt", cost: 10 });
}

// Mirrors auth controller: `${name.toLowerCase().replace(/\s+/g, "-")}'s-studio`
function deriveStudioName(name: string): string {
  return `${name.toLowerCase().replace(/\s+/g, "-")}'s-studio`;
}

// ---------------------------------------------------------------------------
// Seed users — same shape as POST /auth/register
// ---------------------------------------------------------------------------

const SEED_USERS = [
  {
    name: "Alice Johnson",
    email: "alice@audora.com",
    password: "Password123!",
    projects: [
      {
        title: "Podcast Episode 1",
        tracks: [
          {
            name: "Main Recording",
            recordings: [
              { displayName: "Alice - Take 1", duration: 1823, resolution: "1280x720" },
              { displayName: "Alice - Take 2", duration: 1956, resolution: "1280x720" },
            ],
          },
        ],
      },
      {
        title: "Interview Session",
        tracks: [
          {
            name: "Interview Audio",
            recordings: [
              { displayName: "Alice Interview", duration: 3612, resolution: "1920x1080" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bob Smith",
    email: "bob@audora.com",
    password: "Password123!",
    projects: [
      {
        title: "Weekly Standup",
        tracks: [
          {
            name: "Standup Recording",
            recordings: [
              { displayName: "Bob - Standup", duration: 612, resolution: "1280x720" },
            ],
          },
        ],
      },
      {
        title: "Product Demo",
        tracks: [
          {
            name: "Demo Walkthrough",
            recordings: [
              { displayName: "Bob Demo - Take 1", duration: 2741, resolution: "1920x1080" },
              { displayName: "Bob Demo - Take 2", duration: 2834, resolution: "1920x1080" },
            ],
          },
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("🌱  Starting seed...\n");

  for (const userData of SEED_USERS) {
    // Idempotent: remove existing user so seed can be re-run safely
    const existing = await getUserByEmail(userData.email);
    if (existing) {
      await deleteUserById(existing.id);
      console.log(`  ↩  Removed existing user: ${userData.email}`);
    }

    // ── Step 1: hash password (same as auth.controller → hashPassword) ──
    const hashedPassword = await hashPassword(userData.password);

    // ── Step 2: createUser — same call as register controller ──
    const newUser = await createUser({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    });

    console.log(`✅  Created user: ${newUser.name} <${newUser.email}>`);

    // ── Step 3: derive studio name — same logic as register controller ──
    const studioName = deriveStudioName(newUser.name);

    // ── Step 4: createStudioService — same call as register controller ──
    const studio = await createStudioService({
      userId: newUser.id,
      studioName,
      recordingType: "VIDEO_AUDIO",
      audioSampleRate: "KHZ_44_1",
      videoQuality: "STANDARD",
      enableLobby: false,
      enableCaptions: false,
      noiseReduction: false,
      countdownBeforeRecording: false,
      autoStartOnGuestJoin: false,
      pauseUploads: false,
      language: "English",
    });

    console.log(`  🎙  Studio: "${studio.studioName}" (slug: ${studio.studioSlug})`);

    // ── Step 5: seed projects/tracks/recordings (post-registration data) ──
    for (const projectData of userData.projects) {
      const project = await client.project.create({
        data: { title: projectData.title, studioId: studio.id },
      });

      console.log(`    📁  Project: "${project.title}"`);

      for (const trackData of projectData.tracks) {
        const track = await client.track.create({
          data: { name: trackData.name, projectId: project.id },
        });

        console.log(`      🎚  Track: "${track.name}"`);

        for (const recData of trackData.recordings) {
          const recording = await client.recording.create({
            data: {
              trackId: track.id,
              displayName: recData.displayName,
              duration: recData.duration,
              resolution: recData.resolution,
              status: "COMPLETED",
              videoUrl: `https://storage.audora.com/recordings/sample-${nanoid(6)}.mp4`,
              thumbnailUrl: `https://picsum.photos/seed/${nanoid(4)}/320/180`,
            },
          });

          console.log(`        🎬  Recording: "${recording.displayName}" (${recording.duration}s)`);
        }
      }
    }

    console.log();
  }

  console.log("✨  Seed complete!\n");
  console.log("Login credentials:");
  for (const u of SEED_USERS) {
    console.log(`  ${u.email}  /  ${u.password}`);
  }
}

main()
  .catch((e) => {
    console.error("❌  Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await client.$disconnect();
  });
