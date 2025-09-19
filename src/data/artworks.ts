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
    mediaType: 'audio',
    audioSrc: 'https://www.soundjay.com/misc/sounds/beep-07a.wav'
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
    mediaType: 'text',
    textContent: `MANIFESTO 2.0

Queremos a revolução digital!
Queremos a tela que liberta!
Queremos o verso que conecta!

Não mais as palavras presas em papel,
mas bytes que voam, pixels que cantam,
stories que nascem e morrem em segundos.

Somos a geração do duplo clique,
do scroll infinito,
da poesia que se escreve com thumbs.

Devoramos memes como antropófagos,
mastigamos trends,
digerimos a cultura mundial
para regurgitar nossa brasilidade 2.0.

São Paulo não para, o WiFi não para,
nossa arte não para.

Somos modernistas de smartphone na mão,
revolucionários de timeline,
poetas de DM.

Queremos o novo, o agora, o viral!
Queremos ser hashtag!`
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
    mediaType: 'text',
    textContent: `MEMÓRIAS FRAGMENTADAS

1.
O metrô range. Cinco da manhã. Luzes frias cortam o sono dos operários. São Paulo acorda antes do sol, como sempre acordou, como sempre acordará.

2.
Mário de Andrade caminhava por aqui. Será que via o futuro? O concreto que cresce, os pixels que brilham, a poesia que se perde entre notificações?

3.
"Ai, que preguiça!" - diria Macunaíma. Mas nós não temos preguiça. Corremos. Sempre corremos. Para o trabalho, para casa, para lugar nenhum.

4.
O café esfria na mesa do escritório. É o mesmo café de 1922? As mesmas folhas, as mesmas raízes, mas o sabor mudou. Tudo mudou.

5.
Tarsila pintaria hoje? Com que cores? RGB? CMYK? Ou ainda aquele amarelo que só ela sabia misturar?

6.
A cidade respira através de janelas abertas. Cada respiração uma história. Cada história um fragmento. Cada fragmento uma memória que se perde no tempo.

7.
São Paulo é um palimpsesto. Camadas sobre camadas. Memórias sobre memórias. O novo construído sobre o antigo, mas nunca apagando completamente o que veio antes.`
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
    mediaType: 'video',
    videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
  }
];

export const getArtworksByCategory = (category: string) => {
  return artworks.filter(artwork => artwork.category === category);
};

export const getArtworkById = (id: string) => {
  return artworks.find(artwork => artwork.id === id);
};