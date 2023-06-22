'use client';

import Link from 'next/link';
import { useTransition } from './TransitionLayout';
import { useRouter, usePathname } from 'next/navigation';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode | undefined;
  className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  href,
  children,
  className,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { end } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === href) return;
    router.prefetch(href);
    end?.();
    setTimeout(() => {
      router.push(href);
    }, 300);
  };
  return (
    <Link className={className} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default TransitionLink;
