import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin
} from 'react-icons/fi';

import bus_footer from '@/public/assets/bus_footer.svg';
import bus_footer_dark from '@/public/assets/bus_footer_dark.svg';
import vercel from '@/public/assets/vercel.svg';

export default function Footer() {
  const { theme } = useTheme();

  const socials = [
    {
      icon: <FiMail title="Email" />,
      link: 'mailto:citrushack@gmail.com'
    },
    {
      icon: <FiFacebook title="Facebook" />,
      link: 'https://www.facebook.com/CitrusHack'
    },
    {
      icon: <FiInstagram title="Instagram" />,
      link: 'https://www.instagram.com/citrushack_ucr'
    },
    {
      icon: <FiTwitter title="Twitter" />,
      link: 'https://twitter.com/citrushack'
    },
    {
      icon: <FiLinkedin title="LinkedIn" />,
      link: 'https://www.linkedin.com/company/citrus-hack'
    }
  ];

  return (
    // <>
    <div className=" w-screen">
      {/* <div className="w-screen"> */}
      {theme === 'light' ? (
        <Image
          src={bus_footer}
          alt="footer"
          objectFit="cover"
          layout="responsive"
        />
      ) : (
        <Image
          src={bus_footer_dark}
          alt="footer"
          objectFit="cover"
          layout="responsive"
        />
      )}
      {/* </div> */}
      <div className="bg-[#72C03F] flex flex-col justify-center items-center w-full h-full">
        <footer className="flex justify-center w-full py-12 bg-primary">
          <div className="flex flex-col gap-2 items-center w-full mx-4 text-md font-semibold">
            <p className="text-center">
              Made with {theme === 'light' ? '🖤' : '🤍'} by the Citrus Hack
              Team
            </p>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://vercel.com/"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="hover:text-highlight cursor-pointer"
              >
                <Image src={vercel} alt="vercel" height={40} />
              </motion.div>
            </a>
            <div className="flex gap-2.5 text-2xl">
              {socials.map(({ icon, link }) => (
                <a
                  key={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={link}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="hover:text-highlight cursor-pointer"
                  >
                    {icon}
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
