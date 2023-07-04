import { redirect } from 'next/navigation';
import { useEffect } from 'react';

useEffect(() => {
  redirect('/get-started');
}, []);

const Home = () => <></>;

export default Home;
