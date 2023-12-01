export interface IPaginationResponse {
  total: number,
  total_pages: number,
}

export interface IDataResponse<T> {
  data: T[],
  pagination: IPaginationResponse,
}
