import Link from 'next/link';

const Links = () => {
  return (
    <>
      <div>Overview</div>
      <Link href='/get-started'>Get started</Link>
      <div>API</div>
      <div>{'<TransitionLayout>'}</div>
      <div>{'<TransitionLink>'}</div>
      <div>{'<TransitionDiv>'}</div>
      <div></div>
      <div className='uppercase'>Examples</div>
    </>
  );
};

export default Links;
