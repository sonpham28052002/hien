<template>
  <header class="bg-white shadow-md sticky top-0 z-50 font-century">
    <div class="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
      <!-- Logo -->
      <a href="/">
        <img src="/images/Logo.png" alt="Logo" class="h-20 scale-[4] pl-8 pr-2" />
      </a>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center space-x-6 font-medium text-gray-700">
        <p @click="navigate('#collection')" class="nav-hover-underline text-xl cursor-pointer">Bộ sưu tập</p>
        <p @click="navigate('#products')" class="nav-hover-underline text-xl cursor-pointer">Sản phẩm</p>
        <p @click="navigate('#about')" class="nav-hover-underline text-xl cursor-pointer">Về chúng tôi</p>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-5">
        <p @click="router.push({ name: 'cart' })" class="text-2xl relative hover:text-[#520008] cursor-pointer">
          <i class="fas fa-shopping-cart"></i>
          <span class="absolute -top-3 -right-3 bg-yellow-500 text-xs text-white rounded-full px-1">2</span>
        </p>
        <p @click="router.push({ name: 'login' })" class="text-2xl hover:text-[#520008] cursor-pointer">
          <i class="fas fa-user-circle"></i>
        </p>
        <!-- Toggle Mobile -->
        <button class="md:hidden text-2xl" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade-slide">
      <div
        v-if="showMenu"
        class="absolute right-5 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md z-50"
      >
        <p @click="navigate('#collection')" class="mobile-item">Bộ sưu tập</p>
        <p @click="navigate('#products')" class="mobile-item">Sản phẩm</p>
        <p @click="navigate('#about')" class="mobile-item">Về chúng tôi</p>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const navigate = (hash) => {
  showMenu.value = false;
  router.push({ path: '/', hash });
};
</script>

<style scoped>
/* Fade Slide Animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Underline hover effect */
.nav-hover-underline {
  position: relative;
  display: inline-block;
}
.nav-hover-underline::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #520008;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}
.nav-hover-underline:hover::after {
  transform: scaleX(1);
}
.nav-hover-underline:hover {
  color: #520008;
}

/* Mobile item styling */
.mobile-item {
  display: block;
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: #444;
}
.mobile-item:hover {
  background-color: #fef3c7; /* yellow-100 */
}
</style>
