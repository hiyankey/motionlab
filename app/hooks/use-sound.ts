type Settings = {
  volume?: number;
  playbackRate?: number;
};

export const useSound = (
  url: string,
  { volume, playbackRate }: Settings | undefined = {}
) => {
  const audio = typeof window !== 'undefined' ? new window.Audio(url) : null;
  if (audio) {
    audio.volume = volume || 1;
    audio.playbackRate = playbackRate || 1;
  }

  const play = () => {
    // biome-ignore lint/style/useBlockStatements: <explanation>
    if (!audio) return;
    audio.currentTime = 0;
    try {
      audio.play();
      // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
    } catch {}
  };

  return [play];
};
