import Navbar from "./routes/navbar";
import MainSection from "./routes/main";
import AboutSection from "./routes/about";
import ProductSection from "./routes/product";
import SolutionSection from "./routes/solution";
import TestimonialSection from "./routes/testimonial";
import ContactSection from "./routes/contact";
import Footer from "./routes/footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <MainSection/>
      <AboutSection/>
      <ProductSection/>
      <SolutionSection/>
      <TestimonialSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
