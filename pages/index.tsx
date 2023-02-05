// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
import { Element } from 'react-scroll';
import { Page } from '@/components/Page';
// import Modal from '@/components/Modal'
import Landing from '@/pages/sections/landing';
import About from '@/pages/sections/about';
import Tracks from '@/pages/sections/tracks';
import Support from '@/pages/sections/support';
import Sponsors from '@/pages/sections/sponsors';
import Staff from '@/pages/sections/staff';
import Faq from '@/pages/sections/faq';
import Schedule from '@/pages/sections/schedule';
import QR from '@/components/QR';

export default function Home() {
  return (
    <Page>
      <QR />
      <Element
        name="Home"
        className="flex justify-center w-full bg-gradient-to-b from-primary to-accent"
      >
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain">
          <Landing />
        </span>
      </Element>
      <Element
        name="Schedule"
        className="relative flex justify-center px-4 w-full bg-gradient-to-b from-accent-secondary to-accent"
      >
        <Schedule />
      </Element>
      <Element
        name="About"
        className="relative flex justify-center w-full bg-gradient-to-b from-primary to-secondary"
      >
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain 2xl:bg-cover">
          <About />
        </span>
      </Element>
      <Element name="Tracks" className="flex justify-center w-full bg-primary">
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain 2xl:bg-cover">
          <Tracks />
        </span>
      </Element>
      <Element
        name="Support"
        className="flex justify-center w-full bg-gradient-to-b from-accent to-card"
      >
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain 2xl:bg-cover">
          <Support />
        </span>
      </Element>
      <Element
        name="Sponsors"
        className="flex justify-center px-4 w-full bg-gradient-to-b from-accent-secondary to-accent"
      >
        <Sponsors />
      </Element>
      <Element name="Staff" className="flex justify-center w-full bg-primary">
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain">
          <Staff />
        </span>
      </Element>
      <Element
        name="FAQ"
        className="flex justify-center px-4 w-full bg-gradient-to-b"
      >
        <Faq />
      </Element>
    </Page>
  );
}
