import defaultImg from '@/assets/img/default-img.png';

export function getUrlImgById(id?: string | null) {
  if (!id) return defaultImg;
  return `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;
}
