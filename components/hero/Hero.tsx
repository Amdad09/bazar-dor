import Image from 'next/image';
import HeroContentMotion from '../motion/HeroContextMotion';
import HeroImageMotion from '../motion/HeroImageMotion';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Time from '../ui/Time';

const Hero = () => {
    return (
        <section className="py-6 sm:py-8 md:py-10 lg:py-14">
            <Container>
                <div className="overflow-hidden rounded-2xl bg-base-100">
                    <div className="flex flex-col-reverse items-center justify-between gap-8 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:flex-row lg:gap-12 lg:px-14 lg:py-16">
                        {/* Content */}
                        <HeroContentMotion>
                            <div className="w-full text-center lg:max-w-xl lg:text-left">
                                <span className="bg-green-500/10 px-2 py-0.5 rounded-full text-green-600 inline-flex justify-center items-center mb-2">
                                    <Time />
                                </span>
                                <h1 className="text-3xl font-bold leading-tighter tracking-tighter  sm:text-4xl md:text-5xl lg:text-6xl">
                                    আজকের বাজারের দাম এক নজরে
                                </h1>

                                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-base-content/70 sm:mt-5 sm:text-base sm:leading-7 md:text-lg lg:mx-0">
                                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার
                                    দাম — বাজারভিত্তিক বিস্তারিত, গড়,
                                    সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক
                                    জায়গায়।
                                </p>

                                <a
                                    href="#all-products"
                                    className="mt-6 flex justify-center lg:justify-start"
                                >
                                    <Button className="px-6">
                                        সব পণ্য দেখুন
                                    </Button>
                                </a>
                            </div>
                        </HeroContentMotion>

                        {/* Image */}
                        <HeroImageMotion>
                            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                                <Image
                                    src="/hero.png"
                                    alt="Hero image"
                                    width={800}
                                    height={500}
                                    priority
                                    className="h-auto w-full rounded-xl object-cover"
                                />
                            </div>
                        </HeroImageMotion>
                    </div>
                </div>
            </Container>
        </section>
        //   <div className="my-4 mx-0">
        //       <Container>
        //           <div className="hero bg-white rounded-2xl border-neutral">
        //               <div className="hero-content max-w-full flex-col lg:flex-row-reverse">
        //                   <Image
        //                       alt="Tailwind CSS hero component"
        //                       src={'/hero.png'}
        //                       width={500}
        //                       height={600}
        //                       className="max-w-sm "
        //                   />
        //                   <div>
        //                       <span className="bg-green-500/10 px-2 py-0.5 rounded-full text-green-600 inline-flex justify-center items-center">
        //                           <Time />
        //                       </span>
        //                       <h1 className="text-5xl font-bold pt-4">
        //                           আজকের বাজারের দাম এক নজরে
        //                       </h1>
        //                       <p className="py-6">
        //                           চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
        //                           বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক
        //                           এবং দামের পরিবর্তন এক জায়গায়।
        //                       </p>
        //                       <a href="#allProduct">
        //                           <Button className="">সব পণ্য দেখুন</Button>
        //                       </a>
        //                   </div>
        //               </div>
        //           </div>
        //       </Container>
        //   </div>
    );
};

export default Hero;
