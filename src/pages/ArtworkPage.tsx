import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArtworkById } from '../data/artworks';
import { Artwork } from '../types';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import AudioPlayer from '../components/AudioPlayer';
import TextReader from '../components/TextReader';

const ArtworkPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState<Artwork | null>(null);

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
  }, [id, navigate]);

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

            {/* Text Content */}
            {artwork.mediaType === 'text' && artwork.textContent && (
              <TextReader content={artwork.textContent} title={artwork.title} />
            )}

            {/* Audio Player */}
            {artwork.mediaType === 'audio' && artwork.audioSrc && (
              <AudioPlayer audioSrc={artwork.audioSrc} title={artwork.title} />
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
                {artwork.mediaType === 'audio' && 'Composição musical com player de áudio interativo.'}
                {artwork.mediaType === 'video' && 'Performance em vídeo com controles de reprodução.'}
                {artwork.mediaType === 'text' && 'Texto literário com opções de leitura e cópia.'}
                {artwork.mediaType === 'image' && 'Obra visual em formato digital.'}
                {!artwork.mediaType && 'Obra em formato digital.'}
              </p>
              {(artwork.audioSrc || artwork.videoSrc || artwork.textContent) && (
                <p className="text-xs text-muted-foreground mt-2">
                  ✨ Conteúdo interativo disponível abaixo
                </p>
              )}
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