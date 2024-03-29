'use client';

import { Dispatch, SetStateAction, createContext } from 'react';

export type CardType = {
  id: string;
  paymentDue: string;
  clientName: string;
  status: string;
  total: number;
};

export type DataType = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: clientSenderType;
  clientAddress: clientSenderType;
  items: itemsType[];
  total: number;
};
type clientSenderType = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};
type itemsType = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type PropType = {
  mode: boolean;
  setMode: Dispatch<SetStateAction<boolean>>;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
};

export const GlobalWrapper = createContext<PropType | null>(null);
