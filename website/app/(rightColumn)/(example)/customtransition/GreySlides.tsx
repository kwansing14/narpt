import { twMerge } from 'tailwind-merge';

interface Prop {
  isTransitioning: Boolean | undefined;
}
const GreySlides: React.FC<Prop> = ({ isTransitioning }) => {
  return (
    <div>
      <div
        className={twMerge(
          'absolute top-0 left-0 w-full h-[14vh] bg-slate-400 transition-all duration-300 ease-in-out',
          isTransitioning ? '-translate-x-full' : 'translate-x-0'
        )}
      />
      <div
        className={twMerge(
          'absolute top-[14vh] left-0 w-full h-[14vh] bg-slate-400 transition-all duration-300 ease-in-out delay-100',
          isTransitioning ? '-translate-x-full' : 'translate-x-0'
        )}
      />
      <div
        className={twMerge(
          'absolute top-[28vh] left-0 w-full h-[14vh] bg-slate-400 transition-all duration-300 ease-in-out delay-200',
          isTransitioning ? '-translate-x-full' : 'translate-x-0'
        )}
      />
      <div
        className={twMerge(
          'absolute top-[42vh] left-0 w-full h-[14vh] bg-slate-400 transition-all duration-300 ease-in-out delay-300',
          isTransitioning ? '-translate-x-full' : 'translate-x-0'
        )}
      />
      <div
        className={twMerge(
          'absolute top-[56vh] left-0 w-full h-[14vh] bg-slate-400 transition-all duration-300 ease-in-out delay-[400ms]',
          isTransitioning ? '-translate-x-full' : 'translate-x-0'
        )}
      />
    </div>
  );
};

export default GreySlides;
