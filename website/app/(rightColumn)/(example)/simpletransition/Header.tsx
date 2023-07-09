import { TransitionLink, TransitionDiv } from 'narpt';

const Header = () => {
  return (
    <TransitionDiv
      animation='fadeUp'
      className='flex justify-between text-sm px-8 py-4 underline'
    >
      <TransitionLink href='/simpletransition'>Welcome</TransitionLink>
      <div className='flex gap-4'>
        <TransitionLink className='underline' href='/simpletransition/work'>
          Work
        </TransitionLink>
        <TransitionLink className='underline' href='/simpletransition/about'>
          About
        </TransitionLink>
      </div>
    </TransitionDiv>
  );
};

export default Header;
