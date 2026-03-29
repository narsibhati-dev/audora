import DashboardContainer from '@/components/dashboard/dashboard-container';
import { Studio } from '@audora/types';
import DashboardSidebar from './sidebar/dashboard-sidebar';
import StudioSettingsProvider from '@/components/providers/studio-settings-provider';

interface DashboardLayoutProps {
  studio: Studio;
  children: React.ReactNode;
}

export default function DashboardLayout({
  studio,
  children,
}: DashboardLayoutProps) {
  return (
    <StudioSettingsProvider studio={studio}>
      <div className='flex h-screen w-screen overflow-hidden' style={{ background: '#d8d2c8' }}>
        <DashboardSidebar />
        <div className='m-1.5 flex flex-1 flex-col overflow-hidden lg:m-3'>
          <DashboardContainer>{children}</DashboardContainer>
        </div>
      </div>
    </StudioSettingsProvider>
  );
}
