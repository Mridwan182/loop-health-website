import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';
import router, { useRouter } from 'next/router';
import MainNavbar from '@/components/Navbar';
import React from 'react';
import Hero from '@/components/Hero';
import Service from '@/components/Service';
import Journey from '@/components/Journey';
import StartNow from '@/components/StartNow';
import Footer from '@/components/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) =>  {
  

  return (
  <div className="w-full antialiased">
    {props.meta}
    <main className="content text-xl">{props.children}</main>
  </div>
)};

export { Main };
