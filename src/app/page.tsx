import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <NewProducts />
        <Testimonial />
      </div>
    </main>
  );
}
