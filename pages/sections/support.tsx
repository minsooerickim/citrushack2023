import { CarouselSponsor } from '@/components/Sponsors';

export default function Support() {
  return (
    <section className="flex flex-col w-full md:my-12 lg:mt-0 pb-12 md:pb-0">
      <div className="flex flex-col justify-center items-center pb-12">
        <h1 className="text-center font-black text-5xl md:text-7xl text-text">
          Get Involved
        </h1>
        <p className="text-center text-text text-lg md:text-2xl font-semibold mb-4 md:mb-10 sm:w-3/4">
          Not interested in hacking but still want to participate? Great! We
          would love to have you on board. Fill out the forms below if
          you&apos;d like to help hackers throughout the day!
        </p>
      </div>
      <div className="flex flex-col justify-center w-full">
        <CarouselSponsor />
      </div>
    </section>
  );
}
