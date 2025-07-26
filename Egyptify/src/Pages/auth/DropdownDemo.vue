<!-- src/Pages/auth/DropdownDemo.vue -->
 <template>
  <div class="p-8">
    <h1 class="text-2xl font-bold mb-4">Dropdown Demo</h1>
    <DropdownMenu :label="'Explore Egypt'" :options="items" />
  </div>
</template>

<script setup>

import DropdownMenu from '../../components/DropdownMenu.vue'


const items = [
  { label: 'Events', to: '/events' },
  { label: 'Restaurants', to: '/restaurants' },
  { label: 'Hotels', to: '/hotels' },
  { label: 'Luxor' },
  { label: 'Aswan'},
  { label: 'Alexandria'},
  { label: 'Cairo'},
  { label: 'Siwa'},

]
</script> 




