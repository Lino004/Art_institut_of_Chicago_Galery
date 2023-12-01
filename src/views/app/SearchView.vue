<script setup lang="ts">
import AppPagination from '@/components/AppPagination.vue';
import { ref } from 'vue';

const page = ref(1);
</script>

<template>
  <section>
    <div class="level">
      <div class="level-left">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Recherche">
            <span class="icon is-medium is-left has-text-black">
              <i class="mdi mdi-magnify"></i>
            </span>
          </p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <app-pagination
            :total="400"
            v-model:current="page"
          />
        </div>
      </div>
    </div>
  </section>
</template>
