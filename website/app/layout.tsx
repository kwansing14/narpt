import './globals.css';

import { Inter } from 'next/font/google';
import { TransitionLayout, TransitionLink } from 'nadpt';
import Links from '@/(leftColumn)/component/Links';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NADPT',
  description: 'Nextjs App Directory Page Transition',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        style={{
          backgroundAttachment: 'fixed',
          background:
            'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 51.55%), linear-gradient(260.31deg, rgba(233, 202, 150, 0.25) 0%, rgba(210, 99, 220, 0.25) 172.37%)',
        }}
      >
        <TransitionLayout>
          <main className='flex min-h-screen flex-col items-center border pb-24'>
            <TransitionLink
              href='/get-started'
              className='font-extrabold tracking-tight text-2xl sm:text-3xl mt-12 text-center px-4 sm:px-8'
            >
              Nextjs App Directory Page Transition
            </TransitionLink>
            <div className='max-w-5xl w-full flex mt-12 flex-col sm:flex-row'>
              <div className='w-full sm:w-3/12 px-4 sm:px-8'>
                <Links />
                <div className='border border-slate-300 border-t-0 my-8' />
              </div>
              <div className='w-full sm:w-9/12 px-4 sm:px-8'>{children}</div>{' '}
            </div>
          </main>
        </TransitionLayout>
      </body>
    </html>
  );
}
