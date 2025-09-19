import { CATEGORIES, Category } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Paintbrush, 
  Music, 
  BookOpen, 
  Camera, 
  User 
} from 'lucide-react';

const categoryIcons = {
  Pintura: Paintbrush,
  Musica: Music,
  Literatura: BookOpen,
  Fotografia: Camera,
  Danca: User
};

interface CategorySelectorProps {
  onShowAll?: () => void;
}

const CategorySelector = ({ onShowAll }: CategorySelectorProps) => {
  const navigate = useNavigate();
  const { categoria } = useParams();

  const handleCategoryClick = (category: Category) => {
    navigate(`/exposicao/${category.toLowerCase()}`);
  };

  const handleShowAll = () => {
    navigate('/');
    onShowAll?.();
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore por <span className="gradient-text">Categoria</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handleShowAll}
            className={`category-btn ${!categoria ? 'active' : ''}`}
            aria-label="Ver todas as obras"
          >
            Todas as Obras
          </button>
          
          {CATEGORIES.map((category) => {
            const Icon = categoryIcons[category];
            const isActive = categoria === category.toLowerCase();
            
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`category-btn flex items-center gap-2 ${isActive ? 'active' : ''}`}
                aria-label={`Ver obras de ${category}`}
              >
                <Icon size={20} />
                <span>{category}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySelector;