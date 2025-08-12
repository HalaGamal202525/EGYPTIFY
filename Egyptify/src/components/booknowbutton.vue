<template>
  <button
    @click="handleClick"
    class="px-6 py-2 bg-green-500 text-white rounded-lg  hover:bg-green-600"
  >
    Book Now
  </button>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'BookNowButton',
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()

    const handleClick = () => {
      router.push({
        name: 'form',
        query: {
          name: props.restaurant.name,
          priceRange: props.restaurant.priceRange,
          slug: props.restaurant.slug
        }
      })
    }

    return { handleClick }
  }
}
</script>
