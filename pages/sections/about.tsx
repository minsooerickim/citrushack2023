import Image from 'next/image';
import AboutUs from '../../public/assets/aboutUs.svg';
import Postcard from '../../public/assets/postcard.svg';
import aboutBG from '../../public/assets/aboutBG.svg';
import React from 'react';

export default function About() {
  return (
    <section className="relative flex flex-col w-full h-full my-8 lg:my-14 max-h-[60rem] justify-center items-center">
      <div className="w-5/6 xl:w-2/3 hidden mb-12 lg:mb-0 sm:inline z-10">
        <Image src={AboutUs} alt="AboutUs" />
      </div>
      <div className="relative w-full sm:w-5/6 sm:hidden mb-12 z-20">
        <Image src={Postcard} alt="Postcard" />
      </div>
      <div className="absolute w-full h-full z-0">
        <Image src={aboutBG} alt="wavy" />
      </div>
    </section>
  );
}
