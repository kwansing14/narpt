import { TransitionDiv } from 'narpt';
import Link from 'next/link';

const SimplePage = () => {
  return (
    <TransitionDiv className='text-sm px-8 mt-12'>
      <Link
        href='https://github.com/kwansing14/narpt/tree/main/website/app/(rightColumn)/(example)/simpletransition'
        className='underline'
      >
        Source code for this page
      </Link>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        enim nam. Possimus obcaecati vel temporibus voluptatibus praesentium
        molestias incidunt excepturi.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat fugit
        quidem vel fugiat perspiciatis qui eveniet excepturi adipisci natus
        aliquam.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iusto
        ducimus dolore sapiente error ab accusantium aut nulla voluptatem nobis.
      </p>
    </TransitionDiv>
  );
};

export default SimplePage;
