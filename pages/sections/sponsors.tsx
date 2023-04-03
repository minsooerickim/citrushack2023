import { SponsorsGrid } from '@/components/SponsorGrid';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Image from 'next/image';
import bird1 from '../../public/assets/bird1.svg';
import bird2 from '../../public/assets/bird2.svg';
import bird3 from '../../public/assets/bird3.svg';
import star from '../../public/assets/star.svg';

export const Assets = () => {
  const { theme } = useTheme();

  return (
    <>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-0  max-xs:hidden right-0 lg:-right-8 xl:-right-36 -top-10 md:top-96 w-20  xl:w-24 "
      >
        {theme === 'light' ? (
          <Image src={bird3} alt="bird" draggable={false} />
        ) : (
          <Image src={star} alt="star" draggable={false} />
        )}
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-0 max-xs:hidden left-0 xl:-left-40 top-32 md:top-14"
      >
        {theme === 'light' ? (
          <Image src={bird2} alt="bird" draggable={false} />
        ) : (
          <Image src={star} alt="cloud" draggable={false} />
        )}
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-0 max-md:hidden md:-top-12 lg:top-96 left-96"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" draggable={false} />
        ) : (
          <Image src={star} alt="cloud" draggable={false} />
        )}
      </motion.div>
    </>
  );
};

export default function Sponsors() {
  return (
    <section className="relative z-0 flex flex-col w-full h-full max-w-[60rem] md:mt-10 justify-center items-center">
      <h1 className="text-center text-5xl md:text-7xl font-black text-text">
        Our Sponsors
      </h1>
      <p className="text-center text-lg md:text-2xl font-semibold text-text xs:w-3/4">
        Thank you to all of those who made this hackathon possible!
      </p>
      <SponsorsGrid />
      <Assets />
    </section>
  );
}
