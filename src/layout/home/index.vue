<template>
  <div class="bg-white text-gray-900 font-sans">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import { RouterView } from 'vue-router'
</script>
