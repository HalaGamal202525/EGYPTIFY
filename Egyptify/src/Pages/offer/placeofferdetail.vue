<!-- <template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">{{ place.name }}</h1>
    <img :src="place.img" class="w-full max-w-md mb-4 rounded-xl" />
    <p><strong>Type:</strong> {{ place.type }}</p>
    <p><strong>Location:</strong> {{ place.location }}</p>
    <p><strong>Review:</strong> {{ place.review }}</p>
    <p class="mt-4">{{ place.description }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const place = ref({});

onMounted(async () => {
  const id = route.params.id;
  const res = await axios.get(`http://localhost:3000/api/Data/places/${id}`);
  place.value = res.data;
});
</script> -->
