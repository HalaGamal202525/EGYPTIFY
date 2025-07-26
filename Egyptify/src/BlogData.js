import post1 from './assets/blogs/post1.jpg'
import post2 from './assets/blogs/post2.jpg'
import person1 from './assets/blogs/person1.png'  // <-- هنا الامتداد الصحيح
import person2 from './assets/blogs/person2.png'  // <-- لو التانية برضو .png


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
  },
  // ضيفي باقي البوستات بنفس الشكل
  {
    id: 3,
    title: "A Day in Cairo",
    author: "Nour El-Din",
    date: "May 2025",
    summary: "Enjoy the hustle and history of Cairo in one day.",
   image: post1,
    authorImage: person1,
    authorBio: "Journalist and travel blogger.",
  },
  {
    id: 4,
    title: "Relaxing in Siwa",
    author: "Laila Hassan",
    date: "April 2025",
    summary: "Discover the beauty and calm of Siwa Oasis.",
  image: post1,
    authorImage: person1,
    authorBio: "Wellness coach and nature lover.",
  },
  {
    id: 5,
    title: "Snorkeling in Marsa Alam",
    author: "Ahmed Selim",
    date: "March 2025",
    summary: "Explore the stunning coral reefs of Marsa Alam.",
    image: post1,
    authorImage: person1,
    authorBio: "Marine biologist and diver.",
  },
  {
    id: 6,
    title: "Alexandria: Mediterranean Charm",
    author: "Yasmine Fouad",
    date: "February 2025",
    summary: "Take a walk along the corniche and into history.",
   image: post1,
    authorImage: person1,
    authorBio: "Historian and storyteller.",
  },
]
