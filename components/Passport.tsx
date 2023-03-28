import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Passport = ({ name, position, link, image }) => {
  return (
    <>
      <Link href={link}>
      <div className=" w-40 h-40 bg-transparent group perspective cursor-pointer">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
          <div className="absolute backface-hidden rounded-full w-full h-full bg-[#BFE4FF]">
            <div className="absolute backface-hidden w-full h-full rounded-full border-11 border-[#33719F]">
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
          <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#BFE4FF] border-[#33719F] rounded-full border-11 ">
            <div className="text-center flex flex-col items-center justify-center h-full text-black">
              <div>{name}</div>
              <div>{position}</div>
            </div>
          </div>
        </div>

        <div className="leading-4 text-center text-black">
          <div className="mt-2 font-baloo_bold">{name}</div>
          <div className="mt-1 font-baloo_regular">{position}</div>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Passport;
