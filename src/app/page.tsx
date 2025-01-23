import About from "@/component/Home/about/About";
import Hero from "@/component/Home/Hero/Hero";
import Projects from "@/component/Home/projects/Projects";
import Testimonial from "@/component/Home/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Testimonial />
    </div>
  );
}
