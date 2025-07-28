<template>
  <NavBarBlack />
  <div class="w-full">
    <div style="margin-top: 100px;">
      <OtpInput />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import NavBarBlack from "../components/NavBar-Black.vue"
import Footer from "../components/footer.vue"
import OtpInput from '../components/OtpInput.vue'
</script>