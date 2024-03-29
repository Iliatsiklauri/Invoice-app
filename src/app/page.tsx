'use client';
import { motion } from 'framer-motion';
import { useData } from './Wrapper';
import Filter from './components/Filter';
import Card from './components/Card';

export default function Home() {
  const { data, setData, mode, setMode } = useData();
  console.log(data);
  return (
    <motion.div
      className={`h-full flex items-center justify-start flex-col px-6 py-8 gap-8`}
      initial={{ background: '#F8F8FB' }}
      animate={{ background: mode ? '#141625' : '#F8F8FB' }}
      transition={{ type: 'tween' }}
    >
      <Filter />
      <div className="w-full flex items-center justify-center flex-col gap-4 ">
        {data.map((el, key) => (
          <Card
            clientName={el.clientName}
            id={el.id}
            key={key}
            total={el.total}
            paymentDue={`${el.paymentDue}`}
            status={`${el.status}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
