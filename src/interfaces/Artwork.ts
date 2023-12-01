export interface IArtworkGetAllPayload {
  q: string,
  fields?: string,
  page: number,
  limit: number,
  query?: any,
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
export interface IArtworkResponce extends IArtworkBase {
}
