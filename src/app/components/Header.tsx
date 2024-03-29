import React from 'react';
import { useData } from '../Wrapper';
import Image from 'next/image';

export default function Header() {
  const { mode, setMode } = useData();
  return (
    <div
      className={`${
        mode ? 'bg-[#1E2139]' : 'bg-[#373B53]'
      } w-full h-[72px] flex justify-between items-center1`}
    >
      <div className="relative h-[72px] w-[72px] bg-[#7C5DFA] logo flex items-center justify-center">
        <Image src="/logo.svg" alt="" width={25} height={25} className="z-10" />
        <div className="w-full h-1/2 absolute bottom-0 bg-[#9277FF] z-0 box"></div>
      </div>
      <div className="flex justify-center items-center h-full gap-5 ">
        <Image
          src={`${mode ? `/icon-sun.svg` : `/icon-moon.svg`}`}
          alt="moon"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setMode(!mode)}
        />
        <div className="flex h-full items-center justify-center border-l-[#494E6E] border-l-[1px] px-5">
          <Image
            src={'/image-avatar.jpg'}
            alt="avatar profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
