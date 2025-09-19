import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArtworksByCategory } from '../data/artworks';
import { Artwork, CATEGORIES, Category } from '../types';
import GalleryGrid from '../components/GalleryGrid';
import CategorySelector from '../components/CategorySelector';

const categoryDescriptions = {
  Pintura: 'Explore reinterpretações contemporâneas das vanguardas pictóricas brasileiras, onde tradição e inovação se encontram em cores vibrantes.',
  Musica: 'Descubra composições experimentais que ecoam o espírito revolucionário da música modernista, fusionando ritmos tradicionais com sonoridades futuristas.',
  Literatura: 'Mergulhe em textos que capturam a essência antropófaga da literatura brasileira, reinventando narrativas através do olhar jovem contemporâneo.',
  Fotografia: 'Contemple registros visuais que documentam a modernidade urbana através de perspectivas únicas e experimentais.',
  Danca: 'Presencie performances que incorporam a liberdade expressiva modernista em movimentos que dialogam entre o ancestral e o contemporâneo.'
};

const ExposicaoPage = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const navigate = useNavigate();
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [categoryName, setCategoryName] = useState<string>('');

  useEffect(() => {
    if (!categoria) {
      navigate('/');
      return;
    }

    // Encontrar a categoria correspondente (case-insensitive)
    const foundCategory = CATEGORIES.find(
      cat => cat.toLowerCase() === categoria.toLowerCase()
    ) as Category;

    if (!foundCategory) {
      navigate('/');
      return;
    }

    setCategoryName(foundCategory);
    const categoryArtworks = getArtworksByCategory(foundCategory);
    setArtworks(categoryArtworks);

    // Update page title
    document.title = `${foundCategory} - Semana de Arte Moderna`;
  }, [categoria, navigate]);

  if (!categoryName) {
    return null; // Loading or redirecting
  }

  const description = categoryDescriptions[categoryName as Category];

  return (
    <div className="pt-20">
      {/* Category Header */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            background: 'var(--gradient-accent)',
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">{categoryName}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
            
            <div className="pt-4">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {artworks.length} {artworks.length === 1 ? 'obra' : 'obras'} disponível{artworks.length === 1 ? '' : 'is'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <CategorySelector />

      {/* Gallery */}
      <GalleryGrid 
        artworks={artworks}
        emptyMessage={`Ainda não há obras cadastradas na categoria ${categoryName}.`}
      />
    </div>
  );
};

export default ExposicaoPage;