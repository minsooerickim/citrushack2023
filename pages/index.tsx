import React from 'react';
import Image from 'next/image';
import { Element } from 'react-scroll';
import { Page } from '@/components/Page';
import Landing from '@/pages/sections/landing';
import About from '@/pages/sections/about';
import Tracks from '@/pages/sections/tracks';
import Support from '@/pages/sections/support';
import Sponsors from '@/pages/sections/sponsors';
import Faq from '@/pages/sections/faq';
import Schedule from '@/pages/sections/schedule';
import Team from '@/pages/sections/team';
import Footer from '@/components/Footer';
import FooterWave from '@/public/assets/waves/footer_wave.svg';
import FaqBalloons from '@/public/assets/faq_balloons.svg';

export default function Home() {
  return (
    <Page>
      <Element
        name="Home"
        className="flex justify-center w-full bg-citrus-sky bg-contain"
      >
        <span className="flex justify-center w-full">
          <Landing />
        </span>
      </Element>
      <Element name="About" className="flex justify-center w-full">
        <span className="flex justify-center w-full 2xl:bg-cover">
          <About />
        </span>
      </Element>
      <Element
        name="Tracks"
        className="flex justify-center w-full bg-sky md:bg-contain"
      >
        <span className="flex justify-center px-4 w-full 2xl:bg-cover">
          <Tracks />
        </span>
      </Element>
      <Element
        name="Schedule"
        className="relative flex justify-center w-full bg-citrus-sky bg-contain"
      >
        <Schedule />
      </Element>
      <Element name="Support" className="flex justify-center w-full bg-sky">
        <span className="flex justify-center px-4 w-full 2xl:bg-cover">
          <Support />
        </span>
      </Element>
      <Element
        name="Sponsors"
        className="flex justify-center px-4 w-full bg-gradient-to-b from-accent-secondary to-accent"
      >
        <Sponsors />
      </Element>
      <Element name="Staff" className="flex justify-center w-full bg-sky">
        <span className="flex justify-center px-4 w-full">
          <Team />
        </span>
      </Element>
      <div className="relative w-full">
        <span className="absolute bottom-0 left-0">
          <Image src={FooterWave} alt="" objectFit="fill" />
        </span>
        <span className="absolute bottom-0 mb-20 pb-20">
          <Image src={FaqBalloons} alt="" objectFit="fill" />
        </span>
        <Element
          name="FAQ"
          className="flex justify-center px-4 w-full bg-gradient-to-b relative"
        >
          <Faq />
        </Element>
        <Footer />
      </div>
    </Page>
  );
}
