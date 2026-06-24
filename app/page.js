import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";
export default function Home() {

  return (
    <main>
      <Hero
      title="🎬 My Favorite Movies"
      tagline="Some Movies I could watch all the time without ever getting bored."
      />
    <CardGrid items={items}/>
    </main>
    
  );
}

