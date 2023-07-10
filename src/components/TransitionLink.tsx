'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useTransition } from './TransitionLayout';
import { useRouter, usePathname } from 'next/navigation';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode | undefined;
  className?: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { end, delay } = useTransition({});
  const delayInMs = useMemo(() => delay || 300, [delay]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === href) return;
    router.prefetch(href);
    end?.();
    setTimeout(() => {
      router.push(href);
    }, delayInMs);
  };
  return (
    <Link className={className} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};
