<template>
  <section
    id="products"
    class=" mx-auto scroll-mt-14 p-5 px-4 pb-16 max-h-fit flex flex-col items-center gap-6 bg-gray-50 w-full"
  >
    <div
      class="flex flex-wrap items-center gap-2 mb-6 shadow-lg border p-4 bg-white rounded-lg max-w-6xl"
    >
      <button
        v-for="type in [
          'Tất cả',
          ...products
            .map((p) => p.type)
            .filter((v, i, a) => a.indexOf(v) === i),
        ]"
        :key="type"
        :class="[
          'filter-btn px-4 py-1 rounded-md',
          selectedType === type ? 'bg-blue-600 text-white' : 'border',
        ]"
        @click="selectedType = type"
      >
        {{ type }}
      </button>
      <button
        id="sortBtn"
        class="ml-auto border px-4 py-1 rounded-md"
        @click="toggleSort"
      >
        Sắp xếp giá
      </button>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      id="product-list"
    >
      <div
        class="w-[300px] overflow-hidden cursor-pointer h-fit rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <div class="bg-gray-200 rounded-t-md relative">
          <div class="flex flex-row justify-between px-2 pt-1 h-fit absolute w-full">
            <span
              class="mt-2 text-white bg-[#520008] px-3 z-10  h-5 rounded-md text-sm "
              style="font-family: Arial, Helvetica, sans-serif"
              >{{ product.type }}</span
            >
            <span
              @click.stop="toggleFavorite(product.id)"
              class="text-2xl fa-stack w-fit h-fit z-10 cursor-pointer"
            >
              <i
                class="fas fa-heart drop-shadow"
                :class="isFavorite(product.id) ? 'text-red-500' : 'text-white'"
              ></i>
            </span>
          </div>
          <img
            :src="product.image"
            alt="#"
            class="w-full object-contain hover:scale-105 rounded-t-md transition-all duration-300"
          />
        </div>
        <div class="px-5 py-2 border-t max-h-56">
          <div class="flex flex-row justify-between w-full">
            <h3 class="text-lg font-bold text-gray-800 mb-1">
              {{ product.name }}
            </h3>
            <span
              >4.5<i class="fa fa-star text-yellow-400"></i>
              <span class="text-xs text-blue-500">(1000)</span></span
            >
          </div>
          <div class="flex-grow">
            <div class="text-yellow-600 font-semibold text-lg flex-col">
              {{ formatPrice(product.price) }}
              <span
                v-if="product.oldPrice > product.price"
                class="text-gray-400 text-sm line-through ml-2"
              >
                {{ formatPrice(product.oldPrice) }}
              </span>
            </div>
          </div>
          <div class="mt-4 flex justify-between items-center">
            <button
              class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              Xem chi tiết
            </button>
            <div class="gap-2 flex flex-row">
              <button @click.stop="addToCart(product.id)" class="text-xl transition">
                <i class="fas fa-shopping-cart text-black"></i>
              </button>
            </div>
          </div>
        </div>
        <div
          class="text-xs flex flex-row justify-between bg-gray-100 rounded-b-md p-2 shadow"
        >
          <span class="text-green-600 font-semibold flex items-center">
            <i class="fas fa-truck mr-1"></i> Miễn phí vận chuyển
          </span>
          <span class="text-blue-600 font-semibold flex items-center">
            <i class="fas fa-shield-alt mr-1"></i> Bảo hành 1 năm
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const products = ref([
  {
    id: 1,
    name: "Túi vải Canvas",
    price: 45000,
    oldPrice: 70000,
    type: "Túi vải",
    image: "/images/product/1.png",
    description:
      "Đây là mẫu túi sách canvas cao cấp mang đậm dấu ấn văn hóa Khmer.",
  },
  {
    id: 2,
    name: "Bát Gỗ Damrei",
    price: 60000,
    oldPrice: 79000,
    type: "Bát Gỗ",
    image: "/images/product/2.png",
    description:
      " Bát gỗ Damrei mang phong cách hiện đại pha nét văn hóa Khmer.",
  },
  {
    id: 3,
    name: "Bộ Ấm Trà Damrei",
    price: 399000,
    oldPrice: 450000,
    type: "Bộ Ấm Trà",
    image: "/images/product/3.png",
    description:
      "Bộ ấm trà Damrei mang hơi thở hiện đại hòa quyện cùng nét văn hóa Khmer.",
  },
  {
    id: 4,
    name: "Đĩa gỗ Damrei",
    price: 110000,
    oldPrice: 149000,
    type: "Đĩa gỗ",
    image: "/images/product/4.png",
    description: "Đĩa gỗ Damrei mang nét hiện đại pha trộn văn hóa Khmer.",
  },
  {
    id: 5,
    name: "Bộ đĩa, thìa, nĩa Damrei",
    price: 110000,
    oldPrice: 149000,
    type: "Bộ đĩa, thìa, nĩa",
    image: "/images/product/5.png",
    description:
      "Bộ đĩa, thìa, nĩa Damrei mang phong cách tối giản hiện đại, kết hợp hoa văn Khmer chạm khắc tinh tế trên thân gỗ.",
  },
  {
    id: 6,
    name: "Áo Polo Damrei",
    price: 200000,
    oldPrice: 279000,
    type: "Áo Polo",
    image: "/images/product/6.png",
    description:
      "Áo Polo Damrei mang phong cách hiện đại pha nét văn hóa Khmer.",
  },
]);

const selectedType = ref("Tất cả");
const sortOrder = ref("asc");

const filteredProducts = computed(() => {
  let result = products.value.filter(
    (p) => selectedType.value === "Tất cả" || p.type === selectedType.value
  );
  result.sort((a, b) =>
    sortOrder.value === "asc" ? a.price - b.price : b.price - a.price
  );
  return result;
});

const toggleSort = () => {
  sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
};

const addToCart = (id) => {
  alert("Đã thêm vào giỏ hàng!");
};

const toggleFavorite = (id) => {
  const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
  const exists = fav.includes(id);
  const updated = exists ? fav.filter((f) => f !== id) : [...fav, id];
  localStorage.setItem("favorites", JSON.stringify(updated));
};

const isFavorite = (id) => {
  const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
  return fav.includes(id);
};

const formatPrice = (num) => {
  return num.toLocaleString() + "₫";
};
</script>

<style scoped>
.drop-shadow {
  filter: drop-shadow(0 4px 16px #888686);
}
</style>