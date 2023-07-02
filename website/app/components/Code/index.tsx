import dynamic from 'next/dynamic';
import { Prop as CodeProp } from './Code';

const DynamicCode = dynamic(() => import('./Code'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const CodeComponent: React.FC<CodeProp> = (props) => {
  return <DynamicCode {...props} />;
};

export default CodeComponent;
