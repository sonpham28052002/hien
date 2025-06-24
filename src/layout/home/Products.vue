<template>
  <section id="products" class="max-w-6xl mx-auto scroll-mt-14 p-5 px-4 pb-16 h-screen">
    <div class="flex flex-wrap items-center gap-2 mb-6">
      <button
        v-for="type in ['Tất cả', 'Huy hiệu', 'Khăn', 'Card', 'Quạt']"
        :key="type"
        :class="[
          'filter-btn px-4 py-1 rounded-full',
          selectedType === type ? 'bg-blue-600 text-white' : 'border',
        ]"
        @click="selectedType = type"
      >
        {{ type }}
      </button>
      <button id="sortBtn" class="ml-auto border px-4 py-1 rounded-full" @click="toggleSort">
        Sắp xếp giá
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="product-list">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white rounded-xl shadow-md p-4 relative"
      >
      {{ product.id }}
        <img :src="product.image" :alt="product.name" class="w-full h-40 object-contain mb-4 rounded" />
        <h3 class="text-lg font-semibold text-indigo-800">{{ product.name }}</h3>
        <p class="text-sm text-gray-600 mb-2">{{ product.description }}</p>
        <div class="text-orange-600 font-bold text-lg">
          {{ formatPrice(product.price) }}
          <span v-if="product.oldPrice > product.price" class="text-gray-400 text-sm line-through ml-2">
            {{ formatPrice(product.oldPrice) }}
          </span>
        </div>
        <div class="mt-4 flex justify-between">
          <button
            @click="addToCart(product.id)"
            class="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          >
            Giỏ
          </button>
          <button @click="toggleFavorite(product.id)" class="text-red-500 text-xl">
            <i :class="['fas fa-heart', isFavorite(product.id) && 'text-red-600']"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const products = ref([
  {
    id: 1,
    name: 'Huy hiệu Thạch Âm - Xanh Rêu',
    price: 20000,
    oldPrice: 25000,
    type: 'Huy hiệu',
    image: '/images/product/1.png',
    description: 'Huy hiệu cảm hứng từ văn hóa Khmer, màu xanh rêu tinh tế.',
  },
  {
    id: 2,
    name: 'Khăn Bandana Thạch Âm',
    price: 255000,
    oldPrice: 300000,
    type: 'Khăn',
    image: '/images/product/2.png',
    description: 'Khăn cao cấp, hoa văn Khmer độc đáo.',
  },
  {
    id: 3,
    name: 'Card Visit Thạch Âm',
    price: 255000,
    oldPrice: 300000,
    type: 'Card',
    image: '/images/product/3.png',
    description: 'Card thương hiệu Thạch Âm, miễn phí kèm đơn hàng.',
  },
  {
    id: 4,
    name: 'Card Visit Thạch Âm',
    price: 255000,
    oldPrice: 300000,
    type: 'Card',
    image: '/images/product/4.png',
    description: 'Card thương hiệu Thạch Âm, miễn phí kèm đơn hàng.',
  },
])

const selectedType = ref('Tất cả')
const sortOrder = ref('asc')

const filteredProducts = computed(() => {
  let result = products.value.filter(
    (p) => selectedType.value === 'Tất cả' || p.type === selectedType.value
  )
  result.sort((a, b) =>
    sortOrder.value === 'asc' ? a.price - b.price : b.price - a.price
  )
  return result
})

const toggleSort = () => {
  sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
}

const addToCart = (id) => {
  alert('Đã thêm vào giỏ hàng!')
}

const toggleFavorite = (id) => {
  const fav = JSON.parse(localStorage.getItem('favorites') || '[]')
  const exists = fav.includes(id)
  const updated = exists ? fav.filter((f) => f !== id) : [...fav, id]
  localStorage.setItem('favorites', JSON.stringify(updated))
}

const isFavorite = (id) => {
  const fav = JSON.parse(localStorage.getItem('favorites') || '[]')
  return fav.includes(id)
}

const formatPrice = (num) => {
  return num.toLocaleString() + '₫'
}
</script>
