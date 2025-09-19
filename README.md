# Semana de Arte Moderna - Exposição Digital 2024

Uma exposição escolar digital celebrando 102 anos da Semana de Arte Moderna de 1922, apresentando obras contemporâneas de estudantes inspiradas nos ideais modernistas brasileiros.

## 🎨 Sobre o Projeto

Este site foi desenvolvido como uma plataforma expositiva para apresentar obras de arte criadas por estudantes, abrangendo cinco categorias artísticas:

- **Pintura** - Reinterpretações contemporâneas das vanguardas pictóricas
- **Música** - Composições experimentais e fusões sonoras
- **Literatura** - Textos inspirados no movimento antropófago
- **Fotografia** - Registros visuais da modernidade urbana
- **Dança** - Performances que dialogam entre ancestral e contemporâneo

## 🚀 Tecnologias Utilizadas

- **Vite** - Build tool e servidor de desenvolvimento
- **React 18** - Biblioteca para interface de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **TailwindCSS** - Framework CSS utilitário
- **React Router** - Roteamento client-side
- **Lucide React** - Ícones SVG

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd semana-arte-moderna
```

2. Instale as dependências:
```bash
npm install
```

3. Execute em modo de desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:8080`

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── CategorySelector.tsx  # Seletor de categorias
│   ├── GalleryGrid.tsx  # Grid de exibição das obras
│   └── ArtworkCard.tsx  # Card individual de obra
├── pages/              # Páginas da aplicação
│   ├── Home.tsx        # Página inicial
│   ├── ExposicaoPage.tsx    # Página de categoria
│   ├── ArtworkPage.tsx # Página de obra individual
│   └── NotFound.tsx    # Página 404
├── data/               # Dados mock
│   └── artworks.ts     # Base de dados das obras
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
├── assets/             # Recursos estáticos
│   └── *.jpg           # Imagens das obras
└── index.css           # Estilos globais e design system
```

## 🎯 Funcionalidades

### Navegação
- **Home (/)** - Página inicial com hero section e obras em destaque
- **Exposição (/exposicao/:categoria)** - Visualização por categoria
- **Obra (/obra/:id)** - Detalhes individuais de cada obra

### Recursos
- Design responsivo (mobile-first)
- Modo escuro nativo
- Reprodução de áudio para obras musicais
- Player de vídeo para performances de dança
- Transições suaves e efeitos hover
- Navegação por teclado e acessibilidade

### Design System
Paleta de cores inspirada na arte moderna brasileira:
- **Magenta**: #E4007C
- **Ciano**: #00C2FF  
- **Amarelo**: #FFC857
- **Verde-azulado**: #3DDC97
- **Coral**: #FF6B6B

## 🔄 Personalização

### Adicionando Novas Obras

Edite o arquivo `src/data/artworks.ts` e adicione novos objetos seguindo a interface:

```typescript
{
  id: string;
  title: string;
  author: string;
  category: 'Pintura'|'Musica'|'Literatura'|'Fotografia'|'Danca';
  year?: number;
  description?: string;
  imageSrc: string;
  thumbnailSrc?: string;
  mediaType?: 'image'|'audio'|'video';
  audioSrc?: string;
  videoSrc?: string;
}
```

### Conectando com API
Para substituir os dados mock por uma API real, modifique as funções em `src/data/artworks.ts`:

```typescript
// Exemplo de integração com API
export const getArtworksByCategory = async (category: string) => {
  const response = await fetch(`/api/artworks?category=${category}`);
  return response.json();
};
```

## 📱 Deploy

### Vercel
```bash
npm run build
# Conecte o repositório ao Vercel
```

### Netlify
```bash
npm run build
# Faça upload da pasta dist/
```

### Outros provedores
O projeto gera arquivos estáticos na pasta `dist/` após executar `npm run build`.

## 🎓 Contexto Educacional

Este projeto foi desenvolvido para:
- Ensinar desenvolvimento web moderno
- Celebrar a herança cultural da Semana de Arte Moderna
- Proporcionar uma plataforma digital para jovens artistas
- Demonstrar a aplicação de tecnologias contemporâneas na preservação cultural

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Projeto desenvolvido para fins educacionais - Celebrando a vanguarda artística brasileira através da tecnologia contemporânea.**
