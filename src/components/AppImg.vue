<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import defaultImg from '@/assets/img/default-img.png';

interface Props {
  img?: string | null,
  thumbnail?: string | null,
  classImg?: any,
}
//props
const props = withDefaults(defineProps<Props>(), {});

//ref
const refFigureImg = ref<HTMLBaseElement | undefined>();

//computed
const value = computed(() => {
  return props.img || defaultImg;
});

//method
const isLoad = () => {
  refFigureImg.value?.classList.add('loaded');
};

onMounted(() => {
  if (props.img) {
    refFigureImg.value?.style.setProperty(
      '--src-img',
      `url(${props.thumbnail})`,
    );
  }
});
</script>

<template>
  <figure class="app-img" ref="refFigureImg">
    <img
      :src="value"
      @load="isLoad"
      :class="classImg">
    <slot name="infos"></slot>
  </figure>
</template>
