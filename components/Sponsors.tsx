/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import sponsorUsButton from '../public/assets/sponsors/sponsorus_button.svg';
import becomeMentorButton from '../public/assets/sponsors/become_mentor_button.svg';
import becomeVolunteerButton from '../public/assets/sponsors/become_volunteer_button.svg';

interface SponsorProps {
  /** Sponsor tier (e.g. 'cutie'). */
  type: string;
  /** Path to sponsor logo (e.g. /assets/sponsors/google-cloud.svg). */
  image: string;
  /** Width of sponsor logo. */
  width: number;
  /** Height of sponsor logo. */
  height: number;
  /** Link to sponsor website. */
  link: string;
  /** Decides whether to shrink the sponsor logo if it appears larger than others in the same tier. */
  shrink?: boolean;
  /** Decides whether to shrink the sponsor logo even more if it still appears larger than others in the same tier. */
  tall?: boolean;
}

/** Individual sponsor logo linked to sponsor website. */
export const Sponsor = ({
  type,
  image,
  width,
  height,
  link,
  shrink,
  tall
}: SponsorProps) => (
  <div
    className={
      'flex items-center min-h-[10rem] ' +
      (type === 'kumquat'
        ? 'w-32 md:w-36 ' +
          (shrink ? 'w-16 md:w-24' : '') +
          (tall ? 'w-12 md:w-20' : '')
        : type === 'cutie'
        ? 'w-32 md:w-36 ' +
          (shrink ? 'w-16 md:w-24' : '') +
          (tall ? 'w-12 md:w-20' : '')
        : type === 'tangerine'
        ? 'w-32 md:w-36 ' +
          (shrink ? 'w-24 md:w-28' : '') +
          (tall ? 'w-18 md:w-24' : '')
        : type === 'orange'
        ? 'w-32 md:w-36 ' +
          (shrink ? 'w-[6.5rem] md:w-32' : '') +
          (tall ? 'w-18 md:w-20' : '')
        : type === 'pomelo'
        ? 'w-40 md:w-48 ' +
          (shrink ? 'w-24 md:w-32' : '') +
          (tall ? 'w-20 md:w-28' : '')
        : '')
    }
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.995 }}
      className="w-full transform-gpu"
    >
      <a target="_blank" rel="noreferrer noopener" href={link}>
        <Image
          src={image}
          width={width}
          height={height}
          quality={50}
          priority={Boolean(true)}
          layout="responsive"
          objectFit="contain"
        />
      </a>
    </motion.div>
  </div>
);

export function CarouselSponsor() {
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
    <div className="flex flex-col md:flex-row w-full h-screen md:h-72 md:space-x-4 rounded-md justify-center">
      {/* sponsor us postcard */}
      <div className="relative w-full md:w-96 h-full bg-transparent group perspective cursor-pointer carousel-item">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
          <div className="absolute backface-hidden w-full h-full ">
            <div className="absolute backface-hidden w-full h-full ">
              <div className="text-center flex flex-col items-center justify-center h-full text-white">
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
                  className="absolute right-0 bottom-0 pr-4"
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
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
            <div className="text-center flex flex-col items-center justify-center h-full">
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
                className="absolute right-0 bottom-0 pr-4"
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
      <div className="relative w-full md:w-96 h-full bg-transparent group perspective cursor-pointer carousel-item">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
          <div className="absolute backface-hidden w-full h-full ">
            <div className="absolute backface-hidden w-full h-full ">
              <div className="text-center flex flex-col items-center justify-center h-full text-white">
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
                  className="absolute right-0 bottom-0 pr-4"
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
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
            <div className="text-center flex flex-col items-center justify-center h-full">
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
                className="absolute right-0 bottom-0 pr-4"
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
      <div className="relative w-full md:w-96 h-full bg-transparent group perspective cursor-pointer carousel-item">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
          <div className="absolute backface-hidden w-full h-full ">
            <div className="absolute backface-hidden w-full h-full ">
              <div className="text-center flex flex-col items-center justify-center h-full text-white">
                <Image
                  src={'/assets/sponsors/become_volunteer_front.svg'}
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
                  className="absolute right-0 bottom-0 pr-4"
                  variants={bounceVariants as Variants}
                  animate={bounce ? 'animate' : 'initial'}
                >
                  <a
                    href={
                      'https://docs.google.com/forms/d/e/1FAIpQLSe2xJD2Qh14IMKMe7RrGhjzaVEjLDXLy_X-FoD01yKAJkgwHw/viewform'
                    }
                  >
                    <Image
                      src={becomeVolunteerButton}
                      width={140}
                      height={120}
                    />
                  </a>
                </motion.span>
              </div>
            </div>
          </div>
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full">
            <div className="text-center flex flex-col items-center justify-center h-full">
              <Image
                src={'/assets/sponsors/become_volunteer_back.svg'}
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
                className="absolute right-0 bottom-0 pr-4"
                variants={bounceVariants as Variants}
                animate={bounce ? 'animate' : 'initial'}
              >
                <a
                  href={
                    'https://docs.google.com/forms/d/e/1FAIpQLSe2xJD2Qh14IMKMe7RrGhjzaVEjLDXLy_X-FoD01yKAJkgwHw/viewform'
                  }
                >
                  <Image src={becomeVolunteerButton} width={140} height={120} />
                </a>
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      {/* <motion.div
        className=" w-11/12 h-auto max-w-md relative carousel-item"
        onClick={handleClick}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div
          className="w-full h-full bg-blue absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform .5s ease-in-out'
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard2.svg"
            className="rounded-box"
          />
        </motion.div>
        <motion.div
          className="w-full h-full absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
            transition: 'transform .5s ease-in-out'
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard2_back.svg"
            className="rounded-box"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className=" w-11/12 h-auto max-w-md relative carousel-item"
        onClick={handleClick}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div
          className="w-full h-full bg-blue absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform .5s ease-in-out'
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard3.svg"
            className="rounded-box"
          />
        </motion.div>
        <motion.div
          className="w-full h-full absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
            transition: 'transform .5s ease-in-out'
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard3_back.svg"
            className="rounded-box"
          />
        </motion.div>
      </motion.div> */}
    </div>
  );
}
