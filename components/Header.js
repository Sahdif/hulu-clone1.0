import {
    CheckBadgeIcon,
    FolderIcon,
    HomeIcon,
    BoltIcon,
    MagnifyingGlassIcon,
    UserIcon,
} from '@heroicons/react/24/solid'
import React from 'react';
import Image from 'next/image';
import Headeritem from './Headeritem';



const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>

            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <Headeritem title='HOME' Icon={HomeIcon} />
                <Headeritem title='TRENDING' Icon={BoltIcon} />
                <Headeritem title='VERIFIED' Icon={CheckBadgeIcon} />
                <Headeritem title='COLLECTIONS' Icon={FolderIcon} />
                <Headeritem title='SEARCH' Icon={MagnifyingGlassIcon} />
                <Headeritem title='ACCOUNT' Icon={UserIcon} />
            </div>

            <Image className='object-contain' src="https://links.papareact.com/ua6" width={200} height = {100} />

        </header>
    );
}

export default Header; 
 