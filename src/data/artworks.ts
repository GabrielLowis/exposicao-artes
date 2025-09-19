import { Artwork } from '../types';
import paintingSample from '../assets/painting-sample.jpg';
import musicSample from '../assets/music-sample.jpg';
import literatureSample from '../assets/literature-sample.jpg';
import photographySample from '../assets/photography-sample.jpg';
import danceSample from '../assets/dance-sample.jpg';

export const artworks: Artwork[] = [
  // Pintura
  {
    id: '1',
    title: 'Abaporu Reimaginado',
    author: 'Ana Silva',
    category: 'Pintura',
    year: 2024,
    description: 'Uma reinterpretação contemporânea da obra icônica de Tarsila do Amaral, explorando cores vibrantes e formas geométricas.',
    imageSrc: paintingSample,
    thumbnailSrc: paintingSample,
    mediaType: 'image'
  },
  {
    id: '2',
    title: 'Antropofagia Digital',
    author: 'Carlos Santos',
    category: 'Pintura',
    year: 2024,
    description: 'Fusão entre técnicas tradicionais e elementos digitais, representando a antropofagia cultural no século XXI.',
    imageSrc: paintingSample,
    thumbnailSrc: paintingSample,
    mediaType: 'image'
  },

  // Música
  {
    id: '3',
    title: 'Samba Futurista',
    author: 'Marina Oliveira',
    category: 'Musica',
    year: 2024,
    description: 'Composição experimental que mescla ritmos tradicionais brasileiros com sonoridades eletrônicas.',
    imageSrc: musicSample,
    thumbnailSrc: musicSample,
    mediaType: 'audio',
    audioSrc: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
  },
  {
    id: '4',
    title: 'Vanguarda Sonora',
    author: 'Pedro Costa',
    category: 'Musica',
    year: 2024,
    description: 'Experimentação com instrumentos não convencionais inspirada nas propostas da Semana de 22.',
    imageSrc: musicSample,
    thumbnailSrc: musicSample,
    mediaType: 'audio'
  },

  // Literatura
  {
    id: '5',
    title: 'Manifesto 2.0',
    author: 'Beatriz Lima',
    category: 'Literatura',
    year: 2024,
    description: 'Poesia slam contemporânea inspirada nos manifestos modernistas, abordando questões atuais da juventude brasileira.',
    imageSrc: literatureSample,
    thumbnailSrc: literatureSample,
    mediaType: 'image'
  },
  {
    id: '6',
    title: 'Memórias Fragmentadas',
    author: 'João Ferreira',
    category: 'Literatura',
    year: 2024,
    description: 'Narrativa experimental que utiliza técnicas de fluxo de consciência para retratar a São Paulo moderna.',
    imageSrc: literatureSample,
    thumbnailSrc: literatureSample,
    mediaType: 'image'
  },

  // Fotografia
  {
    id: '7',
    title: 'Geometrias Urbanas',
    author: 'Sofia Almeida',
    category: 'Fotografia',
    year: 2024,
    description: 'Série fotográfica que captura a geometria da arquitetura paulistana através de ângulos inusitados.',
    imageSrc: photographySample,
    thumbnailSrc: photographySample,
    mediaType: 'image'
  },
  {
    id: '8',
    title: 'Retratos da Metrópole',
    author: 'Lucas Rocha',
    category: 'Fotografia',
    year: 2024,
    description: 'Documentário visual sobre a diversidade cultural nas ruas de São Paulo.',
    imageSrc: photographySample,
    thumbnailSrc: photographySample,
    mediaType: 'image'
  },

  // Dança
  {
    id: '9',
    title: 'Coreografia Antropófaga',
    author: 'Camila Mendes',
    category: 'Danca',
    year: 2024,
    description: 'Performance que mescla dança contemporânea com movimentos inspirados em rituais indígenas brasileiros.',
    imageSrc: danceSample,
    thumbnailSrc: danceSample,
    mediaType: 'video',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: '10',
    title: 'Expressão Modernista',
    author: 'Roberto Nascimento',
    category: 'Danca',
    year: 2024,
    description: 'Interpretação corporal das obras de Di Cavalcanti através da dança expressiva.',
    imageSrc: danceSample,
    thumbnailSrc: danceSample,
    mediaType: 'video'
  }
];

export const getArtworksByCategory = (category: string) => {
  return artworks.filter(artwork => artwork.category === category);
};

export const getArtworkById = (id: string) => {
  return artworks.find(artwork => artwork.id === id);
};