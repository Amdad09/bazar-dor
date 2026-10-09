
import Container from '../ui/Container';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthNav from './AuthNav';

const Navbar = () => {
    
    
    return (
        <>
            <div id='header' className="bg-base-100 shadow-sm py-1">
                <Container className="">
                    <div className="navbar">
                        <div className="flex-1">
                            <Logo />
                        </div>
                        <div className="flex-none">
                            <AuthNav/>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-white z-10 sticky top-0 py-6">
                <Container>
                    <NavLinks />
                </Container>
            </div>
        </>
    );
};

export default Navbar;
