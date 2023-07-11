'use client';

const Ping = () => {
  return (
    <div className='absolute -top-2 right-1'>
      <span className='absolute animate-ping inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75'></span>
      <span className='absolute left-0.5 top-0.5 inline-flex rounded-full h-2 w-2 bg-red-500'></span>
    </div>
  );
};

export default Ping;
