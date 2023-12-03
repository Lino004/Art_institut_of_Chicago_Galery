export interface IArtworkGetAllPayload {
  q: string,
  fields?: string,
  page: number,
  limit: number,
  query?: any,
}
export interface IArtworkGetOnePayload {
  fields?: string,
}
export interface IArtworkBase {
  id: number,
  title: string | null,
  artist_title: string | null,
  image_id: string | null,
  thumbnail: {
    lqip: string,
  }
}
export interface IArtwork extends IArtworkBase {
  description: string | null,
  exhibition_history: string | null,
  dimensions: string | null,
  term_titles: string[],
}
export interface IArtworkResponce extends IArtworkBase {
}
export interface IArtworkGetOneResponse {
  data: IArtwork,
}
