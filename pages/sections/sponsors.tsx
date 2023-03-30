import { SponsorsGrid } from '@/components/SponsorGrid';
import { ButtonLink } from '@/components/ButtonLink';

export default function Sponsors() {
  return (
    <section className="relative z-0 flex flex-col w-full h-full max-w-[60rem] my-12 lg:my-6 justify-center items-center">
      <h1 className="text-center text-5xl md:text-7xl font-black text-text">
        Our Sponsors
      </h1>
      <p className="mb-12 text-center text-lg md:text-2xl font-semibold text-text">
        Thank you to all of those who made this hackathon possible!
      </p>
      <ButtonLink
        primary
        link="/citrushack-2022-sponsorship-packet.pdf"
        label="Sponsor Us"
        external
      />
      <SponsorsGrid />
    </section>
  );
}
