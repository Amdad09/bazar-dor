
import Image from 'next/image';
import Link from 'next/link';
import Time from '../ui/Time';

const Logo = () => {

    return (
        <Link href={'/'}>
            <div className="flex items-center gap-2">
                <span className="bg-green-700 p-3 inline-flex justify-center items-center rounded-xl">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={30}
                        height={30}
                        className=""
                    />
                </span>

                <div>
                    <p className='font-bold text-xl'>বাজার দর</p>
                    <p><Time/></p>
                </div>
            </div>
        </Link>
    );
};

export default Logo;
