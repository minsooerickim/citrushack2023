import { CountdownWrapper } from '@/components/Countdown';
import ExternalLink from '@/components/ExternalLink';
import { Page } from '@/components/Page';
import Image from 'next/image';
import logo from '../public/assets/logo.svg';

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col text-center h-screen justify-center items-center">
        <span className="pr-6">
          <Image src={logo} width={100} height={100} alt="" />
        </span>

        <div className="py-4">
          <h1 className="pb-2">Citrus Hack 2023 Registration Countdown</h1>
          <CountdownWrapper date="2023-04-03T01:00:00" />
        </div>

        <p className=" text-black/[.5]">
          Feel free to email us at{' '}
          <ExternalLink
            name="citrushack@gmail.com"
            link="mailto:citrushack@gmail.com"
          />{' '}
          if you have any questions.
        </p>
      </div>
    </Page>
  );
}
