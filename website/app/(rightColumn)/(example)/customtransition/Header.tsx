import { TransitionLink } from 'narpt';

const Header = () => {
  return (
    <div className='flex justify-between text-sm px-8 py-4 absolute top-0 left-0 w-full '>
      <div>Welcome</div>
      <div className='flex gap-4'>
        <TransitionLink className='underline' href='/customtransition/work'>
          Work
        </TransitionLink>
        <TransitionLink className='underline' href='/customtransition/about'>
          About
        </TransitionLink>
      </div>
    </div>
  );
};

export default Header;
