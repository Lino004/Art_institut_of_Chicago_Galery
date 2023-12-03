import HTTP from '@/api//HTTP';
import { IDataResponse } from '@/interfaces/Api';
import { IArtworkGetOneResponse, IArtworkGetAllPayload, IArtworkGetOnePayload, IArtworkResponce } from '@/interfaces/Artwork';

export async function searchArtworks(payload: IArtworkGetAllPayload) {
  const res = await HTTP.get('artworks/search/', { params: payload});
  return res.data as IDataResponse<IArtworkResponce>;
}
export async function getArtworks(id: string, payload?: IArtworkGetOnePayload) {
  const res = await HTTP.get(`artworks/${id}`, { params: payload});
  return res.data as IArtworkGetOneResponse;
}
