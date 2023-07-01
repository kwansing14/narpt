import { TransitionDiv } from 'nadpt';
import Code from '@/components/Code';

const TransitionLayout = () => {
  return (
    <TransitionDiv className='docs-cmp'>
      <h2>{'<TransitionLayout>'}</h2>
      <p>
        <code>{'<TransitionLink>'}</code> can be used to replace any{' '}
        <code>{'<Link>'}</code> to trigger the transition animation.
      </p>
      <div className='divider' />
      <h2>Usage</h2>
      <ul>
        <li>Find a content to animated.</li>
        <Code language='javascript'>{`const HomePage = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis esse
      cum necessitatibus? Tenetur animi aliquam rem enim incidunt explicabo.
    </div>
  )
}

export default HomePage;
        `}</Code>
      </ul>
    </TransitionDiv>
  );
};

export default TransitionLayout;
