nadpt - Nextjs App Directory Page Transition.

## Support

Currently only support NextJS with app router.

## Installation

For npm users:

```
npm i nadpt
```

For yarn users:

```
yarn add nadpt
```

For pnpm users:

```
pnpm i nadpt
```

## Usage

Step 1: wrap `{children}` with `<TransitionLayout>` in app/layout.jsx

```jsx
import './globals.css';
import { Inter } from 'next/font/google';
import { TransitionLayout } from 'nadpt';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionLayout>
          {children}
        </TransitionLayout>
      </body>
    </html>
  );
}
```

Step 2: replace `<Link>` with `<TransitionLink>`

```jsx
import { TransitionLink } from 'nadpt';
// import Link from 'next/link';

const LinkPage = () => {
  return (
    {/* <Link href='/page1'>Go to Page 1</Link> */}
    <TransitionLink href='/page1'>Go to Page 1</TransitionLink>
  );
};

export default LinkPage;
```

Step 3: replace any `<div>` with `<TransitionDiv>` to add animation during page transition.

```jsx
import { TransitionDiv } from 'nadpt';

const AnimatedTextPage = () => {
  return (
    <TransitionDiv>This text will have animation.</TransitionDiv>
  );
};

export default AnimatedTextPage;
```
