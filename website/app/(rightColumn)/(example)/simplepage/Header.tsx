import { TransitionLink, TransitionDiv } from 'narpt';

const Header = () => {
  return (
    <TransitionDiv
      animation='fadeUp'
      className='flex justify-between text-sm px-8 py-4 underline'
    >
      <TransitionLink href='/simplepage'>Welcome</TransitionLink>
      <div className='flex gap-4'>
        <TransitionLink className='underline' href='/simplepage/work'>
          Work
        </TransitionLink>
        <TransitionLink className='underline' href='/simplepage/about'>
          About
        </TransitionLink>
      </div>
    </TransitionDiv>
  );
};

export default Header;
