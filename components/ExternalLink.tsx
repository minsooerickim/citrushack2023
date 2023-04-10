import { useTheme } from 'next-themes';

interface Props {
  /** Linked text. */
  name: string;
  /** Link to external source. */
  link: string;
}

/** Linked text to an external source. */
export default function ExternalLink({ name, link }: Props) {
  const { theme } = useTheme();
  return (
    <a target="_blank" rel="noreferrer noopener" href={link}>
      <span
        className={`font-bold hover:underline cursor-pointer ${
          theme === 'dark' ? `text-gold` : `text-brown`
        }`}
      >
        {name}
      </span>
    </a>
  );
}
