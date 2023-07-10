'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const EmptyPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/customtransition/work');
  }, []);
  return <div></div>;
};

export default EmptyPage;
