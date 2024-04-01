'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ mode }: { mode: boolean }) {
  const { register, handleSubmit } = useForm();
  const [divsCount, setDivsCount] = useState(1);
  const sbmt = (data) => {
    console.log(data);
  };
  const renderDivs = () => {
    const divs = [];
    for (let i = 0; i < divsCount; i++) {
      divs.push(
        <div className="w-full flex flex-col gap-6" key={i}>
          <div className="w-full">
            <p>Item Name</p>
            <input
              type="text"
              className={`inp pr-3 ${mode ? 'drkMode' : 'lgtMode'}`}
              {...register(`Itemname${i}`)}
            />
          </div>
          <div className="w-full flex gap-6 items-center relative justify-center">
            <div className="w-1/5">
              <p>Qty.</p>
              <input
                type="number"
                maxLength={2}
                className={`h-12 pl-2 w-full rounded-[4px] outline-none ${
                  mode ? 'drkMode' : 'lgtMode'
                }`}
              />
            </div>
            <div className="w-2/6">
              <p>Price</p>
              <input
                type="number"
                className={`inp pr-3 ${mode ? 'drkMode' : 'lgtMode'}`}
              />
            </div>
            <div className="w-2/5 mr-5">
              <p>Total</p>
              <input
                type="text"
                className={` inp bg-transparent pr-3 text-[#888EB0] text-[15px] font-bold`}
                value={'156'}
                readOnly={true}
              />
            </div>
            <Image
              alt="deleteIcon"
              src={'/icon-delete.svg'}
              width={12}
              height={16}
              className="w-3 h-4 cursor-pointer absolute right-0"
            />
          </div>
        </div>
      );
    }
    return divs;
  };
  return (
    <form
      className={`${
        mode ? ' text-[#888EB0]' : 'text-[#7E88C3]'
      } flex flex-col items-start justify-center w-full gap-6`}
      onSubmit={handleSubmit(sbmt)}
    >
      <p className="font-bold text-[#7C5DFA] text-[15px]">Bill From</p>
      <div className="w-full">
        <p>Street Address</p>
        <input
          type="text"
          className={`${mode ? 'drkMode' : 'lgtMode'}`}
          {...register('SendersStreet')}
        />
      </div>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-6 items-center  w-full">
          <div className="w-full">
            <p>City</p>
            <input
              type="text"
              className={`${mode ? 'drkMode' : 'lgtMode'}`}
              {...register('SendersCity')}
            />
          </div>
          <div className="w-full">
            <p>Post Code</p>
            <input
              type="text"
              className={`${mode ? 'drkMode' : 'lgtMode'}`}
              {...register('SendersPostCode')}
            />
          </div>
        </div>
        <div className="w-full">
          <p>Country</p>
          <input
            type="text"
            className={`${mode ? 'drkMode' : 'lgtMode'}`}
            {...register('SendersCountry')}
          />
        </div>
      </div>
      <p className="font-bold text-[#7C5DFA] text-[15px]">Bill To</p>
      <div className="w-full mt-[-10px]">
        <p>Client’s Name</p>
        <input
          type="text"
          className={`${mode ? 'drkMode' : 'lgtMode'}`}
          {...register('ClientsName')}
        />
      </div>
      <div className="w-full">
        <p>Client’s Email</p>
        <input
          type="text"
          className={`${mode ? 'drkMode' : 'lgtMode'}`}
          {...register('ClientsEmail')}
        />
      </div>
      <div className="w-full">
        <p>Street Address</p>
        <input
          type="text"
          className={`${mode ? 'drkMode' : 'lgtMode'}`}
          {...register('ClientsStreet')}
        />
      </div>
      <div className="flex flex-col  items-center gap-6 justify-center w-full">
        <div className="flex w-full gap-6">
          <div className="w-full">
            <p>City</p>
            <input
              type="text"
              className={`${mode ? 'drkMode' : 'lgtMode'}`}
              {...register('ClientsCity')}
            />
          </div>
          <div className="w-full">
            <p>Post Code</p>
            <input
              type="text"
              className={`${mode ? 'drkMode' : 'lgtMode'}`}
              {...register('ClientsPostCode')}
            />
          </div>
        </div>
        <div className="w-full">
          <p>Country</p>
          <input
            type="text"
            className={`${mode ? 'drkMode' : 'lgtMode'}`}
            {...register('ClientsCountry')}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        <div className="w-full">
          <p>Invoice Date</p>
          <input
            type="date"
            className={`inp pr-3 ${mode ? 'drkMode' : 'lgtMode'}`}
            {...register('InvoiceDate')}
          />
        </div>
        <div>
          <p>Payment Terms</p>
          <input
            type="text"
            className={`inp pr-3 ${mode ? 'drkMode' : 'lgtMode'}`}
            {...register('PaymentTerms')}
          />
        </div>
        <div>
          <p>Project / Description</p>
          <input
            type="text"
            className={`inp pr-3 ${mode ? 'drkMode' : 'lgtMode'}`}
            {...register('ProjectDescription')}
          />
        </div>
      </div>
      <p className="text-lg font-bold text-[#777F98] mt-10">Item List</p>
      <div className="flex flex-col items-center justify-center gap-6">
        {renderDivs()}
      </div>
      <div
        className={`pr-3 ${
          mode ? 'bg-[#252945] text-[#888EB0]' : 'bg-[#F9FAFE] text-[#7E88C3]'
        } text-[15px] font-bold flex items-center justify-center rounded-3xl w-full h-12 cursor-pointer`}
        onClick={() => setDivsCount((prev) => prev + 1)}
      >
        + Add New Item
      </div>
      <button>button</button>
    </form>
  );
}
