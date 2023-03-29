import React from 'react';
import Passport from '@/components/Passport';
import Minsoo from '../public/team/minsoo.svg';
import Ashley from '../public/team/ashley.svg';
// import gabs from '../public/team/gabs.png';
import Mariam from '../public/team/mariam.svg';
import Henry from '../public/team/henry.svg';
import Paulian from '../public/team/paulian.svg';
import Kanin from '../public/team/kanin.svg';
import Prathmesh from '../public/team/prathmesh.svg';
import Vivian from '../public/team/vivian.svg';
import Sarah from '../public/team/sarah.svg';
import Alex from '../public/team/alex.svg';
import Jon from '../public/team/jon.svg';

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
    image: '/leads/Jakin.png',
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
    image: '',
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

const Passports = () => {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 lg:mb-24 max-w-[75rem] justify-center items-center pb-10">
      <div className="flex flex-col flex-wrap justify-center gap-8 md:gap-12 md:gap-y-12 mb-12">
        <p className="text-center text-7xl font-black w-391 h-109 not-italic items-center mt-6 text-text">
          Meet The Team
        </p>
        <p className="text-opposite text-lg md:text-2xl font-baloo_semi_bold text-center px-4 text-text font-semibold">
          Leads
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 md:gap-y-12 ">
          {directors.map(({ link, image, name, position }) => (
            <Passport
              key={link}
              link={link}
              image={image}
              name={name}
              position={position}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 md:gap-y-12">
        {staff.map(({ link, image, name, position }) => (
          <Passport
            key={link}
            link={link}
            image={image}
            name={name}
            position={position}
          />
        ))}
      </div>
      <div className="pt-10 md:pt-20 flex flex-col justify-center">
        <div className="flex justify-center pb-4 items-center">
          <div className="inline bg-gradient-to-l from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
          <p className="text-opposite text-lg md:text-2xl font-baloo_semi_bold text-center text-text font-semibold">
            Committee Members
          </p>
          <div className="inline bg-gradient-to-r from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Passports;
