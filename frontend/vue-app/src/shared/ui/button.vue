<template>
  <button v-bind="bindAttrs" :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs, type ButtonHTMLAttributes } from 'vue'

const props = defineProps<{ class?: string }>()

const attrs = useAttrs() as ButtonHTMLAttributes

const classes = computed(() => [
  'px-6 py-2 bg-blue-100 cursor-pointer rounded-md hover:bg-blue-200 transition-colors duration-200',
  props?.class,
  attrs?.class,
])

const bindAttrs = computed(() => {
  const { class: _, ...rest } = attrs
  return rest
})
</script>

<style lang="scss" scoped></style>
