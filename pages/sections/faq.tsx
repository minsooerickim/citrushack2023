import { FaqGrid } from '@/components/FAQ';
import ExternalLink from '@/components/ExternalLink';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import balloonYellow from '@/public/assets/balloonYellow.svg';
import balloonBlue from '@/public/assets/balloonBlue.svg';
import bird1 from '@/public/assets/bird1.svg';
import star from '@/public/assets/star.svg';

export const Assets = () => {
  const { theme } = useTheme();

  return (
    <>
      {/* balloon right */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-20 max-[1182px]:hidden -right-28 xl:-right-40 top-[35%] w-16 xl:w-20"
      >
        <Image src={balloonBlue} alt="cloud" />
      </motion.div>
      {/* balloon left */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-20 max-lg:hidden  -left-24 xl:-left-40 bottom-0 w-16 xl:w-20"
      >
        <Image src={balloonYellow} alt="cloud" />
      </motion.div>
      {/* balloon */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-20 max-lg:hidden  -left-24 xl:-left-40 top-96 w-16 xl:w-20"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" />
        ) : (
          <Image src={star} alt="cloud" />
        )}
      </motion.div>
      {/* balloon */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-20 max-[1182px]:hidden -right-24 xl:-right-40 bottom-96 w-16 xl:w-20"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" />
        ) : (
          <Image src={star} alt="cloud" />
        )}
      </motion.div>
    </>
  );
};

export default function Faq() {
  return (
    <section className="relative flex flex-col w-full h-full my-12 lg:mt-0 max-w-[60rem] items-center">
      <h1 className="text-center text-7xl font-black w-391 h-109 not-italic items-center mt-6 text-text">
        FAQ
      </h1>
      <p className="text-center text-text text-lg md:text-2xl  font-semibold">
        If you still can&apos;t find an answer to your question, feel free to
        email us at{' '}
        <ExternalLink
          name="citrushack@gmail.com"
          link="mailto:citrushack@gmail.com"
        />
        .
      </p>
      {/* <div className="absolute w-screen h-screen -z-0 right-0"> */}
      <Assets />
      {/* </div> */}
      <FaqGrid />
    </section>
  );
}
