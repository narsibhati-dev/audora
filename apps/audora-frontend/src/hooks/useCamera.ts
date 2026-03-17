import { useEffect } from 'react';

function useCamera(videoRef: React.RefObject<HTMLVideoElement>) {
  useEffect(() => {
    let stream: MediaStream;

    const start = async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    start();

    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps -- `videoRef` is a stable ref object, not a reactive value
  }, []);
}

export default useCamera;
