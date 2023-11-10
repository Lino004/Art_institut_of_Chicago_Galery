<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <app-header/>
    </div>
    <div class="hero-body is-align-items-start">
      <div class="container">
        <router-view />
      </div>
    </div>
    <div class="hero-foot">
      <app-footer/>
    </div>
  </section>
</template>
