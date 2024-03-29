'use client';
import { motion } from 'framer-motion';
import { useData } from './Wrapper';
import Filter from './components/Home/Filter';
import Card from './components/Home/Card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const { data, setData, mode, setMode } = useData();
  return (
    <motion.div
      className={`h-full flex items-center justify-start flex-col px-6 py-8 gap-8 min-h-screen`}
      initial={{ background: '#F8F8FB' }}
      animate={{ background: mode ? '#141625' : '#F8F8FB' }}
      transition={{ type: 'tween' }}
    >
      <Filter />
      {data.length > 0 ? null : (
        <div className="flex flex-col items-center justify-center">
          <Image src={'/illustration-empty.svg'} alt="empty" width={400} height={500} />
          <h2
            className={`text-center mt-10 text-[24px] font-bold ${
              mode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
            }`}
          >
            There is nothing here
          </h2>
          <p
            className={`text-center mt-6 ${
              mode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
            } text-[13px]`}
          >
            Create an invoice by clicking the <span className="font-bold">New </span>
            button and get started
          </p>
        </div>
      )}
      <div className="w-full flex items-center justify-center flex-col gap-4 ">
        {data.map((el, key) => (
          <Link href={`/${el.id}`} className="w-full" key={key}>
            <Card
              clientName={el.clientName}
              id={el.id}
              total={el.total}
              paymentDue={`${el.paymentDue}`}
              status={`${el.status}`}
            />
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
