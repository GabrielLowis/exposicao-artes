import { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc: string;
  title: string;
}

const AudioPlayer = ({ audioSrc, title }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.addEventListener('ended', () => setIsPlaying(false));
    setAudioElement(audio);

    return () => {
      audio.pause();
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [audioSrc]);

  const toggleAudio = () => {
    if (!audioElement) return;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioElement) return;
    audioElement.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="flex items-center justify-center gap-4 p-6 bg-surface rounded-lg">
      <button
        onClick={toggleAudio}
        className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform"
        aria-label={isPlaying ? 'Pausar áudio' : 'Reproduzir áudio'}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      
      <div className="flex-1 text-center">
        <p className="text-sm text-muted-foreground">
          {isPlaying ? 'Reproduzindo...' : 'Clique para ouvir'}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Áudio: {title}
        </p>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={toggleMute}
          className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          aria-label={isMuted ? 'Ativar som' : 'Silenciar'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        
        <a
          href={audioSrc}
          download={`${title}.wav`}
          className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          aria-label="Baixar áudio"
        >
          ⬇
        </a>
      </div>
    </div>
  );
};

export default AudioPlayer;