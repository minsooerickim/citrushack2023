import { MasterSchedule } from '@/components/Schedule';
import React from 'react';

export default function Schedule() {
  return (
    <section className="flex flex-col w-full h-full my-14 lg:my-20 max-w-[72rem] justify-center items-center">
      <p className="relative z-10 text-center font-black text-5xl md:text-7xl text-text">
        Schedule
      </p>
      <p className="relative z-20 text-lg md:text-2xl px-4 text-center italic font-semibold text-highlight mb-0 md:mb-8 text-text">
        PST (Pacific Standard Time)
      </p>
      <MasterSchedule />
    </section>
  );
}
