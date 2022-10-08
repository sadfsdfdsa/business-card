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
  ymEvent: {
    type: String,
    required: true,
  },
})

const sendAnalytics = () => {
  ym(86994091, 'reachGoal', props.ymEvent)
}
</script>

<template>
  <a
    class="bg-blue-200 text-blue-600 bg-opacity-20 px-2 cursor-pointer hover:text-blue-800"
    :href="props.href"
    target="blank"
    @click="sendAnalytics"
  >
    {{ props.text }}
  </a>
</template>
