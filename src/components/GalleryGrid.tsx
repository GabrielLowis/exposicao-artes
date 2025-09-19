import { Artwork } from '../types';
import ArtworkCard from './ArtworkCard';

interface GalleryGridProps {
  artworks: Artwork[];
  title?: string;
  emptyMessage?: string;
}

const GalleryGrid = ({ 
  artworks, 
  title = "Exposição",
  emptyMessage = "Nenhuma obra encontrada nesta categoria."
}: GalleryGridProps) => {
  if (artworks.length === 0) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto py-16">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-2">Sem obras disponíveis</h3>
            <p className="text-muted-foreground">{emptyMessage}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center mb-12">
            {title}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artworks.map((artwork) => (
            <ArtworkCard 
              key={artwork.id} 
              artwork={artwork}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          {artworks.length === 1 
            ? "1 obra encontrada" 
            : `${artworks.length} obras encontradas`}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;