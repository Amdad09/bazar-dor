import Link from 'next/link';
import Button from '../ui/Button';
import Container from '../ui/Container';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link className="font-bold" href={'/sign-in'}>
                    সাইন ইন
                </Link>
            </li>
            <li>
                <Link href={'/sign-up'}>
                    <Button>সাইন আপ</Button>
                </Link>
            </li>

            <li>
                <details className="relative">
                    <summary className="font-bold cursor-pointer">
                        প্রোফাইল
                    </summary>

                    <ul className="absolute right-0 top-full z-50 mt-1 w-44 rounded-box bg-base-100 p-2 shadow-lg">
                        <li>
                            <Link href="/profile">আমার প্রোফাইল</Link>
                        </li>

                        <li>
                            <button type="button">সাইন আউট</button>
                        </li>
                    </ul>
                </details>
            </li>
        </>
    );
    return (
        <>
            <div className="bg-base-100 shadow-sm py-1">
                <Container className="">
                    <div className="navbar">
                        <div className="flex-1">
                            <Logo />
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal px-1 items-center">
                                {links}
                            </ul>
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
