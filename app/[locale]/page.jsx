import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home6/About";
import Banner from "@/components/sections/home6/Banner";
import Premium from "@/components/sections/home6/Premium";
import Work from "@/components/sections/home6/Work";
import Project from "@/components/sections/home6/Showcase";
import Teak from "@/components/sections/home6/Teak";
import Balau from "@/components/sections/home6/Balau";
import Hardwoods from "@/components/sections/home6/Hardwoods";
import Whychoose from "@/components/sections/home6/Whychoose";
import Contact from "@/components/sections/home6/Contact";
import HeroProducts from "@/components/sections/home6/HeroProducts";
import Showcase from "@/components/sections/home6/Showcase";
import Features from "@/components/sections/home6/Features";
export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={4}>
        <Banner />
        <About />
        <HeroProducts />
        <Features />
        <section id="whychoose">
          <Whychoose />
        </section>
        <Premium />
        <Hardwoods />
        <section id="showcase">
          <Showcase />
        </section>
        <Contact />
      </Layout>
    </>
  );
}
