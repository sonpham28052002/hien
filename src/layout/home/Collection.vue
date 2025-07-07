<template>
  <section id="collection" class="relative py-16 scroll-mt-14 h-screen text-white px-6 text-center bg-[#520008]">
   <h2 class="text-3xl font-bold mb-4">Bộ sưu tập</h2>
<p class="max-w-2xl mx-auto mb-6">
  Hành trình khám phá vẻ đẹp vượt thời gian của kiến trúc, điêu khắc và nghệ thuật Khmer – nơi quá khứ gặp gỡ hiện tại trong từng đường nét tinh xảo.
</p>
    <div class="lg:max-w-[70%] max-w-[90%] mx-auto mt-20 overflow-hidden rounded-lg h-1/2">
      <n-carousel show-arrow autoplay :slides-per-view="slidesPerView" :space-between="20" :loop="true" draggable
        >
        <img class="carousel-img" src="/images/product/1.png">
        <img class="carousel-img" src="/images/product/2.png">
        <img class="carousel-img" src="/images/product/3.png">
        <img class="carousel-img" src="/images/product/4.png">
        <img class="carousel-img" src="/images/product/5.png">
        <img class="carousel-img" src="/images/product/5.png">
        <img class="carousel-img" src="/images/product/khan_137_183.png">
        <img class="carousel-img" src="/images/product/khan_25_90_120k.png">
        <img class="carousel-img" src="/images/product/khan_100_100_180k.png">
        <img class="carousel-img" src="/images/product/khan_25_40_75k.png">
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button type="button" class="custom-arrow--left" @click="prev">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button type="button" class="custom-arrow--right" @click="next">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li v-for="index of total" :key="index" :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)" />
          </ul>
        </template>
      </n-carousel>
    </div>
     <div style="background-image: url(images/rang.png);"
      class="w-full absolute left-0 bottom-0 bg-cover z-20 h-20 bg-cover"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { NCarousel } from 'naive-ui'

const slidesPerView = ref(3)

const updateSlidesPerView = () => {
  slidesPerView.value = window.innerWidth < 768 ? 1 : 3
}

onMounted(() => {
  updateSlidesPerView()
  window.addEventListener('resize', updateSlidesPerView)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSlidesPerView)
})
</script>


<style scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 2px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgb(82, 0, 8, 0.5);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgb(82, 0, 8);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 10px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(82, 0, 8, 0.4);
  transition:
    width 0.3s,
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #520008;
}
</style>
