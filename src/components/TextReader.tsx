import { useState } from 'react';

interface TextReaderProps {
  content: string;
  title: string;
}

const TextReader = ({ content, title }: TextReaderProps) => {
  const [fontSize, setFontSize] = useState('1rem');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const increaseFontSize = () => {
    setFontSize(current => {
      const size = parseFloat(current);
      return size >= 1.5 ? '1rem' : `${size + 0.125}rem`;
    });
  };

  const copyText = () => {
    navigator.clipboard?.writeText(content);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div className="bg-surface rounded-lg p-6 max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Texto Completo</h3>
          <div className="flex gap-2">
            <button
              onClick={increaseFontSize}
              className="px-3 py-1 bg-primary/20 text-primary rounded text-sm hover:bg-primary/30 transition-colors"
              title="Aumentar/diminuir fonte"
            >
              A+/A-
            </button>
            <button
              onClick={copyText}
              className="px-3 py-1 bg-primary/20 text-primary rounded text-sm hover:bg-primary/30 transition-colors"
              title="Copiar texto"
            >
              Copiar
            </button>
            <button
              onClick={toggleFullscreen}
              className="px-3 py-1 bg-primary/20 text-primary rounded text-sm hover:bg-primary/30 transition-colors"
              title="Tela cheia"
            >
              📖
            </button>
          </div>
        </div>
        <div 
          className="prose prose-invert max-w-none whitespace-pre-line text-foreground leading-relaxed"
          style={{ fontSize }}
        >
          {content}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-background z-50 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">{title}</h2>
              <div className="flex gap-2">
                <button
                  onClick={increaseFontSize}
                  className="px-4 py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors"
                >
                  A+/A-
                </button>
                <button
                  onClick={copyText}
                  className="px-4 py-2 bg-primary/20 text-primary rounded hover:bg-primary/30 transition-colors"
                >
                  Copiar
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="px-4 py-2 bg-surface text-foreground rounded hover:bg-surface/80 transition-colors"
                >
                  ✕ Fechar
                </button>
              </div>
            </div>
            <div 
              className="prose prose-invert max-w-none whitespace-pre-line text-foreground leading-relaxed"
              style={{ fontSize }}
            >
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextReader;