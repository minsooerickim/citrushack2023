import { SponsorsGrid } from '@/components/SponsorGrid';
import Image from 'next/image';
import sponsorBGDark from '@/public/assets/waves/sponsorBGDark.svg';
import { useTheme } from 'next-themes';

export default function Sponsors() {
  const { theme } = useTheme();

  return (
    <section className="relative z-0 flex flex-col w-full h-full max-w-[60rem] lg:mt-6 justify-center items-center">
      <h1 className="text-center text-5xl md:text-7xl font-black text-text">
        Our Sponsors
      </h1>
      <p className="text-center text-lg md:text-2xl font-semibold text-text xs:w-3/4">
        Thank you to all of those who made this hackathon possible!
      </p>
      <SponsorsGrid />
      {/* <div className="absolute w-full h-full -z-0 top-0 right-0">
        {theme === 'light' ? (
          <Image
            src={sponsorBGDark}
            alt="Wave Light"
            layout="responsive"
            objectFit="contain"
          />
        ) : (
          <Image
            src={sponsorBGDark}
            alt="Wave Dark"
            layout="responsive"
            objectFit="contain"
          />
        )}
      </div> */}
    </section>
  );
}
