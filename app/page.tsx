import Hero from "@/components/hero/Hero";
import AllProducts from "@/components/products/AllProducts";
import Container from "@/components/ui/Container";

const Home = () => {
  return (
      <div className="">
          <Container>
              <Hero />
              <AllProducts />
          </Container>
      </div>
  );
};

export default Home;