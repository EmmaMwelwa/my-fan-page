import Card from "./Card";
import styles from "./CardGrid.module.css";
import Link from "next/link";
// ...inside the map:
<Link href={"/faves/" + item.id} key={item.id}>
  <Card name={item.name} blurb={item.blurb} rating={item.rating} emoji={item.emoji} />
</Link>

export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Card key={item.id} 
        name={item.name} 
        blurb={item.blurb} 
        rating={item.rating} 
        emoji={item.emoji} 
        image={item.image} />
         ))}

      
     
    </div>
    
  );
   
}