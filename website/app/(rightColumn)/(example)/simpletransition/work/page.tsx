import { TransitionDiv } from 'narpt';
import Link from 'next/link';
const WorkSimpleTransition = () => {
  return (
    <TransitionDiv className='text-sm px-8 mt-12'>
      <h1 className='mb-4 text-2xl font-bold tracking-tight'>Work</h1>
      <Link
        href='https://github.com/kwansing14/narpt/tree/main/website/app/(rightColumn)/(example)/simpletransition'
        className='underline mb-4'
      >
        Source code for this page
      </Link>
      <br />
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        aliquam nemo suscipit fugit, quod nisi sunt facere culpa, labore
        adipisci assumenda impedit consequuntur iure beatae voluptates explicabo
        eius provident quae ipsa tempore, ad distinctio! Rem minima illum hic
        dolor vero accusamus odio dolore autem! Excepturi officia consequuntur
        voluptates facilis, veritatis sunt eos in animi, natus itaque pariatur
        velit quia ipsum!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque
        repellendus eius, eveniet quidem eligendi voluptatibus blanditiis
        consequuntur nostrum doloribus.
      </p>
    </TransitionDiv>
  );
};

export default WorkSimpleTransition;
