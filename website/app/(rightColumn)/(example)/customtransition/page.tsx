import { useEffect } from 'react';
import { useRouter } from 'next/router';

const EmptyPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/customtransition/work');
  }, []);
  return <div></div>;
};

export default EmptyPage;
