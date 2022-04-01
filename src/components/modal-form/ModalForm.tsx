// import React from "react";
// import css from "components/pet-card/petCard.css";

// import { Text } from "ui/text/Text";

// type PetProps = {
//   name: string;
//   image: string;
//   location: string;
//   id: number;
// };

// function PetCard({ name, image, id, location }: PetProps) {
//   const handleClick = () => {
//     console.log("HOLA");
//   };

//   return (
//     <article className={css.root}>
//       <div className={css.image__container}>
//         <img
//           arial-label={`Imagen de la mascota perdida: ${name}`}
//           src={image}
//           alt={`Imagen de la mascota perdida: ${name}`}
//           className={css.image}
//         />
//       </div>
//       <div className={css.info__container}>
//         <div className={css.about__container}>
//           <Text tag="title" fsize="2rem">
//             {name}
//           </Text>
//           <Text tag="text-bold">{location}</Text>
//         </div>
//         <div className={css.report__container}>
//           <a onClick={handleClick} className={css.report__link}>
//             REPORTAR INFORMACIÓN
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }

// export { PetCard };
