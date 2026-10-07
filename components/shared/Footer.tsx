import Container from "../ui/Container";

const Footer = () => {
  return (
      <div className="bg-neutral-100 ">
          <Container>
              <footer className="footer sm:footer-horizontal items-center p-4">
                  <aside className="grid-flow-col items-center">
                      <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                  </aside>
                  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                      <p>
                          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে
                          পরিবর্তিত হয়।
                      </p>
                  </nav>
              </footer>
          </Container>
      </div>
  );
};

export default Footer;