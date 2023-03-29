import { TeamGrid } from '@/components/Team';

export default function Staff() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 lg:mb-24 max-w-[70rem] justify-center items-center pb-4">
      <div className="flex justify-between pb-4 items-center">
        {/* <Image
          src={staffLineLeft}
          alt="lineleft"
          className="inline"
          quality={1}
        /> */}
        <div className="inline bg-gradient-to-l from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        <h1 className="text-center text-7xl font-black w-391 h-109 not-italic items-center mt-6 text-text">
          Staff
        </h1>
        {/* <Image
          src={staffLineRight}
          alt="lineright"
          className="inline"
          quality={1}
        /> */}
        <div className="inline bg-gradient-to-r from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
      </div>
      <TeamGrid />
      <div className="pt-10 md:pt-20 flex flex-col justify-center">
        <div className="flex justify-center pb-4 items-center">
          <div className="inline bg-gradient-to-l from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
          <p className="text-opposite text-xl font-baloo_semi_bold text-center px-4 text-text">
            Committee Members
          </p>
          <div className="inline bg-gradient-to-r from-opposite to-transparent w-20 xl:w-96 h-1 items-center rounded-md" />
        </div>
      </div>
    </section>
  );
}
