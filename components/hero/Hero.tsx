import Image from "next/image";
import Container from "../ui/Container";
import Time from "../ui/Time";
import Button from "../ui/Button";

const Hero = () => {
  return (
      <div className="my-4 mx-0">
          <Container>
              <div className="hero bg-white rounded-2xl border-neutral">
                  <div className="hero-content max-w-full flex-col lg:flex-row-reverse">
                      <Image
                          alt="Tailwind CSS hero component"
                          src={'/hero.png'}
                          width={500}
                          height={600}
                          className="max-w-sm "
                      />
                      <div>
                          <span className="bg-green-500/10 px-2 py-0.5 rounded-full text-green-600 inline-flex justify-center items-center">
                              <Time />
                          </span>
                          <h1 className="text-5xl font-bold pt-4">
                              আজকের বাজারের দাম এক নজরে
                          </h1>
                          <p className="py-6">
                              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                              বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক
                              এবং দামের পরিবর্তন এক জায়গায়।
                          </p>
                          <a href="#allProduct">
                              <Button className="">সব পণ্য দেখুন</Button>
                          </a>
                      </div>
                  </div>
              </div>
          </Container>
      </div>
  );
};

export default Hero;