<script setup lang="ts">
import { onMounted, ref, inject } from 'vue';
import GalleryCard from '@/components/gallery/GalleryCard.vue';
import { searchArtworks } from '@/api/artworks';
import { IArtworkGetAllPayload, IArtworkBase } from '@/interfaces/Artwork';
import { ICreateAppLoadingFunc } from '@/interfaces/Loading';

const perPage = 15;
const $loading = inject('$loading') as ICreateAppLoadingFunc;

//refs
const currentPage = ref(1);
const total = ref(1);
const search = ref('');
const artworks = ref<IArtworkBase[]>([]);

//methods
const getdata = async () => {
  const loading = $loading().show();
  const payload: IArtworkGetAllPayload = {
    q: search.value,
    limit: perPage,
    page: currentPage.value,
    fields: 'id, title, artist_title, image_id, thumbnail',
  };
  try {
    const { data, pagination } = await searchArtworks(payload);
    total.value = pagination.total;
    artworks.value = data;
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
  <section>
    <div class="level">
      <div class="level-left">
        <div class="field has-addons">
          <p class="control">
            <input
              v-model="search"
              @keyup.enter="getdata()"
              class="input"
              type="text"
              placeholder="Recherche">
          </p>
          <div class="control">
            <app-button
              @click="getdata()"
              icon-name="mdi-magnify"
              class="is-primary"/>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <app-pagination
            :total="total"
            :per-page="perPage"
            v-model:current="currentPage"
            @update:current="getdata()"
          />
        </div>
      </div>
    </div>
    <div class="columns is-multiline">
      <div
        v-for="(item) in artworks" :key="item.id"
        class="column is-one-fifth">
        <gallery-card :artwork="item"/>
      </div>
    </div>
  </section>
</template>
