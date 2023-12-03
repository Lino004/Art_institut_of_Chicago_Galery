export function getUrlImgById(id?: string | null) {
  if (!id) return null;
  return `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;
}
