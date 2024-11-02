export type ProductType = {
  name: string;
  description: string;
  image: string;
  tags: string[];
};

const imagePath = "/images/products/";
export const products: ProductType[] | [] = [
  {
    name: "Adjustable Dumbbell Set",
    description:
      "Customizable weights ranging from 5 to 50 lbs, ideal for strength training at home.",
    image: `${imagePath}/Adjustable Dumbbell Set.jpg`,
    tags: ["strength", "weights", "adjustable"],
  },
  {
    name: "Resistance Band Set",
    description:
      "Includes light, medium, and heavy resistance bands for a full-body workout.",
    image: `${imagePath}/Resistance Band Set.jpg`,
    tags: ["resistance", "flexibility", "portable"],
  },
  {
    name: "Foam Roller",
    description:
      "High-density foam roller for muscle recovery and deep tissue massage.",
    image: `${imagePath}/Foam Roller.jpg`,
    tags: ["recovery", "massage", "foam"],
  },
  {
    name: "Kettlebell (20 lbs)",
    description:
      "Compact kettlebell with an ergonomic handle, perfect for swings and squats.",
    image: `${imagePath}/Kettlebell (20 lbs).jpg`,
    tags: ["kettlebell", "strength", "compact"],
  },
  {
    name: "Pull Up Bar",
    description:
      "Doorway pull-up bar with multiple grip positions for an upper body workout.",
    image: `${imagePath}/Pull-Up Bar.jpg`,
    tags: ["pull-up", "strength", "upper-body"],
  },
  {
    name: "Folding Treadmill",
    description:
      "Space-saving treadmill with adjustable speed and incline settings.",
    image: `${imagePath}Folding Treadmill.jpg`,
    tags: ["cardio", "treadmill", "foldable"],
  },
  {
    name: "Adjustable Weight Bench",
    description: "Incline, decline, and flat settings for versatile exercises.",
    image: `${imagePath}Adjustable Weight Bench.jpg`,
    tags: ["bench", "strength", "adjustable"],
  },
  {
    name: "Yoga Mat",
    description: "Extra-thick, non-slip yoga mat with a carrying strap.",
    image: `${imagePath}Yoga Mat.jpg`,
    tags: ["yoga", "flexibility", "non-slip"],
  },
  {
    name: "Boxing Gloves",
    description: "Durable leather boxing gloves with added wrist support.",
    image: `${imagePath}Boxing Gloves.jpg`,
    tags: ["boxing", "gloves", "durable"],
  },
  {
    name: "Jump Rope",
    description: "Adjustable speed rope for cardio and endurance training.",
    image: `${imagePath}Jump Rope.jpg`,
    tags: ["cardio", "jump-rope", "speed"],
  },
  {
    name: "Medicine Ball (10 lbs)",
    description:
      "Textured surface for grip, suitable for core and functional exercises.",
    image: `${imagePath}Medicine Ball (10 lbs).jpg`,
    tags: ["medicine-ball", "core", "strength"],
  },
  {
    name: "Workout Sandbag",
    description:
      "Adjustable weight bag with handles for functional strength training.",
    image: `${imagePath}Workout Sandbag.jpg`,
    tags: ["sandbag", "strength", "functional"],
  },
  {
    name: "Ab Roller Wheel",
    description: "Compact ab roller for core strengthening.",
    image: `${imagePath}Ab Roller Wheel.jpg`,
    tags: ["core", "ab-roller", "compact"],
  },
  {
    name: "Battle Rope (30 ft)",
    description: "Heavy-duty rope for endurance and strength exercises.",
    image: `${imagePath}Battle Rope (30 ft).jpg`,
    tags: ["battle-rope", "strength", "endurance"],
  },
  {
    name: "Gymnastic Rings",
    description:
      "Durable rings with adjustable straps for bodyweight workouts.",
    image: `${imagePath}Gymnastic Rings.jpg`,
    tags: ["rings", "strength", "bodyweight"],
  },
  {
    name: "Weighted Vest (20 lbs)",
    description: "Comfortable, adjustable vest to increase workout intensity.",
    image: `${imagePath}Weighted Vest (20 lbs).jpg`,
    tags: ["vest", "weight", "adjustable"],
  },
  {
    name: "Massage Gun",
    description: "High-speed percussive massage device for muscle recovery.",
    image: `${imagePath}Massage Gun.jpg`,
    tags: ["recovery", "massage", "muscle"],
  },
  {
    name: "Powerlifting Belt",
    description:
      "Thick, adjustable belt to support the lower back during heavy lifts.",
    image: `${imagePath}Powerlifting Belt.jpg`,
    tags: ["belt", "support", "strength"],
  },
  {
    name: "Stationary Bike",
    description: "Adjustable seat and resistance levels for cardio workouts.",
    image: `${imagePath}Stationary Bike.jpg`,
    tags: ["cardio", "bike", "adjustable"],
  },
  {
    name: "Fitness Tracker",
    description:
      "Smart wearable to monitor heart rate, calories, and step count.",
    image: `${imagePath}Fitness Tracker.jpg`,
    tags: ["wearable", "tracker", "monitoring"],
  },
];
