import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import sponsorUsButton from '../public/assets/sponsors/sponsorus_button.svg';
import becomeMentorButton from '../public/assets/sponsors/become_mentor_button.svg';
import becomeVolunteerButton from '../public/assets/sponsors/become_volunteer_button.svg';

export default function SupportCards() {
  const bounceVariants = {
    initial: {
      y: 0
    },
    animate: {
      y: -10,
      transition: {
        duration: 0.5,
        repeat: 1,
        repeatType: 'reverse'
      }
    }
  };
  const [bounce, setBounce] = React.useState(false);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setBounce(!bounce);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [bounce]);
  return (
    <div className="flex flex-col lg:flex-row w-full md:space-x-4 rounded-md justify-center items-center">
      {/* sponsor us postcard */}
      <div className="flex h-60 w-full md:w-96 group perspective cursor-pointer">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full duration-700">
          <div className="absolute backface-hidden w-full">
            <div className="flex text-center items-center justify-center text-white">
              <Image
                src={'/assets/sponsors/sponsor_us_front.svg'}
                width={528}
                height={305}
                objectFit="contain"
                priority={true}
                quality={1}
                className="rounded-md"
                alt=""
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="absolute -right-2 -bottom-12"
                variants={bounceVariants as Variants}
                animate={bounce ? 'animate' : 'initial'}
              >
                <a
                  href={
                    'https://docs.google.com/forms/d/e/1FAIpQLSe2xJD2Qh14IMKMe7RrGhjzaVEjLDXLy_X-FoD01yKAJkgwHw/viewform'
                  }
                >
                  <Image src={sponsorUsButton} width={140} height={120} />
                </a>
              </motion.span>
            </div>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full">
            <div className="text-center flex flex-col items-center justify-center">
              <Image
                src={'/assets/sponsors/sponsor_us_back.svg'}
                width={528}
                height={305}
                objectFit="contain"
                priority={true}
                quality={1}
                className="rounded-md"
                alt=""
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="absolute -right-2 -bottom-12"
                variants={bounceVariants as Variants}
                animate={bounce ? 'animate' : 'initial'}
              >
                <a href={'/sponsorship_packet.pdf'}>
                  <Image src={sponsorUsButton} width={140} height={120} />
                </a>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      {/* become a mentor postcard */}
      <div className="flex w-full h-60 md:w-96 group perspective cursor-pointer">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full duration-700">
          <div className="absolute backface-hidden w-full">
            <div className="flex text-center items-center justify-center text-white">
              <Image
                src={'/assets/sponsors/become_mentor_front.svg'}
                width={528}
                height={305}
                objectFit="contain"
                priority={true}
                quality={1}
                className="rounded-md"
                alt=""
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="absolute -right-2 -bottom-12"
                variants={bounceVariants as Variants}
                animate={bounce ? 'animate' : 'initial'}
              >
                <a
                  href={
                    'https://docs.google.com/forms/d/e/1FAIpQLScxmD410p1xbI4z-WLYU_OkX87cNpA0NkVVkbrZOUjfwUL_wQ/viewform?usp=send_form'
                  }
                >
                  <Image src={sponsorUsButton} width={140} height={120} />
                </a>
              </motion.span>
            </div>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full">
            <div className="text-center flex flex-col items-center justify-center">
              <Image
                src={'/assets/sponsors/become_mentor_back.svg'}
                width={528}
                height={305}
                objectFit="contain"
                priority={true}
                quality={1}
                className="rounded-md"
                alt=""
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="absolute -right-2 -bottom-12"
                variants={bounceVariants as Variants}
                animate={bounce ? 'animate' : 'initial'}
              >
                <a
                  href={
                    'https://docs.google.com/forms/d/e/1FAIpQLScxmD410p1xbI4z-WLYU_OkX87cNpA0NkVVkbrZOUjfwUL_wQ/viewform?usp=send_form'
                  }
                >
                  <Image src={becomeMentorButton} width={140} height={120} />
                </a>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      {/* become a volunteer postcard */}
      <div className="flex w-full h-60 md:w-96 group perspective cursor-pointer">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full duration-700">
          <div className="absolute backface-hidden w-full">
            <div className="flex text-center items-center justify-center text-white">
              <Image
                src={'/assets/sponsors/sponsor_us_front.svg'}
                width={528}
                height={305}
                objectFit="contain"
                priority={true}
                quality={1}
                className="rounded-md"
                alt=""
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="absolute -right-2 -bottom-12"
                variants={bounceVariants as Variants}
                animate={bounce ? 'animate' : 'initial'}
              >
                <a
                  href={
                    'https://docs.google.com/forms/d/e/1FAIpQLSe2xJD2Qh14IMKMe7RrGhjzaVEjLDXLy_X-FoD01yKAJkgwHw/viewform'
                  }
                >
                  <Image src={sponsorUsButton} width={140} height={120} />
                </a>
              </motion.span>
            </div>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full">
            <div className="text-center flex flex-col items-center justify-center">
              <Image
                src={'/assets/sponsors/sponsor_us_back.svg'}
                width={528}
                height={305}
                objectFit="contain"
                priority={true}
                quality={1}
                className="rounded-md"
                alt=""
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="absolute -right-2 -bottom-12"
                variants={bounceVariants as Variants}
                animate={bounce ? 'animate' : 'initial'}
              >
                <a href={'/sponsorship_packet.pdf'}>
                  <Image src={sponsorUsButton} width={140} height={120} />
                </a>
              </motion.span>
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
