'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '../../../../public/assets/logo/logo.png'
import MobileSideBar from '@/components/shared/Navbar/MobileSideBar';

const NavTitle = () => {
    const currentPath = usePathname();
    return (
        <div className="flex items-center gap-5">
        <div className="flex gap-2 items-center">
            

       <div className="lg:hidden  block">
       <MobileSideBar/>
     
       </div>
        <Link
          href="/"
          className="flex-shrink-0 shimmer flex items-center gap-2 font-bold text-xl"
        >
          <Image
            width={60}
            height={60}
            src={logo}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Journey Trails logo"
            className="h-8 w-auto"
          />
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-900">
            
              <div>
                <div>Journey Trails</div>
                <div className="text-xs -mt-2">Let Your Journey With Us!</div>
              </div>
          
          </div>
        </Link>
        </div>
      </div>
    );
};

export default NavTitle;