import Ping from '@/components/Ping';
import { TransitionLink } from 'narpt';
// import { headers } from 'next/headers';

const Header = () => {
  // const headersList = headers();
  // const pathname = headersList.get('x-invoke-path');
  return (
    <div className='flex justify-between text-sm px-8 py-4 absolute top-0 left-0 w-full '>
      <div>Welcome</div>
      <div className='flex gap-4'>
        <TransitionLink
          className='underline relative'
          href='/customtransition/work'
        >
          Work
          <Ping />
        </TransitionLink>
        <TransitionLink
          className='underline relative'
          href='/customtransition/about'
        >
          About
          <Ping />
        </TransitionLink>
      </div>
    </div>
  );
};

export default Header;
