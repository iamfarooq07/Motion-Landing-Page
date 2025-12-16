// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { motion } from "motion/react";

// export default function Section() {
//   const cardData = [
//     {
//       id: 1,
//       title: "Modern Architecture",
//       description:
//         "Explore modern architectural designs that focus on simplicity, functionality, and clean aesthetics.",
//       image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 2,
//       title: "Interior Design",
//       description:
//         "Discover interior design concepts that balance comfort, style, and efficient use of space.",
//       image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 3,
//       title: "Smart Buildings",
//       description:
//         "Learn how smart buildings use technology to improve energy efficiency and user experience.",
//       image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 4,
//       title: "Sustainable Homes",
//       description:
//         "Understand sustainable housing solutions that reduce environmental impact and promote green living.",
//       image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 5,
//       title: "Urban Planning",
//       description:
//         "Explore urban planning strategies that improve livability and sustainable city growth.",
//       image: "https://images.unsplash.com/photo-1465447142348-e9952c393450",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 6,
//       title: "Luxury Villas",
//       description:
//         "Discover luxury villas designed with premium materials and modern architectural concepts.",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 7,
//       title: "Green Architecture",
//       description:
//         "Learn how green architecture integrates nature and sustainability into building design.",
//       image:
//         "https://thumbs.dreamstime.com/b/eco-friendly-building-vertical-garden-modern-city-green-plant-tree-forest-ivy-facade-sustainable-energy-saving-151660863.jpg",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 8,
//       title: "Commercial Spaces",
//       description:
//         "Explore commercial spaces designed for productivity, branding, and customer experience.",
//       image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 9,
//       title: "Minimalist Homes",
//       description:
//         "Minimalist homes focus on clean lines, open spaces, and functional design.",
//       image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 10,
//       title: "Office Architecture",
//       description:
//         "Modern office architecture designed to boost collaboration and employee well-being.",
//       image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 11,
//       title: "Residential Complexes",
//       description:
//         "Large-scale residential complexes built for community living and comfort.",
//       image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//     {
//       id: 12,
//       title: "Future Architecture",
//       description:
//         "Explore futuristic architecture concepts powered by innovation and smart technologies.",
//       image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
//       buttons: { primary: "Learn More", secondary: "Share" },
//     },
//   ];

//   //   console.log(cardData);

//   return (
//     <div>
//       <h1 className="text-6xl font-extrabold text-center py-9">Card List</h1>
//       <div className="m-5 flex flex-wrap gap-3 justify-center items-center px-10">
//         {cardData.map((value, i) => (
//           <Card key={i} sx={{ maxWidth: 345, padding: "10px" }}>
//             <CardMedia
//               sx={{ height: 200, borderRadius: "10px" }}
//               image={value.image}
//               title="green iguana"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {value.title}
//               </Typography>
//               <Typography variant="body2" sx={{ color: "text.secondary" }}>
//                 {value.description}
//               </Typography>
//             </CardContent>
//             <CardActions>
//               <Button
//                 size="small"
//                 style={{ backgroundColor: "blue", color: "white" }}
//               >
//                 {value.buttons.secondary}
//               </Button>
//               <Button
//                 size="small"
//                 style={{ backgroundColor: "blue", color: "white" }}
//               >
//                 {value.buttons.primary}
//               </Button>
//             </CardActions>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "motion/react";

export default function Section() {
  const cardData = [
    {
      id: 1,
      title: "Modern Architecture",
      description:
        "Explore modern architectural designs that focus on simplicity, functionality, and clean aesthetics.",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 2,
      title: "Interior Design",
      description:
        "Discover interior design concepts that balance comfort, style, and efficient use of space.",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 3,
      title: "Smart Buildings",
      description:
        "Learn how smart buildings use technology to improve energy efficiency and user experience.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 4,
      title: "Sustainable Homes",
      description:
        "Understand sustainable housing solutions that reduce environmental impact and promote green living.",
      image: "https://images.unsplash.com/photo-1502005097973-6a7082348e28",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 5,
      title: "Urban Planning",
      description:
        "Explore urban planning strategies that improve livability and sustainable city growth.",
      image: "https://images.unsplash.com/photo-1465447142348-e9952c393450",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 6,
      title: "Luxury Villas",
      description:
        "Discover luxury villas designed with premium materials and modern architectural concepts.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 7,
      title: "Green Architecture",
      description:
        "Learn how green architecture integrates nature and sustainability into building design.",
      image:
        "https://thumbs.dreamstime.com/b/eco-friendly-building-vertical-garden-modern-city-green-plant-tree-forest-ivy-facade-sustainable-energy-saving-151660863.jpg",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 8,
      title: "Commercial Spaces",
      description:
        "Explore commercial spaces designed for productivity, branding, and customer experience.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 9,
      title: "Minimalist Homes",
      description:
        "Minimalist homes focus on clean lines, open spaces, and functional design.",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 10,
      title: "Office Architecture",
      description:
        "Modern office architecture designed to boost collaboration and employee well-being.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 11,
      title: "Residential Complexes",
      description:
        "Large-scale residential complexes built for community living and comfort.",
      image: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
    {
      id: 12,
      title: "Future Architecture",
      description:
        "Explore futuristic architecture concepts powered by innovation and smart technologies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      buttons: { primary: "Learn More", secondary: "Share" },
    },
  ];

  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Delay between cards
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div>
      <h1 className="text-6xl font-extrabold text-center py-9">Card List</h1>
      <motion.div
        className="m-5 flex flex-wrap gap-5 justify-center items-center px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
      >
        {cardData.map((value, i) => (
          <motion.div key={i} variants={cardVariants}>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <CardMedia
                sx={{ height: 200, borderRadius: "10px" }}
                image={value.image}
                title={value.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {value.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  sx={{ backgroundColor: "blue", color: "white" }}
                >
                  {value.buttons.secondary}
                </Button>
                <Button
                  size="small"
                  sx={{ backgroundColor: "blue", color: "white" }}
                >
                  {value.buttons.primary}
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
