'use client';
import { useContext, useState } from 'react';
import res from '@/app/data.json';
import { GlobalWrapper, PropType } from './data';
import Header from './components/Header';
export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(res);
  const [mode, setMode] = useState(false);
  return (
    <GlobalWrapper.Provider
      value={{
        data,
        setData,
        mode,
        setMode,
      }}
    >
      <div className="w-full h-screen flex flex-col relative">
        <Header />
        {children}
      </div>
    </GlobalWrapper.Provider>
  );
}

export function useData(): PropType {
  const context = useContext(GlobalWrapper) || {
    data: [],
    mode: false,
    setData: () => {},
    setMode: () => {},
  };
  return context;
}
