import TransitionLink from './TransitionLink';
import TransitionDiv from './TransitionDiv';

const Header = () => {
  return (
    <TransitionDiv
      className='h-20 flex justify-between items-center px-24'
      animation='fadeUp'
    >
      <div>
        <div className='text-2xl font-bold'>Title</div>
      </div>
      <div className='flex gap-10'>
        <TransitionLink href='/page/1'>Link 1</TransitionLink>
        <TransitionLink href='/page/2'>Link 2</TransitionLink>
        <TransitionLink href='/page/3'>Link 3</TransitionLink>
      </div>
    </TransitionDiv>
  );
};
export default Header;
