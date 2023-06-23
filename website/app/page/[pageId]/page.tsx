import TransitionDiv from '@/components/TransitionDiv';

interface DynamicPageProps {
  params: {
    pageId: string;
  };
}

const DynamicPage: React.FC<DynamicPageProps> = ({ params }) => {
  return (
    <div className='mt-24 w-full text-center'>
      <TransitionDiv>This is Page {params.pageId}</TransitionDiv>
    </div>
  );
};

export default DynamicPage;
