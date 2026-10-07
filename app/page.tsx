import Hero from "@/components/hero/Hero";
import AllProducts from "@/components/products/AllProducts";
import Container from "@/components/ui/Container";

const Home = () => {
  return (
      <div className="bg-neutral-100">
          <Container>
              <Hero />
              <AllProducts />
          </Container>
      </div>
  );
};

export default Home;