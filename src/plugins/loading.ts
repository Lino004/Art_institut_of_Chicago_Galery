import { App } from 'vue';
import merge from 'lodash/merge';
import AppLoading from '@/components/AppLoading.vue';
import { createDiv, removeDiv } from '@/utils/div';
import { mount } from '@/plugins/mount';
import { IAppLoadingShowOpt } from '@/interfaces/Loading';

const ID = 'app-loading';
const defaultProps = {
  fullscreen: true,
};

function createAppLoading() {
  return {
    show(opt?: IAppLoadingShowOpt, optProps?: any) {
      const element = opt?.container || createDiv(ID);
      const callbackDestroy = () => !opt?.container ? removeDiv(ID) : null;
      const c = mount(AppLoading, {
        element,
        callbackDestroy,
        props: merge(defaultProps, optProps),
      });
      return c;
    },
  };
}

export default {
  install: (app: App<Element>) => {
    app.provide('$loading', createAppLoading);
  }
};
