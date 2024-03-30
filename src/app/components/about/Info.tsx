'use client';
import { useData } from '@/app/Wrapper';
import { DataType } from '@/app/data';
import { useEffect, useState } from 'react';

type Proptype = {
  el: DataType | null;
};
export default function Info({ el }: Proptype) {
  const { mode } = useData();
  return (
    <div
      className={`w-full flex items-start justify-center p-6 rounded-[8px] flex-col gap-10 text-[13px] font-[500] ${
        mode ? 'bg-[#1E2139] opt2' : 'bg-white opt1'
      } ${mode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'}
  `}
    >
      <div className="flex flex-col">
        <p className={`text-[15px] font-bold ${mode ? 'text-[#FFF]' : 'text-[#0C0E16]'}`}>
          <span className={`${mode ? 'text-[#7E88C3]' : 'text-[#7E88C3]'}`}>#</span>
          {el?.id}
        </p>
        <p className={``}>{el?.description}</p>
      </div>
      <div className="flex flex-col ">
        <p>{el?.clientAddress.street}</p>
        <p>{el?.clientAddress.city}</p>
        <p>{el?.clientAddress.postCode}</p>
        <p>{el?.clientAddress.country}</p>
      </div>
      <div className="flex w-[90%] justify-between items-start">
        <div className="flex flex-col items-start justify-between h-[127px]">
          <div className="flex flex-col items-start justify-center gap-[13px]">
            <p>Invoice Date</p>
            <p
              className={`font-bold text-[15px] ${
                mode ? 'text-[#FFF]' : 'text-[#0C0E16]'
              }`}
            >
              {el?.createdAt}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[13px]">
            <p>Payment Due</p>
            <p
              className={`text-[15px] font-bold ${
                mode ? 'text-[#FFF]' : 'text-[#0C0E16]'
              }`}
            >
              {el?.paymentDue}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between h-[127px]">
          <p>Bill to</p>
          <div className="flex flex-col items-start justify-center gap-[7px]">
            <p
              className={`${
                !mode ? 'text-[#0C0E16]' : 'text-[#FFF]'
              } font-bold text-[15px]`}
            >
              {el?.clientName}
            </p>
            <div className="h-[75px]">
              <p className={``}>{el?.clientAddress.street}</p>
              <p className={``}>{el?.clientAddress.city}</p>
              <p className={``}>{el?.clientAddress.postCode}</p>
              <p className={``}>{el?.clientAddress.country}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[13px]">
        <p>Sent to</p>
        <p
          className={`${!mode ? 'text-[#0C0E16]' : 'text-[#FFF]'} font-bold text-[15px]`}
        >
          {el?.clientEmail}
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div
          className={`flex items-center justify-between w-full p-6 h-full ${
            mode ? 'bg-[#252945]' : 'bg-[#F9FAFE]'
          } top h-[148px]`}
        >
          <div className="flex flex-col h-full justify-between w-full">
            {el?.items.map((el, key) => (
              <div key={key} className="w-full flex items-center  justify-between">
                <div>
                  <p
                    className={`font-bold text-[15px] ${
                      mode ? 'text-[#FFF]' : 'text-[#0C0E16]'
                    }`}
                  >
                    {el.name}
                  </p>
                  <p
                    className={`font-bold ${mode ? 'text-[#888EB0]' : 'text-[#7E88C3]'}`}
                  >
                    {el.quantity} x £{el.price}
                  </p>
                </div>
                <p className={`${mode ? 'text-[#FFF]' : 'text-[#0C0E16]'} font-bold`}>
                  £{el.quantity * el.price}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`btm h-20 w-full text-white px-6 flex items-center justify-between ${
            mode ? 'bg-[#0C0E16]' : 'bg-[#373B53]'
          }`}
        >
          <p>Grand Total</p>
          <p className="text-[24px] font-bold">£{el?.total}</p>
        </div>
      </div>
    </div>
  );
}
