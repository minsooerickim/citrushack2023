import React from 'react';
import ProfileWrapper from '@/components/ProfileWrapper';
import Minsoo from '@/public/team/minsoo.png';
import Ashley from '@/public/team/ashley.png';
import Gab from '@/public/team/gab.png';
import Jakin from '@/public/team/jakin.jpg';
import Mariam from '@/public/team/mariam.png';
import Henry from '@/public/team/henry.png';
import Paulian from '@/public/team/paulian.png';
import Kanin from '@/public/team/kanin.png';
import Prathmesh from '@/public/team/prathmesh.png';
import Vivian from '@/public/team/vivian.png';
import Sarah from '@/public/team/sarah.png';
import Alex from '@/public/team/alex.png';
import Jon from '@/public/team/jon.png';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import teamWaveDark from '@/public/assets/waves/teamWaveDark.svg';
import teamWaveLight from '@/public/assets/waves/teamWave.svg';

const directors = [
  {
    link: 'https://www.linkedin.com/in/henry-zheng00/',
    image: Henry,
    name: 'Henry Zheng',
    position: 'Director'
  },
  {
    link: 'https://www.linkedin.com/in/mariam-golwalla-74930949/',
    image: Mariam,
    name: 'Mariam Golwalla',
    position: 'Director'
  }
];
const staff = [
  {
    link: 'https://www.linkedin.com/in/minsookime/',
    image: Minsoo,
    name: 'Minsoo Kim',
    position: 'Software Engineer'
  },
  {
    link: 'https://www.linkedin.com/in/nathan-melwani/',
    image: Paulian,
    name: 'Paulian Le',
    position: 'Software Engineer'
  },
  {
    link: 'https://www.linkedin.com/in/ashley-h-pham',
    image: Ashley,
    name: 'Ashley Pham',
    position: 'Operations'
  },
  {
    link: 'https://www.linkedin.com/in/kanin-liang/',
    image: Kanin,
    name: 'Kanin Liang',
    position: 'Operations'
  },
  {
    link: 'https://www.linkedin.com/in/prathmeshjain/',
    image: Prathmesh,
    name: 'Prathmesh Jain',
    position: 'Operations'
  },
  {
    link: 'https://www.linkedin.com/in/jakin200/',
    image: Jakin,
    name: 'Jakin Chan',
    position: 'Operations'
  },
  {
    link: 'https://www.linkedin.com/in/viviane-fernando-60282018b/',
    image: Vivian,
    name: 'Viviane Fernando',
    position: 'Marketing'
  },
  {
    link: 'https://www.linkedin.com/in/sarahkim9/',
    image: Sarah,
    name: 'Sarah Kim',
    position: 'Marketing'
  },
  {
    link: 'https://www.linkedin.com/in/gabriela-h-alvarez/',
    image: Gab,
    name: 'Gabriela Alvarez',
    position: 'Sponsorship'
  },
  {
    link: 'https://www.linkedin.com/in/alex-c-hsieh/',
    image: Alex,
    name: 'Alex Hsieh',
    position: 'Sponsorship'
  },
  {
    link: 'https://www.linkedin.com/in/jonathanchon/',
    image: Jon,
    name: 'Jonathan Chon',
    position: 'UI/UX'
  }
];

const swe_committee = [
  'Mika Shanela',
  'Thomas Li',
  'Bobby Lerias',
  'Andre Amante',
  'Raidah Fairooz',
  'Kirtana Venkat'
];

const sponsorship_committee = [
  'Jasmita Yechuri',
  'Javier Herrera Jr.',
  'Freddy Song',
  'Joseph Hoang',
  'Javier Vargas',
  'Brian Uong',
  'Adreyan Distor',
  'Minnoli Nori',
  'Isabelle Celo',
  'Felix Maass',
  'Suhani Chaudhary'
];

const operations_committee = ['Ronit Bhushan', 'Sneha Panda', 'Ethan Quach'];
const team = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useTheme();

  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 lg:mb-24 max-w-[75rem] pb-10">
      {/* <div className="bg-black"> */}
      {/* <div className="absolute w-screen h-screen z-0 right-0">
        <Image
          src={teamWaveLight}
          alt="Wave Light"
          layout="responsive"
          objectFit="contain"
          className=""
        />
      </div> */}
      {/* </div> */}
      {/* leads */}
      <div className="relative z-10 flex flex-col flex-wrap justify-center gap-8 md:gap-12 md:gap-y-6 mb-12">
        <p className="text-center text-7xl font-black w-391 h-109 not-italic items-center mt-6 text-text">
          Meet The Team
        </p>
        <p className="text-opposite text-lg md:text-2xl font-baloo_semi_bold text-center px-4 text-text font-semibold">
          Leads
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 md:gap-y-12 ">
          {directors.map(({ link, image, name, position }) => (
            <ProfileWrapper
              key={link}
              link={link}
              image={image}
              name={name}
              position={position}
            />
          ))}
        </div>
      </div>
      <div className="relative z-20 flex flex-wrap justify-center gap-6 md:gap-10 md:gap-y-12">
        {staff.map(({ link, image, name, position }) => (
          <ProfileWrapper
            key={link}
            link={link}
            image={image}
            name={name}
            position={position}
          />
        ))}
      </div>

      <div className="absolute w-screen h-screen -z-0 right-0">
        {theme === 'light' ? (
          <Image
            src={teamWaveLight}
            alt="Wave Light"
            layout="responsive"
            objectFit="contain"
          />
        ) : (
          <Image
            src={teamWaveDark}
            alt="Wave Dark"
            layout="responsive"
            objectFit="contain"
          />
        )}
      </div>
      {/* commitee members */}
      <div className="relative z-8  pt-10 md:pt-20 flex flex-col">
        <div className="flex flex-col pb-4">
          <p className="text-lg md:text-2xl font-baloo_semi_bold text-center font-semibold pb-4 text-text">
            Committee Members
          </p>
          <div className="flex flex-row justify-center space-x-12">
            <div>
              <div className="flex justify-center pb-2 text-text">
                ⚙️ SWE ⚙️
              </div>
              <div>
                {swe_committee.map((member, index) => (
                  <p key={index} className="text-lightPurple">
                    {member}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-center pb-2 text-text">
                💰 Sponsorship 💰
              </div>
              {sponsorship_committee.map((member, index) => (
                <p key={index} className="text-lightPurple">
                  {member}
                </p>
              ))}
            </div>
            <div>
              <div className="flex justify-center pb-2 text-text">
                ✏️ Operations ✏️
              </div>
              {operations_committee.map((member, index) => (
                <p key={index} className="text-lightPurple">
                  {member}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default team;
