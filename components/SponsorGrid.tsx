import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Image from 'next/image';

import orangeFlag from '@/public/assets/sponsors/orange_flag.svg';
import tangerineFlag from '@/public/assets/sponsors/tangerine_flag.svg';
import cutieFlag from '@/public/assets/sponsors/cutie_flag.svg';

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
      (type === 'cutie'
        ? 'w-20 md:w-24 ' +
          (shrink ? 'w-16 md:w-24' : '') +
          (tall ? 'w-12 md:w-20' : '')
        : type === 'tangerine'
        ? 'w-28 md:w-32 ' +
          (shrink ? 'w-24 md:w-28' : '') +
          (tall ? 'w-18 md:w-24' : '')
        : type === 'orange'
        ? 'w-32 md:w-36 ' +
          (shrink ? 'w-24 md:w-28' : '') +
          (tall ? 'w-18 md:w-24' : '')
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

const tiers = [
  {
    type: 'orange',
    flag: orangeFlag,
    wide: Boolean(true),
    sponsors: [
      {
        image: '/assets/sponsors/spaceforce.svg',
        imageDark: '/assets/sponsors/spaceforce.svg',
        width: 2505,
        height: 3757,
        link: 'https://www.spaceforce.mil/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/spaceforce.svg',
        imageDark: '/assets/sponsors/spaceforce.svg',
        width: 2505,
        height: 3757,
        link: 'https://www.spaceforce.mil/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/spaceforce.svg',
        imageDark: '/assets/sponsors/spaceforce.svg',
        width: 2505,
        height: 3757,
        link: 'https://www.spaceforce.mil/',
        shrink: Boolean(true),
        tall: null
      }
    ]
  },
  {
    type: 'tangerine',
    flag: tangerineFlag,
    wide: Boolean(true),
    sponsors: [
      {
        image: '/assets/sponsors/gcap-light.svg',
        imageDark: '/assets/sponsors/gcap-dark.svg',
        width: 727,
        height: 728,
        link: 'https://www.gcapucr.com/aboutgcap',
        shrink: null,
        tall: null
      },
      {
        image: '/assets/sponsors/amazon-light.svg',
        imageDark: '/assets/sponsors/amazon-dark.svg',
        width: 2380,
        height: 2452,
        link: 'https://www.amazon.com/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/amazon-light.svg',
        imageDark: '/assets/sponsors/amazon-dark.svg',
        width: 2380,
        height: 2452,
        link: 'https://www.amazon.com/',
        shrink: Boolean(true),
        tall: null
      }
    ]
  },
  {
    type: 'cutie',
    flag: cutieFlag,
    wide: Boolean(true),
    sponsors: [
      {
        image: '/assets/sponsors/wolfram-light.svg',
        imageDark: '/assets/sponsors/wolfram-dark.svg',
        width: 198,
        height: 154.34,
        link: 'https://www.wolframalpha.com/',
        shrink: null,
        tall: null
      },
      {
        image: '/assets/sponsors/sketch-light.svg',
        imageDark: '/assets/sponsors/sketch-dark.svg',
        width: 1407,
        height: 1288,
        link: 'https://sketch.com/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/triad-light.svg',
        imageDark: '/assets/sponsors/triad-dark.svg',
        width: 1089,
        height: 1001,
        link: 'https://www.triadmagnetics.com/',
        shrink: Boolean(true),
        tall: Boolean(true)
      },
      {
        image: '/assets/sponsors/vercel-light.svg',
        imageDark: '/assets/sponsors/vercel-dark.svg',
        width: 1155,
        height: 1000,
        link: 'https://vercel.com/?utm_source=citrushack&utm_campaign=oss',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/snapchat.svg',
        imageDark: '/assets/sponsors/snapchat.svg',
        width: 391.39,
        height: 385.49,
        link: 'https://www.snapchat.com/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/interview-cake-light.svg',
        imageDark: '/assets/sponsors/interview-cake-dark.svg',
        width: 1754,
        height: 1850,
        link: 'https://www.interviewcake.com/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/google-cloud.svg',
        imageDark: '/assets/sponsors/google-cloud.svg',
        width: 2278,
        height: 1833,
        link: 'https://cloud.google.com/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/digital-ocean-light.svg',
        imageDark: '/assets/sponsors/digital-ocean-dark.svg',
        width: 176.4,
        height: 176.5,
        link: 'https://www.digitalocean.com/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/acm-light.svg',
        imageDark: '/assets/sponsors/acm-dark.svg',
        width: 910,
        height: 910,
        link: 'https://acmucr.org/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/ieee-light.svg',
        imageDark: '/assets/sponsors/ieee-dark.svg',
        width: 745,
        height: 959,
        link: 'https://ieee.ucr.edu/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/ieee-light.svg',
        imageDark: '/assets/sponsors/ieee-dark.svg',
        width: 745,
        height: 959,
        link: 'https://ieee.ucr.edu/',
        shrink: Boolean(true),
        tall: null
      },
      {
        image: '/assets/sponsors/ieee-light.svg',
        imageDark: '/assets/sponsors/ieee-dark.svg',
        width: 745,
        height: 959,
        link: 'https://ieee.ucr.edu/',
        shrink: Boolean(true),
        tall: null
      }
    ]
  }
];

/** Grid of sponsors of all specified tiers. */
export function SponsorsGrid() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative grid grid-cols-2 gap-6 mt-10  px-3 pl">
      <span className="absolute top-10 left-[1.6rem] flex w-1/2 transform h-full z-100 border-l-4 border-gold z-50 px-0"></span>
      {tiers
        .filter(({ sponsors }) => sponsors.length > 0) // only map tiers with sponsors
        .map(({ type, flag, sponsors, wide }) => (
          <div
            key={type}
            className={
              'relative flex flex-wrap justify-center w-full gap-4 md:gap-10 p-10 rounded-md overflow-hidden ' +
              (wide ? 'col-span-2' : 'col-span-2 sm:col-span-1')
            }
          >
            <span className="mr-1 rounded-full border-4 border-gold w-8 h-8 absolute left-0 z-[1000] bg-sky px-0"></span>

            {sponsors.map(
              ({ image, imageDark, width, height, link, shrink, tall }) => (
                <Sponsor
                  key={link}
                  type={type}
                  image={theme === 'light' ? image : imageDark}
                  width={width}
                  height={height}
                  link={link}
                  shrink={shrink}
                  tall={tall}
                />
              )
            )}
          </div>
        ))}
    </div>
  );
}
