'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useData } from '../Wrapper';
import { motion, spring } from 'framer-motion';

export default function Filter() {
  const { mode } = useData();
  const [filtMode, setFiltMode] = useState(false);
  return (
    <main className="w-full h-11 flex items-center justify-between">
      <div>
        <h2 className={`font-bold text-lg ${mode ? 'text-white' : '0C0E16'}`}>
          Invoices
        </h2>
        <p className={`text-[13px]  ${mode ? 'text-white' : 'text-[#888EB0]'}`}>
          7 invoices
        </p>
      </div>
      <div className="flex h-full gap-4 items-center justify-center">
        <div className="relative flex  justify-center items-center ">
          <div
            className="flex gap-3 items-center justify-center cursor-pointer"
            onClick={() => setFiltMode(!filtMode)}
          >
            <h2 className={`font-bold text-[15px] ${mode ? 'text-white' : '0C0E16'}`}>
              Filter
            </h2>
            <motion.div
              animate={{ rotate: filtMode ? 180 : 0 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <Image
                alt="arrow-down"
                src={'/icon-arrow-down.svg'}
                width={10}
                height={10}
                className="h-[8px] w-[11px]"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ display: 'none' }}
            animate={{
              y: filtMode ? 100 : 25,
              width: '300%',
              height: filtMode ? 140 : 0,
              background: mode ? '#252945' : 'white',
              display: filtMode ? 'block' : 'none',
              opacity: filtMode ? 100 : 0,
            }}
            transition={{ type: 'spring', damping: 20 }}
            className={`${
              mode ? 'filt1' : 'filt'
            } absolute h-[130px]  bg-black rounded-[8px] overflow-hidden flex items-center justify-center`}
          >
            <motion.div
              initial={{ display: 'none' }}
              animate={{
                y: filtMode ? 0 : -10,
                opacity: filtMode ? 1 : 0,
                display: filtMode ? 'block' : 'none',
              }}
              transition={{ type: 'tween' }}
              className="flex items-center flex-col w-full h-full mt-4"
            >
              <div className="w-1/2 h-1/4 flex gap-2 items-center justify-start pl-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="checkbox cursor-pointer w-4 h-4"
                />
                <p
                  className={`font-bold text-[15px] ${
                    mode ? 'text-white' : 'text-[#1E2139]'
                  }`}
                >
                  Draft
                </p>
              </div>
              <div className="w-full h-1/4  flex gap-2 items-center justify-start pl-4 ">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="checkbox cursor-pointer w-4 h-4"
                />
                <p
                  className={`font-bold text-[15px] ${
                    mode ? 'text-white' : 'text-[#1E2139]'
                  }`}
                >
                  Pending
                </p>
              </div>
              <div className="w-full h-1/4  flex gap-2 items-center justify-start pl-4">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="checkbox cursor-pointer w-4 h-4"
                />
                <p
                  className={`font-bold text-[15px] ${
                    mode ? 'text-white' : 'text-[#1E2139]'
                  }`}
                >
                  Paid
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="h-full bg-[#7C5DFA] rounded-[24px] w-[90px] flex items-center justify-center gap-[8px] cursor-pointer">
          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white">
            <Image src={'/icon-plus.svg'} alt="plus" height={15} width={15} />
          </div>
          <p className="text-[15px] font-[500] text-white">New</p>
        </div>
      </div>
    </main>
  );
}
