import HTTP from '@/api//HTTP';
import { IDataResponse } from '@/interfaces/Api';
import { IArtworkGetAllPayload, IArtworkResponce } from '@/interfaces/Artwork';

export async function searchArtworks(payload: IArtworkGetAllPayload) {
  const res = await HTTP.get('artworks/search/', { params: payload});
  return res.data as IDataResponse<IArtworkResponce>;
}
