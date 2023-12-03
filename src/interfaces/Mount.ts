import { App, VNode } from 'vue';

export interface IMountParams {
  props?: any,
  children?: string | number | boolean | undefined,
  element?: HTMLBaseElement | HTMLDivElement,
  app?: App<Element>,
  callbackDestroy?: () => void,
}
export interface IMountResult {
  vNode: VNode,
  destroy: () => void,
  el: HTMLBaseElement | HTMLDivElement,
}
export interface IMountFunc  {
  (component: any, args: IMountParams): IMountResult | null
}
