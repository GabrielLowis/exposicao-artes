import { useEffect } from 'react';
import { artworks } from '../data/artworks';
import CategorySelector from '../components/CategorySelector';
import GalleryGrid from '../components/GalleryGrid';
import { ArrowRight, Users, Calendar, MapPin } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    document.title = 'Semana de Arte Moderna - Exposição Escolar 2024';
  }, []);

  // Mostrar últimas obras adicionadas na home
  const featuredArtworks = artworks.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            background: 'var(--gradient-hero)',
            backgroundSize: '400% 400%',
            animation: 'gradient 8s ease infinite'
          }}
        />
        
        <div className="container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Semana de</span><br />
              Arte Moderna
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Celebrando 102 anos de vanguarda artística brasileira através do olhar criativo de nossos estudantes
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-8">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span>2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-primary" />
                <span>10 Artistas Estudantes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span>Exposição Digital</span>
              </div>
            </div>
            
            <div className="pt-8">
              <a
                href="#categorias"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 glow"
              >
                Explorar Obras
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selector */}
      <div id="categorias">
        <CategorySelector />
      </div>

      {/* Featured Artworks */}
      <GalleryGrid 
        artworks={featuredArtworks}
        title="Obras em Destaque"
      />

      {/* About Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Sobre a <span className="gradient-text">Exposição</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Esta exposição digital celebra o legado da Semana de Arte Moderna de 1922, 
              apresentando obras contemporâneas criadas por estudantes inspirados nos ideais 
              modernistas de ruptura, experimentação e valorização da cultura brasileira.
            </p>
            <p className="text-base text-muted-foreground">
              Cada obra representa uma reinterpretação única dos movimentos artísticos que 
              revolucionaram a arte brasileira no século XX, adaptados para o contexto atual 
              através do olhar jovem e criativo de nossos alunos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;