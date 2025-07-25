<template>
  <div class="w-full">
    <Navbar /> 

    <section class="p-8">
        <Form/>
        <Card
  image="../assets/signup.png"
  title="Trip to Aswan"
  description="3 nights, 4 days"
  location="Aswan"
  date="Aug 15"
  duration="4d"
  people="12"
  price="2500"
  :rating="4.5"
  :showButton="true"
  buttonText="show"
/>
 
    </section>
    <Footer />
  </div>
</template>
<script setup>
import Navbar from '../components/navbar.vue'
import Footer from "../components/footer.vue"
import Card from "../components/card.vue"
import Form from "../components/TicketForm.vue"
</script>