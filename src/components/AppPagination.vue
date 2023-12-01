<script lang="ts" setup>
import { computed } from 'vue';
import AppButton from '@/components/AppButton.vue';

const rangeBefore = 1;
const rangeAfter = 1;

interface Props {
  total: number,
  current: number,
  perPage?: number,
}

//props
const props = withDefaults(defineProps<Props>(), {
  total: 1,
  current: 1,
  perPage: 10,
});

//emits
const emits = defineEmits<{
  (e: 'update:current', num: number): void,
}>();

//computed
const pageCount = computed(() => {
  return Math.ceil(props.total / props.perPage);
});
const hasPrev = computed(() => {
  return props.current > 1;
});
const hasFirst = computed(() => {
  return props.current >= 2 + rangeBefore;
});
const hasFirstEllipsis = computed(() => {
  return props.current >= rangeBefore + 4;
});
const hasLast = computed(() => {
  return props.current <= pageCount.value - (1 + rangeAfter);
});
const hasLastEllipsis = computed(() => {
  return props.current < pageCount.value - (2 + rangeAfter);
});
const hasNext = computed(() => {
  return props.current < pageCount.value;
});
const pagesInRange = computed(() => {
  let left = Math.max(1, props.current - rangeBefore);
  if (left - 1 === 2) {
    left--; // Do not show the ellipsis if there is only one to hide
  }
  let right = Math.min(props.current + rangeAfter, pageCount.value);
  if (pageCount.value - right === 2) {
    right++; // Do not show the ellipsis if there is only one to hide
  }

  const pages = [];
  for (let i = left; i <= right; i++) {
    pages.push(getPage(i));
  }
  return pages;
});

//methods
const changePage = (num: number) => {
  if (props.current === num || num < 1 || num > pageCount.value) return;
  emits('update:current', num);
};
const getPage = (num: number) => {
  return {
    number: num,
    isCurrent: props.current === num,
    click: () => changePage(num),
  };
};


</script>

<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <app-button
      @click="changePage(current - 1)"
      :disabled="!hasPrev"
      icon-name="mdi-arrow-left-bold-circle mdi-24px"
      class="pagination-previous"/>
    <app-button
      @click="changePage(current + 1)"
      :disabled="!hasNext"
      icon-name="mdi-arrow-right-bold-circle mdi-24px"
      class="pagination-next"/>
    <ul class="pagination-list">
        <!--First-->
      <li v-if="hasFirst">
        <app-button
          @click="changePage(1)"
          :label="1"
          class="pagination-link"/>
      </li>
      <li v-if="hasFirstEllipsis">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>

      <!--Pages-->
      <li v-for="page in pagesInRange" :key="page.number">
        <app-button
          @click="page.click()"
          :label="page.number"
          :class="{ 'is-current': page.isCurrent }"
          class="pagination-link"/>
      </li>

      <!--Last-->
      <li v-if="hasLastEllipsis">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li v-if="hasLast">
        <app-button
          @click="changePage(pageCount)"
          :label="pageCount"
          class="pagination-link"/>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

