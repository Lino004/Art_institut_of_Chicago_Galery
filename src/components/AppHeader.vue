<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="@/assets/img/logo-red.svg" width="99">
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link exact-active-class="is-active" class="navbar-item" :to="{ name: 'app.home' }">
              Accueil
            </router-link>
            <router-link exact-active-class="is-active" class="navbar-item" :to="{ name: 'app.gallery' }">
              Galerie
            </router-link>
            <router-link exact-active-class="is-active" class="navbar-item" :to="{ name: 'app.about' }">
              A propos
            </router-link>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <app-button
                label="Connexion"
                class="is-primary"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {};
</script>
