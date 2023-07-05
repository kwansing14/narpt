import Code from '@/components/Code';
import { TransitionDiv } from 'narpt';

export const metadata = {
  title: 'NARPT - <TransitionDiv>',
  description: 'Nextjs App Router Page Transition',
};

const TransitionDivDocs = () => {
  return (
    <TransitionDiv className='docs-cmp'>
      <h2>{'<TransitionDiv>'}</h2>
      <p>
        Wrap any content with <code>{'<TransitionDiv>'}</code> to add page entry
        and exit animation to the content.
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
        <li>
          Replace <code>{'<div>'}</code> with <code>{'<TransitionDiv>'}</code>
        </li>
        <Code language='javascript'>{`import { TransitionDiv } from 'narpt';
        
const HomePage = () => {
  return (
    <TransitionDiv>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis esse
      cum necessitatibus? Tenetur animi aliquam rem enim incidunt explicabo.
    </TransitionDiv>
  )
}

export default HomePage;`}</Code>
      </ul>
      <div className='divider' />
      <h2>Props</h2>
      <ul>
        <li>
          <code>animation</code>
          <ul>
            <li>fadeUp</li>
            <li>fadeDown</li>
            <li>fadeLeft</li>
            <li>fadeRight</li>
          </ul>
        </li>
        <Code language='javascript'>{`import { TransitionDiv } from 'narpt';
        
const HomePage = () => {
  return (
    <TransitionDiv animation="fadeUp">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis esse
      cum necessitatibus? Tenetur animi aliquam rem enim incidunt explicabo.
    </TransitionDiv>
  )
}

export default HomePage;`}</Code>
      </ul>
      <div className='divider' />
    </TransitionDiv>
  );
};

export default TransitionDivDocs;
