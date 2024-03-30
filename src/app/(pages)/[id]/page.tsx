'use client';
import { useData } from '@/app/Wrapper';
import Goback from '@/app/components/about/Goback';
import Status from '@/app/components/about/Status';
import { DataType } from '@/app/data';
import { useEffect, useState } from 'react';

type Params = {
  params: {
    id: string;
  };
};

export default function page({ params }: Params) {
  const [ans, setAns] = useState<DataType | null>(null);
  const { mode, data } = useData();
  const a = data.filter((el) => el.id === params.id);
  useEffect(() => {
    setAns(a[0]);
  }, []);
  return (
    <div
      className={`flex items-start justify-center flex-col px-6 py-10 ${
        mode ? 'bg-[#141625]' : 'bg-[#F8F8FB]'
      }`}
    >
      <Goback />
      <Status status={`${ans?.status}`} />
    </div>
  );
}
