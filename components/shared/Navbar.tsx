
import Container from '../ui/Container';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthNav from './AuthNav';
import Marquee from './Marquee';

const Navbar = () => {
    return (
        <>
            <div id="header" className="bg-base-100 py-1 shadow-sm">
                <Container>
                    <div className="navbar flex flex-wrap items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                            <Logo />
                        </div>

                        <div className="flex-none">
                            <AuthNav />
                        </div>
                    </div>
                </Container>
            </div>

            <div className="sticky top-0 z-10 bg-white">
                <div className="border-t border-t-neutral-100 border-b border-b-neutral-200">
                    <Container className="py-4">
                        <NavLinks />
                    </Container>
                </div>
                <Marquee />

            </div>
        </>
    );
};

export default Navbar;
