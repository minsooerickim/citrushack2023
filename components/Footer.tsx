import Image from 'next/image';
import bus_footer from '../public/assets/bus_footer.svg';

export default function Footer() {
  return (
    <Image
      src={bus_footer}
      alt="footer"
      layout="responsive"
      objectFit="contain"
    />
  );
}
