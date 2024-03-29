import { motion } from 'framer-motion';
import { useData } from '../Wrapper';
import { CardType } from '../data';

export default function Card({ clientName, id, paymentDue, status, total }: CardType) {
  const { mode } = useData();
  return (
    <motion.div
      initial={{
        background: '#FFF',
      }}
      animate={{
        background: mode ? '#1E2139' : '#FFF',
      }}
      transition={{ type: 'tween' }}
      className={`w-full rounded-[8px] h-[134px] cursor-pointer ${
        mode ? 'opt1' : 'opt2'
      } flex items-start justify-between  flex-wrap px-6 py-4`}
    >
      <div className="flex flex-col items-start justify-between h-full">
        <h2 className={`${!mode ? 'text-[#0C0E16]' : 'text-white'}`}>
          <span>#</span>
          {id}
        </h2>
        <p className={`${!mode ? 'text-[#7E88C3]' : 'text-[#DFE3FA]'}`}>{paymentDue}</p>
        <p className={`${!mode ? 'text-[#0C0E16]' : 'text-white'}`}>
          <span>£</span>
          {total}
        </p>
      </div>
      <div className="flex flex-col h-full items-end justify-between">
        <h2
          className={`${!mode ? 'text-[#858BB2]' : 'text-white'} text-black text-right`}
        >
          {clientName}
        </h2>
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
            className={`w-2 h-2 rounded-full ${
              status === 'paid' ? 'bg-[#33D69F] ' : ''
            } ${status === 'pending' ? 'bg-[#FF8F00] ' : ''}  ${
              status === 'draft' ? 'bg-[#373B53] ' : ''
            } ${mode && status === 'draft' ? 'bg-white' : ''}`}
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
    </motion.div>
  );
}
