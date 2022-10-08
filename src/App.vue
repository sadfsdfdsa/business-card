<script setup lang="ts">
import { ref } from 'vue'
import Link from './components/Link.vue'
import CompanyExpItem from './components/CompanyExpItem.vue'
import { contactLinks, experienceItems } from './constants'

const blockTwo = ref<HTMLElement | null>(null)

const scrollToBlockTwo = () => {
  if (!blockTwo.value) return

  ym(86994091, 'reachGoal', 'click-more')
  blockTwo.value.scrollIntoView({ behavior: 'smooth' })
}

const scrollToBegin = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="bg-gray-200">
    <header
      class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img flex-col"
    >
      <div class="flex flex-col p-5 mt-auto text-center text-white gap-2">
        <h1 class="text-4xl font-semibold">Artem<br />Shuvaev</h1>
        <div class="text-2xl">senior frontend engineer</div>
        <div class="text-xl">
          solve <span class="bg-gray-50 bg-opacity-20">problems</span>, write
          <span class="bg-gray-50 bg-opacity-20">articles</span>, help
          <span class="bg-gray-50 bg-opacity-20">open source</span>
        </div>
        <div class="tracking-widest mt-2">
          #Javascript #Typescript #Vue.js #Svelte #Node.js #NestJS
        </div>
      </div>
      <button
        class="flex text-white mt-auto mb-2 hover:text-gray-300 active:text-gray-400"
        @click="scrollToBlockTwo"
      >
        More
      </button>
    </header>
    <div ref="blockTwo" class="max-w-lg m-auto">
      <h1 class="text-2xl text-center">Links</h1>
      <div
        class="flex flex-wrap flex-row gap-5 tracking-widest justify-center mt-7 mb-7"
      >
        <Link
          v-for="(link, index) in contactLinks"
          :key="index"
          :text="link.text"
          :href="link.href"
          :ym-event="link.ymEvent"
        />
      </div>
    </div>
    <div ref="blockThree" class="max-w-lg m-auto mb-7">
      <h1 class="text-2xl text-center">Experience</h1>
      <CompanyExpItem
        v-for="(company, index) in experienceItems"
        :key="index"
        :name="company.name"
        :position="company.position"
        :tags="company.tags"
        :site="company.site"
      />
    </div>
    <div ref="blockFour" class="max-w-lg m-auto mb-7">
      <h1 class="text-2xl text-center">Articles</h1>
      <div class="flex justify-center text-center mt-5 text-xl">
        <Link
          text="Ideal Vue.js and Typescript application"
          href="https://habr.com/ru/post/540798/"
          ym-event="click-article"
        />
      </div>
      <div class="flex justify-center text-center mt-5 text-xl">
        <Link
          text="Vue 3 with Composition API and Typescript"
          href="https://habr.com/ru/post/557928/"
          ym-event="click-article"
        />
      </div>
    </div>
    <div ref="blockFive" class="max-w-lg m-auto mb-7">
      <h1 class="text-2xl text-center">Open source</h1>
      <div class="flex justify-center mt-5 text-xl">
        <Link
          text="OpenApi Typescript generator"
          href="https://github.com/drwpow/openapi-typescript"
          ym-event="click-opensource"
        />
      </div>
    </div>
    <button
      class="m-auto max-w-lg flex text-center mb-2 hover:text-gray-700 active:text-gray-600"
      @click="scrollToBegin"
    >
      To top
    </button>
    <section class="flex m-auto bg-fixed bg-center bg-cover custom-img h-52">
      <div class="text-white mt-auto ml-auto mr-5 mb-5">
        with ❤️ from
        <span class="bg-gray-50 bg-opacity-20">Perm</span>
      </div>
    </section>
  </div>
</template>

<style>
.custom-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80'),
    url(./assets/high.avif), url(./assets/low.avif);
}
</style>
