import Card from "./Card";
import styles from "./CardGrid.module.css";
import Link from "next/link";
export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Card
          key={item.id}
          name={
            <Link href={"/faves/" + item.id}>
              {item.name}
            </Link>
          }
          blurb={item.blurb}
          rating={item.rating}
          emoji={item.emoji}
          image={item.image}
        />
      ))}
    </div>
  );
}
