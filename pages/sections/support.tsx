import { CarouselSponsor } from '@/components/Sponsors';

export default function Support() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:mt-0 justify-center items-center">
      <h1 className="text-center font-black text-5xl md:text-7xl text-text">
        Get Involved
      </h1>
      <p className="text-center text-text text-lg md:text-2xl font-semibold mb-4 md:mb-10 sm:w-3/4">
        Not interested in hacking but still want to participate? Great! We would
        love to have you on board. Fill out the forms below if you&apos;d like
        to help hackers throughout the day!
      </p>
      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 mb-12 w-full">
        <CarouselSponsor />
      </div>
    </section>
  );
}
