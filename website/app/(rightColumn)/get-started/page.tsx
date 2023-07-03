import Code from '@/components/Code';
import { TransitionDiv } from 'narpt';

const getStartedPage = () => {
  return (
    <TransitionDiv className='docs-cmp'>
      <h2>Installation</h2>
      <p>For npm users:</p>
      <Code language='bash'>{'npm i narpt'}</Code>
      <p>For yarn users:</p>
      <Code language='bash'>{'yarn add narpt'}</Code>
      <p>For pnpm users:</p>
      <Code language='bash'>{'pnpm i narpt'}</Code>
      <div className='divider' />
      <h2>QuickStart</h2>
      <ul>
        <li>
          create a new nextjs app with pnpm create next-app, select yes for App
          Router.
        </li>
        <li>
          run <code>pnpm i narpt.</code>
        </li>
        <li>
          replace <code>app/layout.js</code> with the following code.
        </li>
        <Code language='javascript'>
          {`import { Inter } from 'next/font/google';
import { TransitionLayout } from 'narpt';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionLayout>{children}</TransitionLayout>
      </body>
    </html>
  );
}`}
        </Code>
        <li>
          replace <code>app/page.js</code> with the following code.
        </li>
        <Code language='javascript'>
          {`import { TransitionLink, TransitionDiv } from 'narpt';

export default function Home() {
  return (
    <main>
      <TransitionDiv>
        <TransitionLink href='/about'>Go To About</TransitionLink>
        <div>Home Page</div>
      </TransitionDiv>
    </main>
  );
}
`}
        </Code>
        <li>
          create a new page <code>app/about/page.js</code> and insert the
          following code.
        </li>
        <Code language='javascript'>
          {`import { TransitionDiv, TransitionLink } from 'narpt';

const AboutPage = () => {
  return (
    <TransitionDiv>
      <TransitionLink href='/'>Back</TransitionLink>
      <div>About Page</div>
    </TransitionDiv>
  );
};

export default AboutPage;`}
        </Code>
      </ul>
      <div className='divider' />
    </TransitionDiv>
  );
};

export default getStartedPage;
