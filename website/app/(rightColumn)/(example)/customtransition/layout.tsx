import Header from '@/(rightColumn)/(example)/customtransition/Header';

export default function CustomTransitionLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className='border border-slate-300 rounded-lg h-[calc(70vh)] relative overflow-hidden'>
        <Header />
        {children}
      </div>
    </section>
  );
}
