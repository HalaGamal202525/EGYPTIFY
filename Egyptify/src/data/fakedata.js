// fakeData.js
import { faker } from "@faker-js/faker";

export function generateEgyptGovernorates(count = 10) {
  const governorates = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Luxor",
    "Aswan",
    "Hurghada",
    "Sharm El Sheikh",
    "Fayoum",
  ];

  const cuisines = [
    "Egyptian",
    "Mediterranean",
    "Italian",
    "Seafood",
    "Sushi",
    "Lebanese",
    "Asian",
    "American",
    "Indian",
    "French",
  ];

  const restaurantImages = [
    "/food/tark.webp",
    "/food/zooba.webp",
    "/food/abou elsid.webp",
    "/food/cearve.jpg",
    "/food/hero.png",
    "/food/kazuka.png",
    "/food/lusills.webp",
    "/food/Naguib Mahfouz Cafe.webp",
    "/food/pier.webp",
    "/food/salaih-nubian.jpg",
    "/food/Sequoia.webp",
    "/food/sobhy.webp",
    "/food/suchi.webp",
    "/food/tamara.webp",
    "/bookingRestaurants/kosharyabutarek.jpg",
    "/bookingRestaurants/la-gourmandise-restaurant.jpg",
    "/bookingRestaurants/mediterranean.jpg",
    "/bookingRestaurants/starfish.jpg",
    "/bookingRestaurants/tabla.jpg",
    "/bookingRestaurants/the-view-at-romanov.jpg",
    "/bookingRestaurants/cafe riche.jpg",
    "/bookingRestaurants/khufu.jpg",
  ];

  return Array.from({ length: count }).map((_, i) => {
    const gov = faker.helpers.arrayElement(governorates);
    const img = faker.helpers.arrayElement(restaurantImages);
    const cuisine = faker.helpers.arrayElement(cuisines);
    const companyName = faker.company.name();

    const slug = `${gov}-${companyName}`
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    return {
      id: i + 1,
      name: `${gov} Restaurant ${companyName}`,
      governorate: gov,
      rating: [3, 3.5, 4, 4.5][Math.floor(Math.random() * 4)],
      reviewsCount: faker.number.int({ min: 50, max: 5000 }),
      rank: `#${faker.number.int({ min: 1, max: 1500 })} of 1500 Restaurants`,
      cuisine,
      price: faker.number.int({ min: 100, max: 500 }),
      image: img,
      slug,
    };
  });
}

export function getRestaurantBySlug(slug, allRestaurants) {
  return allRestaurants.find((r) => r.slug === slug);
}

export function generateRestaurantDetails(slug) {
  const staticImages = [
    "/fooddata/rest1.jpg",
    "/fooddata/rest2.jpg",
    "/fooddata/rest3.jpg",
    "/fooddata/rest4.jpg",
    "/fooddata/rest5.jpg",
    "/fooddata/rest6.jpg",
    "/fooddata/rest7.jpg",
    "/fooddata/rest8.jpg",
    "/fooddata/rest9.jpg",
    "/fooddata/rest10.jpg",
    "/unsplashfood/photo-1508424757105-b6d5ad9329d0.avif",
    "/unsplashfood/photo-1511690656952-34342bb7c2f2.avif",
    "/unsplashfood/photo-1514933651103-005eec06c04b.avif",
    "/unsplashfood/photo-1517248135467-4c7edcad34c4.avif",
    "/unsplashfood/photo-1565299624946-b28f40a0ae38.avif",
    "/unsplashfood/photo-1565958011703-44f9829ba187.avif",
    "/unsplashfood/photo-1578474846511-04ba529f0b88.avif",
    "/unsplashfood/premium_photo-1661433201283-fcb240e88ad4.avif",
    "/unsplashfood/premium_photo-1661883237884-263e8de8869b.avif",
    "/unsplashfood/premium_photo-1661953124283-76d0a8436b87.avif",
  ];

  const images = faker.helpers.arrayElements(staticImages, 3);

  return {
    name: faker.company.name(),
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
    reviewsCount: faker.number.int({ min: 50, max: 5000 }),
    rank: `#${faker.number.int({ min: 1, max: 1500 })} of 1500`,
    cuisine: faker.helpers.arrayElement([
      "Italian",
      "Mediterranean",
      "Egyptian",
      "Asian",
      "American",
    ]),
    price: faker.number.int({ min: 100, max: 500 }),
    address: faker.location.streetAddress(),
    phone: faker.phone.number(),
    description: faker.lorem.paragraphs(2),
    images,
    reviews: Array.from({ length: 5 }).map(() => ({
      name: faker.person.fullName(),
      date: faker.date.past().toLocaleDateString(),
      rating: Number((Math.random() * 2 + 3).toFixed(1)),
      comment: faker.lorem.sentences(3),
      avatar: faker.image.avatar(),
    })),
  };
}
