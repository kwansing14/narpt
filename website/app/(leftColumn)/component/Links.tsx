import Link from 'next/link';

const Links = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='heading-2'>Overview</div>
      <Link className='heading-3' href='/get-started'>
        Get started
      </Link>
      <div className='heading-2'>API</div>
      <Link className='heading-3' href='/transitionlayout'>
        {'<TransitionLayout>'}
      </Link>
      <Link className='heading-3' href='/transitionlink'>
        {'<TransitionLink>'}
      </Link>
      <Link className='heading-3' href='/transitiondiv'>
        {'<TransitionDiv>'}
      </Link>
      <div className='heading-2'>Examples</div>
    </div>
  );
};

export default Links;
