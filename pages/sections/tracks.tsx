import Image from 'next/image';
import NewFrontiers from '../../public/assets/newFrontiers.svg';
import studentCommunity from '../../public/assets/studentCommunity.svg';
import sustainability from '../../public/assets/sustainability.svg';

export default function Tracks() {
  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 max-w-[72rem] justify-center items-center">
      <h1>Tracks</h1>
      <div className="flex flex-col gap-y-4 md:grid md:grid-cols-3 md:gap-20">
        <Image
          className="h-screen"
          src={NewFrontiers}
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="h-screen"
          src={studentCommunity}
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="h-screen"
          src={sustainability}
          alt=""
          width={200}
          height={200}
        />
      </div>
    </section>
  );
}
