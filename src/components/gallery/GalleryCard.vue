<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IArtworkBase } from '@/interfaces/Artwork';
import { getUrlImgById } from '@/utils/img';

interface Props {
  artwork: IArtworkBase,
}
const router = useRouter();

//props
withDefaults(defineProps<Props>(), {});

//ref
const root = ref();

</script>

<template>
  <div
    @click="router.push({
      name: 'app.artwork',
      params: { id: artwork.id }
    })"
    class="gallery-card is-relative"
    ref="root">
    <app-img
      :img="getUrlImgById(artwork.image_id)"
      :thumbnail="artwork?.thumbnail?.lqip"
      :class-img="{
        'img-art': artwork.image_id,
        'img-default': !artwork.image_id,
      }"
      class="app-img_card absolute-center">
      <template #infos>
        <div class="infos">
          <p class="mb-0"> {{ artwork.title }} </p>
          <span> {{ artwork.artist_title || '---' }} </span>
        </div>
      </template>
    </app-img>
  </div>
</template>

<script lang="ts">
export default {};
</script>
