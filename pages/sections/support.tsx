import { CarouselSponsor } from '@/components/Sponsors';
import SupportWaveLight from '@/public/assets/waves/supportWave.svg';
import SupportWaveDark from '@/public/assets/waves/supportWaveDark.svg';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Support() {
  const { theme } = useTheme();
  return (
    <section className="relative z-0 flex flex-col w-full md:my-12 lg:mt-6 pb-12 md:pb-0">
      <div className="relative z-20 flex flex-col justify-center items-center pb-12">
        <h1 className="text-center font-black text-5xl md:text-7xl text-text">
          Get Involved
        </h1>
        <p className="text-center text-text text-lg md:text-2xl font-semibold mb-4 md:mb-10 sm:w-3/4">
          Not interested in hacking but still want to participate? Great! We
          would love to have you on board. Fill out the forms below if
          you&apos;d like to help hackers throughout the day!
        </p>
      </div>
      <div className="relative z-10 flex flex-col justify-center w-full">
        <CarouselSponsor />
      </div>
      <div className="absolute w-screen h-screen -z-0 right-0">
        {theme === 'light' ? (
          <Image
            src={SupportWaveLight}
            alt="Wave Light"
            layout="responsive"
            objectFit="contain"
          />
        ) : (
          <Image
            src={SupportWaveDark}
            alt="Wave Dark"
            layout="responsive"
            objectFit="contain"
          />
        )}
      </div>
    </section>
  );
}
