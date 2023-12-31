import { TransitionDiv } from 'narpt';
import Code from '@/components/Code';

export const metadata = {
  title: 'NARPT - <TransitionLayout>',
  description: 'Nextjs App Router Page Transition',
};

const TransitionLayout = () => {
  return (
    <TransitionDiv className='docs-cmp'>
      <h2>{'<TransitionLayout>'}</h2>
      <p>
        <code>{'<TransitionLayout>'}</code> serves as a provider for a context.
      </p>
      <div className='divider' />
      <h2>Usage</h2>
      <ul>
        <li>
          In <code>{'app/layout.jsx'}</code> ,wrapped the{' '}
          <code>{'{children}'}</code> with <code>{'<TransitionLayout>'}</code>.
        </li>
        <Code language='javascript'>{`import { TransitionLayout } from 'narpt';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <TransitionLayout>{children}</TransitionLayout>
      </body>
    </html>
  );
}`}</Code>
      </ul>
      <div className='divider' />
    </TransitionDiv>
  );
};

export default TransitionLayout;
