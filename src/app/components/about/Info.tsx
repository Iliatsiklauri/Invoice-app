'use client';
import { useData } from '@/app/Wrapper';

export default function Info() {
  const { mode } = useData();
  return <div className={`w-full flex items-start justify-center p-6 `}>Info</div>;
}
