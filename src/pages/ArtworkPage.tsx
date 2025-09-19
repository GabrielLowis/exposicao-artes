import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArtworkById } from '../data/artworks';
import { Artwork } from '../types';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Tag, 
  Play, 
  Pause,
  Volume2,
  VolumeX 
} from 'lucide-react';

const ArtworkPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    const foundArtwork = getArtworkById(id);
    if (!foundArtwork) {
      navigate('/');
      return;
    }

    setArtwork(foundArtwork);
    document.title = `${foundArtwork.title} - ${foundArtwork.author}`;

    // Setup audio element if needed
    if (foundArtwork.mediaType === 'audio' && foundArtwork.audioSrc) {
      const audio = new Audio(foundArtwork.audioSrc);
      audio.addEventListener('ended', () => setIsPlaying(false));
      setAudioElement(audio);

      return () => {
        audio.pause();
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, [id, navigate]);

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

  if (!artwork) {
    return null; // Loading or redirecting
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            to={`/exposicao/${artwork.category.toLowerCase()}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar para {artwork.category}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Media Content */}
          <div className="space-y-6">
            <div className="aspect-square lg:aspect-[4/3] relative overflow-hidden rounded-lg bg-surface">
              <img
                src={artwork.imageSrc}
                alt={`${artwork.title} por ${artwork.author}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Audio Controls */}
            {artwork.mediaType === 'audio' && artwork.audioSrc && (
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
                </div>
                
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                  aria-label={isMuted ? 'Ativar som' : 'Silenciar'}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            )}

            {/* Video Player */}
            {artwork.mediaType === 'video' && artwork.videoSrc && (
              <video 
                controls 
                className="w-full rounded-lg bg-surface"
                poster={artwork.imageSrc}
              >
                <source src={artwork.videoSrc} type="video/mp4" />
                Seu navegador não suporta reprodução de vídeo.
              </video>
            )}
          </div>

          {/* Artwork Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {artwork.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-primary" />
                  <span className="font-medium">{artwork.author}</span>
                </div>
                
                {artwork.year && (
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>{artwork.year}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  <Tag size={18} className="text-primary" />
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {artwork.category}
                  </span>
                </div>
              </div>
            </div>

            {artwork.description && (
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {artwork.description}
                </p>
              </div>
            )}

            {/* Media Type Info */}
            <div className="p-6 bg-surface rounded-lg">
              <h3 className="font-semibold mb-2">Sobre esta obra</h3>
              <p className="text-muted-foreground text-sm">
                {artwork.mediaType === 'audio' && 'Composição musical disponível para audição.'}
                {artwork.mediaType === 'video' && 'Performance em vídeo disponível para visualização.'}
                {artwork.mediaType === 'image' && 'Obra visual em formato digital.'}
                {!artwork.mediaType && 'Obra em formato digital.'}
              </p>
            </div>

            {/* Navigation to Category */}
            <div className="pt-6">
              <Link
                to={`/exposicao/${artwork.category.toLowerCase()}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:scale-105 transition-transform"
              >
                Ver mais obras de {artwork.category}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkPage;