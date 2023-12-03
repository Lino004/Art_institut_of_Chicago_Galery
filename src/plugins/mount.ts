// import cloneDeep from 'lodash/cloneDeep';
import { IMountFunc } from '@/interfaces/Mount';
import { render, h, VNode } from 'vue';

export const mount: IMountFunc = (component, args) => {
  const { props, children, element, app, callbackDestroy } = args;
  if (!element) return null;
  let el: HTMLBaseElement | HTMLDivElement | null = element;
  let vNode: VNode | null = h(component, props, children);

  if (app?._context) vNode.appContext = app._context;
  render(vNode, el);

  const destroy = () => {
    if (el) render(null, el);
    if (callbackDestroy) callbackDestroy();
    el = null;
    vNode = null;
  };

  return { vNode, destroy, el };
};
