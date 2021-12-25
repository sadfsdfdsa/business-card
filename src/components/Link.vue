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

const onClickHandler = () => {
  window.open(props.href, 'blank')
}
</script>

<template>
  <div
    class="bg-blue-200 text-blue-600 bg-opacity-20 px-2 cursor-pointer"
    @click="onClickHandler"
  >
    {{ props.text }}
  </div>
</template>
