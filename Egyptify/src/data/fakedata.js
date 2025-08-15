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
      rating: Number((Math.random() * 2 + 3).toFixed(1)),
      reviewsCount: faker.number.int({ min: 50, max: 5000 }),
      rank: `#${faker.number.int({ min: 1, max: 1500 })} of 1500 Restaurants`,
      cuisine,
      priceRange: faker.helpers.arrayElement(["$", "$$", "$$$"]),
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
    "/unsplashfood/premium_photo-1663858367001-89e5c92d1e0e.avif",
    "/unsplashfood/premium_photo-1670984939096-f3cfd48c7408.avif",
    "/unsplashfood/premium_photo-1673108852141-e8c3c22a4a22.avif",
    "/unsplashfood/premium_photo-1673580742890-4af144293960.avif",
    "/unsplashfood/premium_photo-1681841594224-ad729a249113.avif",
    "/unsplashfood/premium_photo-1686090448301-4c453ee74718.avif",
    "/unsplashfood/photo-1555396273-367ea4eb4db5.avif",
    "/unsplashfood/photo-1555939594-58d7cb561ad1.avif",
    "/unsplashfood/photo-1414235077428-338989a2e8c0.avif",
    "/unsplashfood/photo-1466978913421-dad2ebd01d17.avif",
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
    priceRange: faker.helpers.arrayElement(["$", "$$", "$$$"]),
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
