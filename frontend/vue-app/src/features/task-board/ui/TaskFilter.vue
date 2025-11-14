<template>
  <select class="border border-blue-200 rounded-md p-2 outline-0">
    <option v-for="option in options" :key="option.label" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface SelectProps {
  value: boolean | undefined
  label: string
}

const options: SelectProps[] = [
  { value: undefined, label: 'All tasks' },
  { value: true, label: 'Completed' },
  { value: false, label: 'In progress' },
]
</script>

<style scoped></style>
