<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IArtworkBase } from '@/interfaces/Artwork';
import { getUrlImgById } from '@/utils/img';


interface Props {
  artwork: IArtworkBase,
}

//props
const props = withDefaults(defineProps<Props>(), {});

//ref
const refFigureImg = ref();

//method
const isLoad = (e: any) => {
  refFigureImg.value.classList.add('loaded');
};

onMounted(() => {
  if (props.artwork.image_id) {
    refFigureImg.value.style.setProperty(
      '--src-img',
      `url(${props.artwork.thumbnail.lqip})`,
    );
  }
});

</script>

<template>
  <div class="gallery-card is-relative">
    <figure class="absolute-center"
        ref="refFigureImg">
      <img
        v-if="artwork.image_id"
        :src="getUrlImgById(artwork.image_id)"
        @load="isLoad"
        class="img-art">
      <img
        v-else
        :src="getUrlImgById()"
        class="img-default">
      <div class="infos">
        <p class="mb-0"> {{ artwork.title }} </p>
        <span> {{ artwork.artist_title || '---' }} </span>
      </div>
    </figure>
  </div>
</template>

<script lang="ts">
export default {};
</script>
