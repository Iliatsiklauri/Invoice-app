'use client';
import { useData } from '@/app/Wrapper';
import Image from 'next/image';
import Link from 'next/link';

export default function Goback() {
  const { mode } = useData();
  return (
    <Link
      className="h-[15px] flex items-center justify-center gap-5 cursor-pointer"
      href={'/'}
    >
      <Image alt="arrw-left" src={'/icon-arrow-left.svg'} width={8} height={8} />
      <p className={`${!mode ? 'text-[#0C0E16]' : 'text-white'} font-bold text-[15px]`}>
        Go Back
      </p>
    </Link>
  );
}
