import Image from 'next/image';
import RedBull from '../../public/assets/sponsors/redbull.svg';
import BlackStone from '../../public/assets/sponsors/blackstone.svg';
import UCR from '../../public/assets/sponsors/ucr.svg';
import RoadBG from '../../public/assets/sponsors/roadBG.svg';

// TRYING TO MAKE COLUMNS
// export const DesktopSponsors = () => {
//   return (
//     <div className="relative flex justify-between items-start w-full h-full">
//       <span className="rounded-full border-4 border-[#D94352] p-2 relative"></span>
//       <div className="border-l-4 border-[#D94352] p-4 md:p-6 flex flex-col">
//         {/* <div className="border-l-4 border-[#D94352] p-4 md:p-10 lg:py-20"> */}
//         <p className="text-text font-black text-2xl xs:text-4xl md:text-5xl relative bottom-10 xs:bottom-12 md:bottom-14">
//           {/* <p className="font-black text-4xl md:text-7xl relative bottom-11 :bottom-32"> */}
//           Citrus
//         </p>
//         {/* <p className="font-black text-3xl md:text-7xl relative bottom-16">
//           Citrus
//         </p> */}
//         <div className="flex gap-5 justify-evenly">
//           <div className="w-1/6">
//             <Image src={RedBull} alt="redbull" />
//           </div>
//           <div className="w-1/6">
//             <Image src={RedBull} alt="redbull" />
//           </div>
//           <div className="w-1/6">
//             <Image src={RedBull} alt="redbull" />
//           </div>
//         </div>
//       </div>
//       <span className="rounded-full border-4 border-[#D94352] p-2"></span>
//       <div className="border-l-4 border-[#D94352] p-4 md:p-6 flex flex-col">
//         <p className="text-text font-black text-2xl xs:text-4xl md:text-5xl relative bottom-10 xs:bottom-12 md:bottom-14">
//           Orange
//         </p>
//         <div className="flex gap-1 md:gap-10 justify-evenly">
//           <div className="w-1/5">
//             <Image src={BlackStone} alt="redbull" />
//           </div>
//           <div className="w-1/5">
//             <Image src={BlackStone} alt="redbull" />
//           </div>
//           <div className="w-1/5">
//             <Image src={BlackStone} alt="redbull" />
//           </div>
//         </div>
//       </div>
//       <span className="rounded-full border-4 border-[#D94352] p-2 relative"></span>
//       <div className="border-l-4 border-[#D94352] p-4 md:p-6 flex flex-col">
//         <p className="text-text font-black text-2xl xs:text-4xl md:text-5xl relative bottom-10 xs:bottom-12 md:bottom-14">
//           Tangerine
//         </p>
//         <div className="flex gap-1 md:gap-10 justify-evenly">
//           <div className="w-1/4">
//             <Image src={UCR} alt="redbull" />
//           </div>
//           <div className="w-1/4">
//             <Image src={UCR} alt="redbull" />
//           </div>
//           <div className="w-1/4">
//             <Image src={UCR} alt="redbull" />
//           </div>
//         </div>
//       </div>
//       <span className="mr-1 self-start  bg-gradient-to-b from-[#D94352] pb-10 to-transparent pr-1 flex"></span>
//     </div>
//   );
// };
export const DesktopSponsors = () => {
  return (
    <div className="relative flex justify-start items-start w-full h-full flex-col">
      <span className="rounded-full border-4 border-[#D94352] p-2 relative right-2.5"></span>
      <div className="border-l-4 border-[#D94352] p-4 md:p-6 flex flex-col">
        {/* <div className="border-l-4 border-[#D94352] p-4 md:p-10 lg:py-20"> */}
        <p className="text-text font-black text-2xl xs:text-4xl md:text-5xl relative bottom-10 xs:bottom-12 md:bottom-14">
          {/* <p className="font-black text-4xl md:text-7xl relative bottom-11 :bottom-32"> */}
          Citrus
        </p>
        {/* <p className="font-black text-3xl md:text-7xl relative bottom-16">
          Citrus
        </p> */}
        <div className="flex gap-1 md:gap-10 justify-evenly">
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
        </div>
        <div className="flex gap-1 md:gap-10 justify-evenly">
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
          <div className="w-1/6">
            <Image src={RedBull} alt="redbull" />
          </div>
        </div>
      </div>
      <span className="rounded-full border-4 border-[#D94352] p-2 relative right-2.5"></span>
      <div className="border-l-4 border-[#D94352] p-4 md:p-6 flex flex-col">
        <p className="text-text font-black text-2xl xs:text-4xl md:text-5xl relative bottom-10 xs:bottom-12 md:bottom-14">
          Orange
        </p>
        <div className="flex gap-1 md:gap-10 justify-evenly">
          <div className="w-1/5">
            <Image src={BlackStone} alt="redbull" />
          </div>
          <div className="w-1/5">
            <Image src={BlackStone} alt="redbull" />
          </div>
          <div className="w-1/5">
            <Image src={BlackStone} alt="redbull" />
          </div>
        </div>
      </div>
      <span className="rounded-full border-4 border-[#D94352] p-2 relative right-2.5"></span>
      <div className="border-l-4 border-[#D94352] p-4 md:p-6 flex flex-col">
        <p className="text-text font-black text-2xl xs:text-4xl md:text-5xl relative bottom-10 xs:bottom-12 md:bottom-14">
          Tangerine
        </p>
        <div className="flex gap-1 md:gap-10 justify-evenly">
          <div className="w-1/4">
            <Image src={UCR} alt="redbull" />
          </div>
          <div className="w-1/4">
            <Image src={UCR} alt="redbull" />
          </div>
          <div className="w-1/4">
            <Image src={UCR} alt="redbull" />
          </div>
        </div>
      </div>
      <span className="mr-1 self-start  bg-gradient-to-b from-[#D94352] pb-10 to-transparent pr-1 flex"></span>
    </div>
  );
};

export default function Sponsors() {
  return (
    <section className="relative flex flex-col w-full h-full max-w-[60rem] my-12 lg:my-0 justify-center items-center">
      <p className="text-center text-7xl font-black w-391 h-109 not-italic items-center mt-6 text-text">
        Sponsors
      </p>
      <p className="relativew-1050 h-58 font-weight-400 text-lg md:text-2xl leading-7 text-center pb-5 text-text font-semibold mb-4 md:mb-10">
        Thank you to all of those who made this hackathon possible!
      </p>
      <DesktopSponsors />
      {/* <div className="absolute z-0 object-cover">
        <Image src={RoadBG} alt="road" />
      </div> */}
    </section>
  );
}
