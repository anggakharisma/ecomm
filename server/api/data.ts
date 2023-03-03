export default defineEventHandler((event) => {
  const items = [
    {
      id: 1,
      name: "CCW BANANA",
      price: 65000,
      image: "bottle_banana.png"
    },
    {
      id: 2,
      name: "CCW LYCHE",
      price: 65000,
      image: "bottle_lyche.png"
    },
    {
      id: 3,
      name: "CCW WATERMELON",
      price: 65000,
      image: "bottle_watermelon.png"
    },
  ];

  return items;
})
