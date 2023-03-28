import React from 'react'
import Passport from '@/components/Passport'

const directors = [
  {
    link: 'https://www.linkedin.com/in/henry-zheng00/',
    image: '/leads/Henry.png',
    name: 'Henry Zheng',
    position: 'Director',
  },
  {
    link: 'https://www.linkedin.com/in/mariam-golwalla-74930949/',
    image: '/leads/Mariam.png',
    name: 'Mariam Golwalla',
    position: 'Director',
  },
]
const staff = [
  {
    link: 'https://www.linkedin.com/in/minsookime/',
    image: '/leads/minsookim.png',
    name: 'Minsoo Kim',
    position: 'Lead Software Engineer',
  },
  {
    link: 'https://www.linkedin.com/in/nathan-melwani/',
    image: '/leads/Nate.png',
    name: 'Nate Melwani',
    position: 'Web Dev Lead',
  },
  {
    link: 'https://www.linkedin.com/in/ashley-h-pham',
    image: '/leads/Ash.png',
    name: 'Ashley Pham',
    position: 'Operations Lead',
  },
  {
    link: 'https://www.linkedin.com/in/kanin-liang/',
    image: '/leads/Kanin.png',
    name: 'Kanin Liang',
    position: 'Operations Lead',
  },
  {
    link: 'https://www.linkedin.com/in/prathmeshjain/',
    image: '/leads/Prathmesh.png',
    name: 'Prathmesh Jain',
    position: 'Operations Lead',
  },
  {
    link: 'https://www.linkedin.com/in/jakin200/',
    image: '/leads/Jakin.png',
    name: 'Jakin Chan',
    position: 'Operations Lead',
  },
  {
    link: 'https://www.linkedin.com/in/viviane-fernando-60282018b/',
    image: '/leads/Viviane_.png',
    name: 'Viviane Fernando',
    position: 'Marketing Lead',
  },
  {
    link: 'https://www.linkedin.com/in/sarahkim9/',
    image: '/leads/Sarah.png',
    name: 'Sarah Kim',
    position: 'Marketing Lead',
  },
  {
    link: 'https://www.linkedin.com/in/gabriela-h-alvarez/',
    image: '/leads/Gabs.png',
    name: 'Gabriela Alvarez',
    position: 'Sponsorships Lead',
  },
  {
    link: 'https://www.linkedin.com/in/alex-c-hsieh/',
    image: '/leads/Alex_.png',
    name: 'Alex Hsieh',
    position: 'Sponsorships Lead',
  },
  {
    link: 'https://www.linkedin.com/in/jonathanchon/',
    image: '/leads/Jon.png',
    name: 'Jonathan Chon',
    position: 'UI/UX Lead',
  },
]



const Passports = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center md:gap-5 md:gap-y-12 mb-14">
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
    <div className="flex flex-wrap justify-center md:gap-5 md:gap-y-14">
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
  </>
  )
}

export default Passports
