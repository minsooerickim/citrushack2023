import ExternalLink from '@/components/ExternalLink';
import { Page } from '@/components/Page';

export default function Home() {
  return (
    <Page>
      <div className='flex flex-col text-center'>
        <h1>Citrus Hack 2023 Coming Soon!</h1>
        <p>
          Feel free to email us at{' '}
          <ExternalLink
            name="citrushack@gmail.com"
            link="mailto:citrushack@gmail.com"
          />{' '}
          if you have any more questions.
        </p>
      </div>
    </Page>
  );
}
