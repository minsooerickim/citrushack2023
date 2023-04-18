import { useSession } from 'next-auth/react';
import { ButtonLink } from '@/components/ButtonLink';

export default function Resources() {
  const { data: session, status } = useSession();

  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 mb-24 max-w-[60rem] justify-center items-center z-[1000]">
      <h1 className="text-5xl md:text-7xl font-black mb-4 md:mb-8 text-text">
        Resources
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <ButtonLink
          primary
          link="https://citrus-hack-2022.devpost.com/"
          label="Devpost"
          external
        />
        <ButtonLink
          primary
          link="https://github.com/citrushack/CitrusHackResources/blob/main/README.md"
          label="GitHub"
          external
        />
        {status === 'authenticated' &&
          session.user.uid &&
          session.user.qualified === 'yeah' && (
            <ButtonLink label="Discord" link={process.env.discord} external />
          )}
      </div>
    </section>
  );
}
