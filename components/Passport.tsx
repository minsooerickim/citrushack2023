import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { useTheme } from 'next-themes';

const Passport = ({ name, position, link, image }) => {
  const { theme } = useTheme();

  return (
    <>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <div className="w-40 h-40 bg-transparent group perspective cursor-pointer">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
            <div
              className={`absolute backface-hidden rounded-full w-full h-full ${
                theme === 'dark' ? `bg-[#33719F]` : `bg-[#BFE4FF]`
              }`}
            >
              <div
                className={`absolute backface-hidden w-full h-full rounded-full border-8 ${
                  theme === 'dark' ? `border-[#BFE4FF]` : `border-[#33719F]`
                }`}
              >
                <div className="text-center flex flex-col items-center justify-center h-full text-white">
                  <Image
                    src={image}
                    width={170}
                    height={170}
                    objectFit="contain"
                    priority={true}
                    quality={100}
                    className="rounded-full"
                    alt="profile photo"
                  />
                </div>
              </div>
            </div>
            <div
              className={`absolute my-rotate-y-180 backface-hidden w-full h-full
            ${
              theme === 'dark'
                ? `bg-[#33719F] border-[#BFE4FF]`
                : `bg-[#BFE4FF] border-[#33719F]`
            } 
          
             rounded-full border-8 p-4`}
            >
              <div className="flex flex-col items-center justify-center h-full text-black">
                <div
                  className={`${
                    theme === 'dark' ? `text-white` : `text-black`
                  } text-center font-black`}
                >
                  {name}
                </div>
                <div
                  className={`${
                    theme === 'dark' ? `text-white` : `text-black`
                  } text-center text-sm`}
                >
                  {position}
                </div>
                {/* <div className="text-center text-sm">{position}</div> */}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Passport;
