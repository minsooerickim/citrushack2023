import Image from 'next/image';
import { useTheme } from 'next-themes';

import bus_footer from '@/public/assets/bus_footer.svg';
import bus_footer_dark from '@/public/assets/bus_footer_dark.svg';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <>
      <div className="">
        {theme === 'light' ? (
          <Image
            src={bus_footer}
            alt="footer"
            objectFit="contain"
            layout="responsive"
            // className="bg-red-200"
          />
        ) : (
          <Image
            src={bus_footer_dark}
            alt="footer"
            objectFit="contain"
            layout="responsive"
          />
        )}
      </div>
    </>
  );
}
