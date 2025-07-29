// src/BlogData.js
import post1 from './assets/blogs/post1.jpg'
import post2 from './assets/blogs/post2.jpg'
import person1 from './assets/blogs/person1.png'
import person2 from './assets/blogs/person2.png'

export const blogs = [
  {
    id: 1,
    title: "Discover Luxor",
    author: "Sara Mostafa",
    date: "July 2025",
    summary: "Explore the ancient temples and tombs of Luxor.",
    image: post1,
    authorImage: person1,
    authorBio: "Egyptologist and travel writer.",
    content: `Luxor is often referred to as the world's greatest open-air museum...`
  },
  {
    id: 2,
    title: "Hidden Gems of Aswan",
    author: "Omar Tarek",
    date: "June 2025",
    summary: "Uncover secret spots in the beautiful city of Aswan.",
    image: post2,
    authorImage: person2,
    authorBio: "Photographer and Nile explorer.",
    content: `Aswan offers more than just its famous High Dam...`
  },
  // باقي البوستات بنفس الشكل...
]
