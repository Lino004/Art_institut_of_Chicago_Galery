<script setup lang="ts">

interface Props {
  iconName?: string,
  iconSize?: string,
  label?: string | number,
  disabled?: boolean,
}

//props
withDefaults(defineProps<Props>(), {
  iconSize: 'is-medium',
});

//emits
const emits = defineEmits<{
  (e: 'click'): void,
}>();
</script>

<template>
  <button
    class="button"
    @click.prevent="emits('click')"
    :disabled="disabled">
    <span v-if="iconName" :class="`icon ${iconSize}`">
      <i :class="`mdi ${iconName}`"></i>
    </span>
    <strong v-if="label"> {{ label }} </strong>
  </button>
</template>

<script lang="ts">
export default {};
</script>
