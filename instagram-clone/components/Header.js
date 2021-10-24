import Image from 'next/image'
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirPlaneIcon, MenuIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
        return (
            <div>
                <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

                    {/* left-Header  instagram logo img/name */}
                    
                    <div className="relative hidden lg:inline-grid w-24 cursor-pointer ">
                        <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
                    </div>

                    <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                        <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
                    </div>

                    {/* Middle-Header  input Section*/}
                    <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        {/* we use this div top of the text area because we want to make it respinsive for the search Icon*/}
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
                    </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center justify-end space-x-4" >
                    <HomeIcon className="h-10 w-10"/>
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />

                    <PaperAirPlaneIcon />
                </div>
            </div>
            </div>
        )
    }

export default Header;
