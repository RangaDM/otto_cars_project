// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "The best way to drive cars",
    author: "Hasaranga",
    date: "12 Dec, 2023",
    time: "9pm",
    imgUrl: img01,
    description:
      "Master the art of driving with our comprehensive guide. Learn about the best practices for safe and efficient driving, from proper seating position and mirror adjustment to understanding road signs and maintaining your vehicle. Whether you're a beginner or an experienced driver, our guide offers valuable insights to enhance your driving skills and ensure a smooth ride every time.",
    quote:
      "Driving is not just about getting from A to B. It's about being in control of a machine, understanding the road, and enjoying the journey.",
  },

  {
    id: 2,
    title: "If your car battery is down",
    author: "Hasaranga",
    date: "19 Mar, 2024",
    time: "11pm",
    imgUrl: img02,
    description:
      "Discover what to do when your car battery is down. Our guide provides practical steps to jump-start your car and tips on battery maintenance to prevent future issues.",
    quote:
      "A well-maintained car battery is key to a reliable and enjoyable driving experience.",
  },

  {
    id: 3,
    title: "The best way to give trip",
    author: "Hasaranga",
    date: "09 Apr, 2024",
    time: "8Am",
    imgUrl: img03,
    description:
      "Explore the art of planning and executing the perfect trip. Our guide covers everything from choosing the right destination and creating a comprehensive itinerary, to packing essentials and ensuring a smooth journey.",
    quote:
      "Travel is more than the seeing of sights; it's a change that goes on, deep and permanent, in the ideas of living.",
  },
];

export default blogData;
