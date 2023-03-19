import { MasterSchedule } from '@/components/Schedule';

export default function Schedule() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-20 max-w-[72rem] justify-center items-center">
      <h1 className="text-center font-black text-7xl">Schedule</h1>
      <p className="px-4 text-center italic font-black text-highlight md:mb-8">
        PST (Pacific Standard Time)
      </p>
      <MasterSchedule />
    </section>
  );
}
