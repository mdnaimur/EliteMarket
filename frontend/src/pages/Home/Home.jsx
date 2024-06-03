import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";

export default function Home() {
  return (
   <div className="home">
    <Slider />

    <FeaturedProducts type = "featured" />
    <Categories />
    <FeaturedProducts type = "trending" />

    <Contact />

   </div>
  )
}
