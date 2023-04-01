import React from 'react';
import Image from 'next/image';

const ProfileWrapper = ({ name, position, link, image }) => {
  return (
    <>
      <div className="w-40 h-40 bg-transparent group perspective cursor-pointer">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-700">
          <div
            className={`absolute backface-hidden rounded-full w-full h-full bg-[#BFE4FF]`}
          >
            <div
              className={`absolute backface-hidden w-full h-full rounded-full border-[#33719F]`}
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
            className={`absolute my-rotate-y-180 backface-hidden w-full h-full bg-[#BFE4FF] border-[#33719F]
          
             rounded-full border-4 p-4`}
          >
            <div className="flex flex-col items-center justify-center h-full text-black">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={link}
                className="block max-sm:hidden"
              >
                <div className={`text-center font-black`}>{name}</div>
                <div className={`text-black text-center text-sm`}>
                  {position}
                </div>
              </a>
              <div className="block sm:hidden">
                <div className={`text-center font-black`}>{name}</div>
                <div className={`text-black text-center text-sm`}>
                  {position}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileWrapper;
