'use client';
import { useData } from '@/app/Wrapper';
import React from 'react';

export default function Status({ status }: { status: string }) {
  const { mode } = useData();
  return (
    <div
      className={`w-full rounded-[8px] h-[91px] mt-8 mb-4 flex items-center justify-between px-6 ${
        mode ? 'bg-[#1E2139] opt2' : 'bg-white opt1'
      }`}
    >
      <p
        className={`${
          mode ? 'text-[#DFE3FA]' : 'text-[#858BB2]'
        } font-medium  text-[15px]`}
      >
        Status
      </p>
      <div
        className={`h-10 w-[100px] rounded-[6px]  relative flex  items-center justify-center gap-2`}
      >
        <div
          className={`absolute w-full h-full z-0 opacity-15 ${
            status === 'paid' ? 'bg-[#33D69F] text-[#33D69F]' : ''
          } ${status === 'pending' ? 'bg-[#FF8F00] text-[#FF8F00]' : ''} ${
            status === 'draft' ? 'bg-[#373B53] text-[#373B53]' : ''
          }
            rounded-[6px]`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full ${status === 'paid' ? 'bg-[#33D69F] ' : ''} ${
            status === 'pending' ? 'bg-[#FF8F00] ' : ''
          }  ${status === 'draft' ? 'bg-[#373B53] ' : ''} ${
            mode && status === 'draft' ? 'bg-white' : ''
          }`}
        ></div>
        <p
          className={`${status === 'paid' ? 'text-[#33D69F]' : ''} ${
            status === 'pending' ? 'text-[#FF8F00]' : ''
          } ${status === 'draft' ? 'text-[#373B53]' : ''} z-10 ${
            mode && status === 'draft' ? 'text-white' : ''
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
