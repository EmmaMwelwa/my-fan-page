import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ name, blurb, rating, emoji, image, year }) {
  return (
    <article className={styles.card}>
      {image ? (
        <Image src={image} alt={name} width={210} height={300} />
      ) : (
  
        <div className={styles.emoji}>{emoji}</div>
      )}
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p>{year}</p>
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
    </article>
  );
}