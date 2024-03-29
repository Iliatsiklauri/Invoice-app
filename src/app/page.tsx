'use client';
import { motion } from 'framer-motion';
import { useData } from './Wrapper';
import Filter from './components/Filter';

export default function Home() {
  const { data, setData, mode, setMode } = useData();
  return (
    <motion.div
      className={`h-full flex items-center justify-start flex-col px-6 py-8 gap-8`}
      initial={{ background: '#F8F8FB' }}
      animate={{ background: mode ? '#141625' : '#F8F8FB' }}
      transition={{ type: 'tween' }}
    >
      <Filter />
    </motion.div>
  );
}
