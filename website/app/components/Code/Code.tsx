'use client';

import React, { useEffect } from 'react';
import Prism from 'prismjs';
import './night-owl.css';
import dynamic from 'next/dynamic';

export interface Prop {
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
      <pre className='rounded-lg'>
        {code && (
          <code
            className={`language-${language}`}
            style={{ fontSize: '0.8em' }}
          >
            {code}
          </code>
        )}
        {children && (
          <code
            className={`language-${language}`}
            style={{ fontSize: '0.8em' }}
          >
            {children}
          </code>
        )}
      </pre>
    </div>
  );
};

export default Code;
