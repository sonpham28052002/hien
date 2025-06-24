<template>
  <footer class="bg-[#520008] text-white px-6 py-12 text-sm">
    <div class="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
      <div>
        <p class="text-yellow-400 font-bold text-2xl font-BASKVILL">
          Damrei Khmer Restaurant
        </p>
        <p class="mt-4 text-[16px]">
          475A Đường Điện Biên Phủ, P.25, Q. Bình Thạnh, TP.HCM<br />
          ĐT: (+84) 337 553 469<br />
          Fax: (+84) 337 553 469
        </p>
        <div class="mt-4">
          <p class="flex text-[16px] items-center gap-2 text-white mb-2 hover:text-yellow-300 cursor-pointer">
            <i class="fas fa-map-marker-alt"></i> Xem bản đồ
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1252878944842!2d106.71187977587219!3d10.801715089348628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a500e8c3d5%3A0xedfca63e47b5afb8!2zNDc1YSDEkGnhu4duIEJpw6puIFBo4bunLCBQaMaw4budbmcgMjUsIELDrG5oIFRo4bqhbmgsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1750781750485!5m2!1svi!2s"
            width="300" height="150" style="border:0;" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="text-[16px]">
        <h4 class="uppercase text-yellow-300 font-semibold mb-3 tracking-wide">Kết nối với chúng tôi</h4>
        <p class="mb-1">Hotline: (+84) 337 553 469</p>
        <p class="mb-4">Email: <a href="mailto:damrei@gmail.com" class="underline">damrei@gmail.com</a></p>
        <div class="flex gap-4 text-2xl text-yellow-400">
          <a href="#" class="hover:text-white transition social-icon"><img src="/images/facebook.png" alt=""
              srcset=""></a>
          <a href="#" class="hover:text-white transition social-icon"><img src="/images/instagram.png" alt=""
              srcset=""></a>
          <a href="#" class="hover:text-white transition social-icon"><img src="/images/youtube.png" alt=""
              srcset=""></a>
        </div>
      </div>
      <div class="flex flex-col items-center justify-between w-fit overload-hidden">
        <img src="/images/notifi.webp" alt="Thông báo" class="h-16 mb-4" />
        <img src="/images/Logo_white.png" alt="" srcset="" class="scale-[1] w-[100%]">
        <a href="#"
          class="mt-6 text-white border-yellow-500 border transaction duration-700 hover:bg-yellow-500 px-6 py-3 rounded w-fit">
          Quay về đầu trang
        </a>
      </div>
    </div>

    <div class="text-center text-xs text-gray-300 mt-10 border-t border-gray-700 pt-4">
      © 2025 Damrei Khmer Restaurant. All rights reserved.
    </div>
  </footer>
</template>
<style scoped>
.social-icon:hover img {
  filter: drop-shadow(0 4px 16px #facc15);
}
</style>