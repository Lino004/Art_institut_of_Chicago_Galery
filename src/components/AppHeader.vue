<script setup lang="ts">
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="@/assets/img/Art_Institute_of_Chicago_logo.svg" width="99">
        </router-link>
      </div>

      <div class="navbar-menu">

        <div class="navbar-end">
          <div class="navbar-item">
            <router-link class="navbar-item" :to="{ name: 'app.home' }">
              Accueil
            </router-link>
            <router-link class="navbar-item" :to="{ name: 'app.search' }">
              Recherche
            </router-link>
            <router-link class="navbar-item" :to="{ name: 'app.about' }">
              A propos
            </router-link>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Connexion</strong>
              </a>
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
