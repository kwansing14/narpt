import { TransitionDiv } from 'nadpt';
import Header from '@/components/Header';

interface DynamicPageProps {
  params: {
    pageId: string;
  };
}

const DynamicPage: React.FC<DynamicPageProps> = ({ params }) => {
  return (
    <div className='mt-24 w-full text-center'>
      <Header />
      <TransitionDiv>This is Page {params.pageId}</TransitionDiv>
    </div>
  );
};

export default DynamicPage;
