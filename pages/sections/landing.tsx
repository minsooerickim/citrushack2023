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
import LandingAsset from './landing_asset';

export default function Landing() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { data: session, status } = useSession();
  const [signinModalOpen, setSigninModalOpen] = useState(false);
  const [userDataLink, setUserDataLink] = useState('');

  const toggleSigninModal = () => {
    setSigninModalOpen(!signinModalOpen);
  };

  useEffect(() => {
    setMounted(true);
    if (session) {
      setUserDataLink('users/' + session.user.uid);
    }
  }, [session]);

  if (!mounted) return null;

  return (
    <>
      <section className="relative flex flex-col-reverse w-full h-screen md:min-h-[65rem] my-0 md:mb-20 gap-6">
        <div className="absolute left-1/2 -translate-x-1/2 w-full top-[30%] md:top-[25%] lg:top-[13%] flex flex-col justify-center items-center z-14 px-4">
          <div className="text-center text-6xl max-[375px]:text-5xl sm:text-7xl lg:text-8xl mb-2 lg:mb-4 font-black">
            CITRUS HACK 2023
          </div>
          <div className="text-center text-3xl max-[375px]:text-2xl sm:text-4xl lg:text-5xl mb-2 lg:mb-4 font-normal">
            Reach your next destination
          </div>
          <div className="text-center text-2xl max-[375px]:text-xl sm:text-3xl lg:text-4xl mb-3 lg:mb-6 font-black ">
            April 8-9, 2023
          </div>
          <CountdownWrapper date="2023-04-02T16:00:00Z" />
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
          {!session && (
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
          )}
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
          {/* </div> */}
        </div>
        <div className="">
          <LandingAsset />
        </div>
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
