'use client';
import { useData } from '@/app/Wrapper';
import Goback from '@/app/components/about/Goback';

type Params = {
  params: {
    id: string;
  };
};
export default function page({ params }: Params) {
  const { mode } = useData();
  return (
    <div
      className={`flex items-start justify-center flex-col px-6 py-10 ${
        mode ? 'bg-[#141625]' : 'bg-[#F8F8FB]'
      }`}
    >
      <Goback />
    </div>
  );
}
