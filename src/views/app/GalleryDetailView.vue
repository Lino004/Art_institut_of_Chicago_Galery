<script lang="ts" setup>
import { onMounted, ref, inject } from 'vue';
import { useRoute } from 'vue-router';
import { getArtworks } from '@/api/artworks';
import { ICreateAppLoadingFunc } from '@/interfaces/Loading';
import { IArtwork } from '@/interfaces/Artwork';
import { getUrlImgById } from '@/utils/img';

const $loading = inject('$loading') as ICreateAppLoadingFunc;
const route = useRoute();

//ref
const artwork = ref<IArtwork | null>(null);

//methods
const getdata = async () => {
  const loading = $loading().show();
  const id = route.params.id as string;
  try {
    const { data } = await getArtworks(id);
    artwork.value = data;
  } catch (error) {
    //
  } finally {
    loading?.destroy();
  }
};

//mounted
onMounted(async () => {
  await getdata();
});
</script>

<template>
  <section class="columns">
    <div class="column is-5">
      <app-img
        :img="getUrlImgById(artwork?.image_id)"
        :thumbnail="artwork?.thumbnail?.lqip"
      />
    </div>
    <div class="column">
      <h4 class="is-size-4 has-text-weight-bold"> {{ artwork?.title }} </h4>
      <h5 class="is-size-5"> {{ artwork?.artist_title }} </h5>
      <br>
      <p v-html="artwork?.description"></p>
      <p v-html="artwork?.exhibition_history"></p>
      <br>
      <div class="columns">
        <div class="column has-text-weight-bold is-3">Dimensions:</div>
        <div class="column"> {{ artwork?.dimensions }} </div>
      </div>
      <div class="columns">
        <div class="column has-text-weight-bold is-3">Term titles:</div>
        <div class="column tags">
          <span v-for="(item) in artwork?.term_titles" :key="item" class="tag bg-brand-200 has-text-weight-medium has-text-black"> {{ item }} </span>
        </div>
      </div>
    </div>
  </section>
</template>
