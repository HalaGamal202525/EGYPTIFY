export default [
  {
    type: 'restaurant',
    slug: 'sofra-restaurant',
    title: 'Sofra Restaurant',
    address: '90 Mohamed Farid St, Luxor, Egypt',
    rating: 4.5,
    images: ['/restaurant/main.jpg', '/restaurant/img1.jpg', '/restaurant/img2.jpg'],
    thumbnails: [
      '/restaurant/thumb1.jpg',
      '/restaurant/thumb2.jpg',
      '/restaurant/thumb3.jpg',
      '/restaurant/thumb4.jpg'
    ],
    description: [
      'Sofra offers traditional Egyptian cuisine in an authentic setting.',
      'The rooftop terrace provides views of the city skyline.',
      'Vegetarian and vegan options are available.'
    ],
    facilities: [
      { name: 'Free Wi-Fi', icon: 'fas fa-wifi' },
      { name: 'Vegetarian options', icon: 'fas fa-leaf' }
    ],
    reviews: [
      {
        name: 'Nora',
        avatar: 'https://i.pravatar.cc/150?img=12',
        date: 'July 2025',
        rating: 4.8,
        comment: 'Delicious food and great service!'
      }
    ]
  }
]

