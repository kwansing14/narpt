import Code from '@/components/Code';
import { TransitionDiv, TransitionLink } from 'narpt';

export const metadata = {
  title: 'NARPT - useTransition()',
  description: 'Nextjs App Router Page Transition',
};

const UseTransition = () => {
  return (
    <TransitionDiv className='docs-cmp'>
      <h2>{'useTransition()'}</h2>
      <p>
        The <code>{'useTransition()'}</code> hook provides you a headless system
        that will manage the transition state for you. This makes building your
        own transition easier.
      </p>
      <br />
      <p>
        Alternatively, you checkout the example page built with{' '}
        <code>useTransition()</code> at{' '}
        <TransitionLink href='/customtransition/work' className='underline'>
          examples/Custom transition
        </TransitionLink>
      </p>
      <div className='divider' />
      <h2>Usage</h2>
      <p>
        1. Wrapping content with <code>{'<TransitionLayout>'}</code> in{' '}
        <code>app/layout.tsx</code> is required when using the useTransition
        hooks.{' '}
        <TransitionLink href='/transitionlayout' className='underline'>
          {'Reference: <TransitionLayout>.'}
        </TransitionLink>
      </p>
      <br />
      <p>
        2. Replace <code>{'<Link>'}</code> with{' '}
        <code>{'<TransitionLink>'}</code> is also required when using the
        useTransition hooks.{' '}
        <TransitionLink href='/transitionlink' className='underline'>
          {'Reference: <TransitionLink>.'}
        </TransitionLink>
      </p>
      <br />
      <p>3. Import from library</p>
      <Code language='javascript'>{`import { useTransition } from 'narpt';`}</Code>
      <p>4. Calling useTransition hooks</p>
      <Code language='javascript'>{`const { isTransitioning } = useTransition({});`}</Code>
      <div className='divider' />
      <h2>Animate using inline style</h2>
      <Code language='javascript'>{`'use client';
import { useTransition } from 'narpt';

const TestLinkPage = () => {
  const { isTransitioning } = useTransition({});
  return (
    <div
      style={{
        transitionProperty: 'all',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isTransitioning ? 1 : 0,
        translate: isTransitioning ? '0 0' : '0 20px',
      }}
    >
      lorem ipsum..
    </div>
  );
};

export default TestLinkPage;
`}</Code>
      <div className='divider' />
      <h2>Animate using tailwindcss</h2>
      <Code language='javascript'>{`'use client';
import { useTransition } from 'narpt';
import { twMerge } from 'tailwind-merge';

const TestLinkPage = () => {
  const { isTransitioning } = useTransition({});
  return (
    <div
      className={twMerge(
        'transition-all transition-duration-300',
        isTransitioning ? 'opacity-100' : 'opacity-0',
        isTransitioning ? 'translate-y-0' : 'translate-y-5'
      )}
    >
      lorem ipsum..
    </div>
  );
};

export default TestLinkPage;
`}</Code>
      <div className='divider' />
      <h2>Customising transition duration</h2>
      <p>
        Default transition duration is set to 300ms. Transition duration can be
        customised by adding a delay key to the useTransition hook.{' '}
      </p>
      <Code language='javascript'>{`const { isTransitioning } = useTransition({ delay: 800 }); // this will change delay from 300ms to 800ms`}</Code>
      <div className='divider' />
    </TransitionDiv>
  );
};

export default UseTransition;
