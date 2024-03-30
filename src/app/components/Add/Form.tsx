import React from 'react';

export default function Form({ mode }: { mode: boolean }) {
  return (
    <form
      className={`${
        mode ? ' text-[#888EB0]' : 'text-[#7E88C3]'
      } flex flex-col items-start justify-center w-full`}
    >
      <p className="font-bold text-[#7C5DFA] text-[15px]">Bill From</p>
      <div className="w-full">
        <p>dasadad</p>
        <input
          type="text"
          className={`w-full h-12 outline-none ${
            mode
              ? 'bg-[#1E2139] border-[1px] border-[#252945] focus:border-[#7C5DFA]'
              : 'bg-[#DFE3FA] border-[1px] border-[#DFE3FA] focus:border-[#9277FF]'
          } rounded-[4px]`}
        />
      </div>
    </form>
  );
}
