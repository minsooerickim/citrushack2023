import React from 'react';
import Passport from '@/components/Passport';
import Minsoo from '../public/team/minsoo.png';
import Ashley from '../public/team/ashley.png';
// import Gab from '../public/team/gabs.png';
import Mariam from '../public/team/mariam.png';
import Henry from '../public/team/henry.png';
import Paulian from '../public/team/paulian.png';
import Kanin from '../public/team/kanin.png';
import Prathmesh from '../public/team/prathmesh.png';
import Vivian from '../public/team/vivian.png';
import Sarah from '../public/team/sarah.png';
import Alex from '../public/team/alex.png';
import Jon from '../public/team/jon.png';

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
      <div className="flex flex-col flex-wrap justify-center gap-8 md:gap-12 md:gap-y-6 mb-12">
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
        <div className="flex flex-col justify-center pb-4 items-center">
          <p className="text-opposite text-lg md:text-2xl font-baloo_semi_bold text-center text-text font-semibold">
            Committee Members
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 text-center text-sub font-baloo_regular justify-center gap-y-4 items-center">
            <div>
              <p className="text-opposite font-baloo_semi_bold">
                Software Engineers
              </p>
              <p>Valerie Wong</p>
              <p>Theo Fernandez</p>
              <p>Andrei Dimaano</p>
              <p>Raidah Fairooz</p>
              <p>Nicholas Chao</p>
            </div>
            <div>
              <p className="text-opposite font-baloo_semi_bold">Operations</p>
              <p>Westin Montano</p>
              <p>Adhithi Narayana Murthy</p>
              <p>Eliot Lee</p>
              <p>Ronit Bhushan</p>
            </div>
            {/* <div>
              <p className="text-opposite font-baloo_semi_bold">UI/UX</p>
              <p>Chloe Xu</p>
              <p>Elaine Lin</p>
              <p>Kia Nooshi</p>
              <p>Rania Saber</p>
              <p>Siraaj Kudtarkar</p>
            </div> */}
            <div>
              <p className="text-opposite font-baloo_semi_bold">Sponsorship</p>
              <p>Ryan Wong</p>
              <p>Nolan Chu</p>
              <p>Jasmita Yechuri</p>
              <p>Freddy Song</p>
              <p>Iliyan Alibhai</p>
              <p>Ethan Tran</p>
              <p>Eliot Lee</p>
              <p>Skyler Saltos</p>
            </div>
            <div>
              {/* <div> */}
              {/* <p className="text-opposite font-baloo_semi_bold">Marketing</p>
                <p>Natalie Jung</p>
                <p>Elaine Lin</p>
              </div>
              <div className="pt-4 hidden md:block">
                <p className="text-opposite font-baloo_semi_bold">
                  Quality Assurance
                </p>
                <p>Paulian Le</p>
              </div> */}
              <div className="pt-4 hidden md:block">
                <p className="text-opposite font-baloo_semi_bold">
                  Photographer
                </p>
                <p>Kobe Braga</p>
              </div>
            </div>
            <div className="col-span-2 md:hidden">
              <p className="text-opposite font-baloo_semi_bold">Photographer</p>
              <p>Kobe Braga</p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Passports;
