'use client';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import './night-owl.css';

interface Prop {
  language: string;
  code?: string;
  children?: React.ReactNode;
}
const Code: React.FC<Prop> = ({ children, code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='w-full rounded-lg'>
      <pre className='rounded-lg' style={{ fontSize: '0.8em' }}>
        {code && <code className={`language-${language}`}>{code}</code>}
        {children && <code className={`language-${language}`}>{children}</code>}
      </pre>
    </div>
  );
};

export default Code;
