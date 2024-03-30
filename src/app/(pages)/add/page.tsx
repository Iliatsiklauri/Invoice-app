'use client';
import { useData } from '@/app/Wrapper';
import Form from '@/app/components/Add/Form';
import Goback from '@/app/components/about/Goback';
import React from 'react';

export default function page() {
  const { mode } = useData();
  return (
    <div
      className={`${
        mode ? 'bg-[#141625] text-[#888EB0]' : 'bg-[#FFF] text-[#7E88C3]'
      } flex flex-col items-start justify-center p-6 w-full gap-6 text-[13px]`}
    >
      <Goback />
      <h2 className={`font-bold text-[24px] ${!mode ? 'text-[#0C0E16]' : 'text-[#FFF]'}`}>
        New Invoice
      </h2>
      <Form mode={mode} />
    </div>
  );
}
