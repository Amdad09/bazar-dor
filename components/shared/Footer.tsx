import Link from "next/link";
import Container from "../ui/Container";

const Footer = () => {
  return (
      <div className="bg-white ">
          <Container>
              <footer className="py-12 footer sm:footer-horizontal items-center p-4">
                  <aside className="grid-flow-col items-center">
                      <div className="flex flex-col">
                          <Link href={'/'} className="font-bold text-2xl">
                              🛒{' '}
                              <span className="text-green-600">
                                  বাজার দর
                              </span>{' '}
                          </Link>
                          <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                      </div>
                  </aside>
                  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                      <p>
                          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে
                          পরিবর্তিত হয়।
                      </p>
                  </nav>
              </footer>
          </Container>
          <div className="text-neutral-500 text-sm text-center py-4 border-t border-t-neutral-200 tracking-tight font-medium">
              © 2026 BazarDor. All Rights Reserved.
          </div>
      </div>
  );
};

export default Footer;