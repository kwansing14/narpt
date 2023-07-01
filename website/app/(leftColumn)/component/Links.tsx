import Link from 'next/link';

const Links = () => {
  return (
    <div className='flex flex-col gap-2 links-cmp'>
      <h2>Overview</h2>
      <Link href='/get-started'>Get started</Link>
      <h2>API</h2>
      <Link href='/transitionlayout'>{'<TransitionLayout>'}</Link>
      <Link href='/transitionlink'>{'<TransitionLink>'}</Link>
      <Link href='/transitiondiv'>{'<TransitionDiv>'}</Link>
      <h2>Examples</h2>
    </div>
  );
};

export default Links;
