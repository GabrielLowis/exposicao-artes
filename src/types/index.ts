export interface Artwork {
  id: string;
  title: string;
  author: string;
  category: 'Pintura' | 'Musica' | 'Literatura' | 'Fotografia' | 'Danca';
  year?: number;
  description?: string;
  imageSrc: string;
  thumbnailSrc?: string;
  mediaType?: 'image' | 'audio' | 'video';
  audioSrc?: string;
  videoSrc?: string;
}

export type Category = Artwork['category'];

export const CATEGORIES: Category[] = ['Pintura', 'Musica', 'Literatura', 'Fotografia', 'Danca'];