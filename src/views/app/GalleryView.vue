<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppPagination from '@/components/AppPagination.vue';
import GalleryCard from '@/components/gallery/GalleryCard.vue';
import { searchArtworks } from '@/api/artworks';
import { IArtworkGetAllPayload, IArtworkBase } from '@/interfaces/Artwork';
import AppButton from '@/components/AppButton.vue';

const perPage = 15;

//refs
const currentPage = ref(1);
const total = ref(1);
const search = ref('');
const artworks = ref<IArtworkBase[]>([]);
const loading = ref(false);

//methods
const getdata = async () => {
  loading.value = true;
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
    loading.value = false;
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
        <div v-if="loading"> Chargement ... </div>
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
