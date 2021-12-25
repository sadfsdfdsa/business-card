<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a
    class="bg-blue-200 text-blue-600 bg-opacity-20 px-2 cursor-pointer"
    :href="props.href"
    target="blank"
  >
    {{ props.text }}
  </a>
</template>
