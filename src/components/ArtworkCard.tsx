import { Link } from 'react-router-dom';
import { Artwork } from '../types';
import { Play, Book, Volume2, Eye, Camera } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
}

const mediaIcons = {
  image: Eye,
  audio: Volume2,
  video: Play,
  text: Book,
  default: Camera
};

const mediaLabels = {
  image: '🖼 Imagem',
  audio: '🎵 Música', 
  video: '🎬 Vídeo',
  text: '📄 Texto',
  default: '📷 Foto'
};

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  const Icon = mediaIcons[artwork.mediaType || 'default'];
  const label = mediaLabels[artwork.mediaType || 'default'];

  return (
    <article className="art-card group">
      <Link 
        to={`/obra/${artwork.id}`}
        className="block"
        aria-label={`Ver detalhes de ${artwork.title}`}
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={artwork.thumbnailSrc || artwork.imageSrc}
            alt={`${artwork.title} por ${artwork.author}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Media type indicator */}
          <div className="absolute top-3 right-3 p-2 bg-background/90 backdrop-blur-sm rounded-full">
            <Icon size={16} className="text-primary" />
          </div>
          
          {/* Media type label */}
          <div className="absolute bottom-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs font-medium text-foreground">
            {label}
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {artwork.title}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">{artwork.author}</span>
            {artwork.year && (
              <span className="px-2 py-1 bg-surface rounded text-xs">
                {artwork.year}
              </span>
            )}
          </div>
          
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            {artwork.category}
          </span>
          
          {/* {artwork.description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
              {artwork.description}
            </p>
          )} */}
        </div>
      </Link>
    </article>
  );
};

export default ArtworkCard;