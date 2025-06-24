<template>
  <div class="bg-black/50 flex items-center justify-start min-h-screen "
    style="background-image: url('/images/bg.png'); background-size: cover; background-position: center; background-repeat: no-repeat; backdrop-filter: blur(2px);">
    <div class="flex flex-col md:flex-row w-fit min-w-[30%] py-3 sm:py-12 m-10 bg-white max-w-7xl rounded-2xl  overflow-hidden">
      <div class="w-full flex items-center justify-center p-3">
        <div class="w-full max-w-md">
          <div class="flex justify-center mb-4 h-20">
            <img src="/images/Logo.png" alt="Khmer Icon" class="scale-[5]" />
          </div>
          <h2 class="text-xl sm:text-2xl font-bold text-center text-yellow-700 mb-2 font-BASKVILL tracking-wide">
            Damrei Khmer Restaurant
          </h2>
          <p class="text-center text-sm text-gray-600 mb-6 italic px-2">
            Nơi giao thoa giữa truyền thống Khmer và phong cách hiện đại. Vẻ đẹp tinh tế, huyền bí và đầy bản sắc của
            Khmer.
          </p>

          <form method="POST" action="/login" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 ">Email hoặc Số điện thoại</label>
              <input type="text" name="username" required placeholder="example@email.com hoặc 09xxxxxxxx"
                class="w-full px-4 text-sm py-2 rounded-lg border border-gray-300 focus:ring-yellow-600 focus:outline-none" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Mật khẩu</label>
              <input type="password" name="password" required placeholder="Nhập mật khẩu của bạn"
                class="w-full px-4 text-sm py-2 rounded-lg border border-gray-300 focus:ring-yellow-600 focus:outline-none" />
            </div>
            <button type="submit"
              class="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-lg transition">
              Đăng nhập
            </button>
          </form>

          <div class="text-center text-sm mt-3">
            <a href="#" class="text-yellow-700 hover:underline">Quên mật khẩu?</a>
          </div>

          <div class="mt-6 text-center text-sm text-gray-500">Hoặc đăng nhập bằng</div>
          <div class="mt-3 grid grid-cols-3 gap-3">
            <button class="flex justify-center items-center border rounded-lg py-2 hover:bg-gray-50 bg-white">
              <i class="fab fa-google text-red-500"></i>
            </button>
            <button class="flex justify-center items-center border rounded-lg py-2 hover:bg-gray-50 bg-white">
              <i class="fab fa-facebook-f text-blue-600"></i>
            </button>
            <button class="flex justify-center items-center border rounded-lg py-2 hover:bg-gray-50 bg-white">
              <i class="fas fa-qrcode text-gray-600"></i>
            </button>
          </div>

          <p class="mt-6 text-sm text-center text-gray-700">
            Chưa có tài khoản?
            <a href="/login" class="text-yellow-700 font-medium hover:underline">Đăng ký ngay</a>
          </p>
          <p class="mt-2 text-sm text-center text-gray-700 text-yellow-700 font-medium hover:underline cursor-pointer"
            @click="router.push({ name: 'home' })">Quay lại trang chủ</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
