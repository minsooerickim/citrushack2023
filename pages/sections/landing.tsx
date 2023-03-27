/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import { CountdownWrapper } from '@/components/Countdown';
import { ButtonLink } from '@/components/ButtonLink';
import Modal from '@/components/Modal';
import { SigninForm } from '@/components/Form';
import SignupCounter from '@/components/SignupCounter';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Skyline from '../../public/assets/skyline.svg';
import cloud from '../../public/assets/cloud.svg';
import airplane from '../../public/assets/airplane.svg';
import bird from '../../public/assets/bird.svg';

export const Assets = () => {
  return (
    <>
      {/* cloud  left low opacity*/}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute left-2 bottom-[19%] xs:bottom-[25%] lg:bottom-[37%] xl:bottom-[50%] w-20 xs:w-28 sm:w-36 opacity-60"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud  left */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute bottom-[19%] xs:bottom-[25%] lg:bottom-[37%]  xl:bottom-[50%] w-20 xs:w-28 sm:w-36 opacity-60"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud right low opacity*/}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute right-5  bottom-[21%] xs:bottom-[31%]  lg:bottom-[37%] xl:bottom-[50%] w-24 xs:w-28 sm:w-36 opacity-40"
      >
        <Image src={cloud} alt="balloon" />
      </motion.div>
      {/* cloud right */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute right-0  bottom-[21%] xs:bottom-[31%] lg:bottom-[37%] xl:bottom-[50%] w-20 xs:w-28 sm:w-36 opacity-60"
      >
        <Image src={cloud} alt="balloon" />
      </motion.div>
      {/* cloud top middle */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute left-[50%] top-10 lg:top-5 w-24 lg:w-40 opacity-50"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud top middle low opacity */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute left-[45%] sm:left-[50%] top-10 lg:top-5 w-24 lg:w-56 opacity-60"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud top left low opacity*/}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute left-[5%] sm:left-[15%] lg:left-[25%] top-24 sm:top-5 w-24 sm:w-40 opacity-60"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud top left low opacity*/}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute left-[0%] sm:left-[15%] lg:left-[25%] top-24 sm:top-4 w-24 sm:w-40"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud left middle */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute left-8 lg:left-3 xl:left-[8%] hidden md:inline-block md:top-[50%] lg:top-[35%] xl:top-[20%] w-14 xs:w-24 lg:w-96 opacity-50"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud left middle opacity low*/}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute left-3 lg:left-0 xl:left-[6%] hidden md:inline-block md:top-[50%] lg:top-[35%] xl:top-[20%] w-14 xs:w-24 lg:w-56 opacity-70"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud top right */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute right-10 xl:right-44 top-40 lg:top-0 w-20 xs:w-28 lg:w-52 opacity-90"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud top right opacity low*/}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute right-0 xl:right-56 top-40 lg:top-0  w-20 xs:w-28 lg:w-52 opacity-75"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud top left opacity low*/}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute max-xs:hidden left-12 lg:left-10 top-48 lg:top-6 w-20 xs:w-28 opacity-60"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* bird left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute left-12 top-40 lg:top-28 xl:top-56"
      >
        <Image src={bird} alt="bird" />
      </motion.div>
      {/* bird right */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute right-32 xs:right-20 top-32 lg:top-96"
      >
        <Image src={bird} alt="bird" />
      </motion.div>
      {/* bird bottom */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute right-40 xs:right-44 bottom-40 xs:bottom-96 opacity-70"
      >
        <Image src={bird} alt="bird" />
      </motion.div>
      {/* bird middle */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute left-[44%] top-10 max-md:hidden opacity-30"
      >
        <Image src={bird} alt="bird" />
      </motion.div>
      {/* plane*/}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="absolute right-[10%] top-[25%] w-14 xs:w-52 lg:w-[300px]"
      >
        <Image src={airplane} alt="airplane" />
      </motion.div>
    </>
  );
};

export default function Landing() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { data: session, status } = useSession();
  const [signinModalOpen, setSigninModalOpen] = useState(false);
  const [userDataLink, setUserDataLink] = useState('');

  // const toggleSigninModal = () => {
  //   setSigninModalOpen(!signinModalOpen);
  // };

  useEffect(() => {
    setMounted(true);
    if (session) {
      setUserDataLink('users/' + session.user.uid);
    }
  }, [session]);

  if (!mounted) return null;

  return (
    <>
      <section className="relative flex flex-col-reverse w-full h-screen md:min-h-[60rem]">
        <div className="absolute left-1/2 -translate-x-1/2 w-full top-[30%] md:top-[25%] lg:top-[16%] flex flex-col justify-center items-center z-10 px-4 text-textcolor">
          <div className="text-center text-6xl max-[375px]:text-5xl sm:text-7xl lg:text-8xl mb-2 lg:mb-4 font-black">
            CITRUS HACK 2023
          </div>
          <div className="text-center text-3xl max-[375px]:text-2xl sm:text-4xl lg:text-5xl mb-2 lg:mb-4 font-normal">
            Reach your next destination
          </div>
          <div className="text-center text-2xl max-[375px]:text-xl sm:text-3xl lg:text-4xl mb-3 lg:mb-6 font-black z-1">
            April 8-9, 2023
          </div>
          <CountdownWrapper date="2023-04-02T16:00:00" />
          {/* <p className='max-w-lg italic text-center font-medium'>
            In-person sign-ups will close today at 5:30 PM PST, as we are reaching maximum capacity
          </p> */}
          {/* {
            (status === 'unauthenticated' || (status === 'authenticated' && !Boolean(session.user.qualified))) &&
            <p className='max-w-lg italic text-center font-medium'>
              Applications will close tonight at 12 AM PST, so be sure to apply while you still can!
            </p>
          } */}
          <span className="flex justify-center w-full mb-6">
            <SignupCounter />
          </span>
          {status === 'authenticated' &&
            !session.user.uid &&
            router.pathname !== '/apply' && (
              <Link passHref href="/apply">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.995 }}
                  className="flex justify-center items-center self-center w-full md:max-w-[16rem] h-11 px-4 font-semibold text-lg rounded-md bg-highlight shadow cursor-pointer"
                >
                  Apply Now!
                </motion.button>
              </Link>
            )}
          {/* {!session && (
            <span className="flex justify-center w-full z-[200]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="flex justify-center items-center self-center w-full md:max-w-[16rem] h-11 px-4 font-semibold text-lg rounded-md bg-highlight shadow cursor-pointer"
                onClick={() => toggleSigninModal()}
              >
                Sign In
              </motion.button>
            </span>
          )} */}
          <div className="flex flex-col w-full gap-3">
            {/* uncomment the day before */}
            {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' &&
              !session.user.checkedIn && (
                <span className="flex justify-center w-full z-[200]">
                  <ButtonLink primary label="Check-In Now!" link="/checkin" />
                </span>
              )}
            {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' && (
                <>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink
                      secondary
                      label="Join Our Discord"
                      link={process.env.discord}
                      external
                    />
                  </span>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink
                      secondary
                      label="Group Dashboard"
                      link="/group/dashboard"
                    />
                  </span>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink secondary label="QR Code" link={userDataLink} />
                  </span>
                </>
              )}
          </div>
        </div>
        <Assets />
        <Image
          src={Skyline}
          alt="skyline"
          className="absolute object-cover z-1"
        />
      </section>
      <Modal
        title="Sign In"
        description="Sign in to Citrus Hack via Google to apply and access more. No password required."
        show={signinModalOpen}
        handler={setSigninModalOpen}
      >
        <SigninForm />
      </Modal>
    </>
  );
}
