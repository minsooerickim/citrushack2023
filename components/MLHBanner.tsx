/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';

export function MLHBanner() {
  // const router = useRouter();
  // const { data: session, status } = useSession();

  return (
    <a
      id="mlh-trust-badge"
      className={'block w-full max-w-[60px] md:max-w-[100px] z-[500]'}
      href="https://mlh.io/seasons/2023/events"
      target="_blank"
    >
      <img
        src="https://citrushack2023.s3.us-west-1.amazonaws.com/mlh-trust-badge-2023-white.svg"
        alt="Major League Hacking 2022 Hackathon Season"
        className="w-full"
        draggable={false}
      />
    </a>
  );
}
