<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  tags: {
    type: Array as () => Array<String>,
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
})

const tagsString = computed(() => {
  return '#' + props.tags.join(' #')
})
</script>

<template>
  <div class="flex flex-row mt-5 items-baseline justify-center">
    <a
      class="underline text-xl mr-2 font-semibold cursor-pointer hover:text-blue-800"
      :href="props.site"
      target="blank"
    >
      {{ name }}
    </a>
    <span>/ {{ position }}</span>
  </div>
  <div class="flex justify-center text-center flex-row tracking-widest">
    {{ tagsString }}
  </div>
</template>
