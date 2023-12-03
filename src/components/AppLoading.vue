<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  fullscreen: boolean,
}

//props
withDefaults(defineProps<Props>(), {
  fullscreen: true
});

const root = ref();
</script>
<template>
  <div class="app-loading" :class="{ 'is-fullscreen': fullscreen }" ref="root">
    <div class="absolute-center lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
</template>
