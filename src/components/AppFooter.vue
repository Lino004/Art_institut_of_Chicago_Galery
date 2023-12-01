<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';

const socialMedia = [
  { icon: 'mdi-youtube' },
  { icon: 'mdi-twitter' },
  { icon: 'mdi-instagram' },
  { icon: 'mdi-facebook' },
];
</script>

<template>
  <footer class="app-footer">
    <section class="container p-3">
      <div class="level">
        <router-link class="level-left" to="/">
          <img src="@/assets/img/logo-black.png" width="38">
          <span class="has-text-white">ART INSTITVTE CHICAGO</span>
        </router-link>
        <div class="level-right buttons are-small">
          <app-button
            v-for="(item, index) in socialMedia" :key="index"
            :icon-name="item.icon"
            class="icon-foot is-outlined is-white"
          />
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
export default {};
</script>
