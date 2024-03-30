'use client';
import { useData } from '@/app/Wrapper';
import { DataType } from '@/app/data';
import { useEffect, useState } from 'react';

type Proptype = {
  el: DataType | null;
};
export default function Info({ el }: Proptype) {
  const [data, setData] = useState<null | DataType>(null);
  const { mode } = useData();
  useEffect(() => {
    setData(el);
  }, [el]);
  return (
    <div
      className={`w-full flex items-start justify-center p-6 rounded-[8px] ${
        mode ? 'bg-[#1E2139] opt2' : 'bg-white opt1'
      }`}
    >
      {data?.clientName}
    </div>
  );
}
