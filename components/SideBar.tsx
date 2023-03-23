import {
  HomeIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/24/outline';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import IconButton from './IconButton';

const Divider = () => <hr className="border-t-[0/1px] border-gray-900" />;

const SideBar = () => {
  const { data: session } = useSession();
  
  return (
    <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-x-scroll sm:max-[12rem] lg:max-w-[15rem] hidden md:block scrollbar-hidden">
      <div className="max-w-fit pt-1 pb-6">
        <Image
          width={100}
          height={100}
          className="w-full"
          src="/Spotify_Logo.png"
          alt="Logo Spotify"
        />
      </div>
      <div className="space-y-4">
        {session?.user && (
          <button onClick={() => signOut()}>
            {session.user.name} - Log Out
          </button>
        )}

        <IconButton icon={HomeIcon} label="Home" />
        <IconButton icon={MagnifyingGlassIcon} label="Search" />
        <IconButton icon={BuildingLibraryIcon} label="Library" />

        <Divider />
        <IconButton icon={PlusCircleIcon} label="Create Playlist" />
        <IconButton icon={HeartIcon} label="Heart" />
        <IconButton icon={RssIcon} label="Your episodes" />

        <Divider />

        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
        <p className="cursor-pointer hover:text-white">PlayList</p>
      </div>
    </div>
  );
};

export default SideBar;
