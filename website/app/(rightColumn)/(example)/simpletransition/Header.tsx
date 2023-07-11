import { TransitionLink, TransitionDiv } from 'narpt';
import Ping from '@/components/Ping';

const Header = () => {
  return (
    <TransitionDiv
      animation='fadeUp'
      className='flex justify-between text-sm px-8 py-4 underline'
    >
      <TransitionLink className='relative' href='/simpletransition'>
        Welcome
        <Ping />
      </TransitionLink>
      <div className='flex gap-4'>
        <TransitionLink
          className='relative underline'
          href='/simpletransition/work'
        >
          Work
          <Ping />
        </TransitionLink>
        <TransitionLink
          className=' relative underline'
          href='/simpletransition/about'
        >
          About
          <Ping />
        </TransitionLink>
      </div>
    </TransitionDiv>
  );
};

export default Header;
