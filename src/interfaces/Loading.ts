import { IMountResult } from '@/interfaces/Mount';

export interface IAppLoadingShowOpt {
  container?: HTMLDivElement | HTMLBaseElement,
  props?: any,
}

export interface IAppLoadingShowFunc  {
  (opt?: IAppLoadingShowOpt, props?: any) : IMountResult | null
}
export interface ICreateAppLoadingResult  {
  show: IAppLoadingShowFunc
}
export interface ICreateAppLoadingFunc  {
  (): ICreateAppLoadingResult
}
