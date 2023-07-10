'use client';

import { useTransition } from 'narpt';
import Link from 'next/link';
import GreySlides from '@/(rightColumn)/(example)/customtransition/GreySlides';

const WorkSimplePage = () => {
  const { isTransitioning } = useTransition({ delay: 800 });

  return (
    <div className='text-sm px-8 mt-12'>
      <GreySlides isTransitioning={isTransitioning} />
      <h1 className='pt-4 text-2xl font-bold tracking-tight'>Work</h1>
      <div className='pt-4'>
        <Link
          href='https://github.com/kwansing14/narpt/tree/main/website/app/(rightColumn)/(example)/customtransition'
          className='underline mb-4'
        >
          Source code for this page
        </Link>
      </div>
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
    </div>
  );
};

export default WorkSimplePage;
