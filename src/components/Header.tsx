import { Link, useLocation } from 'react-router-dom';
import { Palette, ArrowLeft } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-3 text-2xl font-bold hover:scale-105 transition-transform duration-300"
          >
            <Palette className="text-primary" size={32} />
            <span className="gradient-text">Semana de Arte Moderna</span>
          </Link>

          {!isHome && (
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface hover:bg-surface-light transition-colors duration-300 border border-border hover:border-primary/30"
              aria-label="Voltar para página inicial"
            >
              <ArrowLeft size={18} />
              <span>Voltar</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;