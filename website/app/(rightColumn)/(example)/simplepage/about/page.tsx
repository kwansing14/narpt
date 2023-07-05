import { TransitionDiv } from 'narpt';
import Link from 'next/link';

const AboutSimplePage = () => {
  return (
    <TransitionDiv className='text-sm px-8 mt-12'>
      <Link
        href='https://github.com/kwansing14/narpt/tree/main/website/app/(rightColumn)/(example)/simplepage'
        className='underline mb-4'
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti vel
        aspernatur maiores nisi quasi magni, veniam fuga, temporibus assumenda
        quidem perferendis dolore nihil ipsum ut facilis iusto. Impedit ipsum
        quaerat doloribus repellat laudantium eveniet ea, accusamus natus et
        provident pariatur quas totam praesentium optio sequi in, quidem
        corrupti voluptas? Iusto!
      </p>
    </TransitionDiv>
  );
};

export default AboutSimplePage;
