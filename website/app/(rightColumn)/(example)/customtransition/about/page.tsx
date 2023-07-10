'use client';

import { useTransition } from 'narpt';
import Link from 'next/link';
import GreySlides from '@/(rightColumn)/(example)/customtransition/GreySlides';

const AboutCustomTransition = () => {
  const { isTransitioning } = useTransition({ delay: 800 });

  return (
    <div className='text-sm px-8 mt-12'>
      <GreySlides isTransitioning={isTransitioning} />
      <h1 className='pt-4 text-2xl font-bold tracking-tight'>About</h1>
      <div className='pt-4'>
        <Link
          href='https://github.com/kwansing14/narpt/tree/main/website/app/(rightColumn)/(example)/customtransition'
          className='underline mb-4'
        >
          Source code for this page
        </Link>
      </div>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        enim nam. Possimus obcaecati vel temporibus voluptatibus praesentium
        molestias incidunt excepturi.
      </p>
      <br />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti vel
        aspernatur maiores nisi quasi magni, veniam fuga, temporibus assumenda
        quidem perferendis dolore nihil ipsum ut facilis iusto. Impedit ipsum
        quaerat doloribus repellat laudantium eveniet ea, accusamus natus et
        provident pariatur quas totam praesentium optio sequi in, quidem
        corrupti voluptas? Iusto!
      </p>
    </div>
  );
};

export default AboutCustomTransition;
