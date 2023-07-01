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

## QuickStart

1. create a new nextjs app with `pnpm create next-app`, select yes for App
   Router.
2. run `pnpm i nadpt`.
3. replace `app/layout.js` with the following code.

```jsx
import { Inter } from 'next/font/google';
import { TransitionLayout } from 'nadpt';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitionLayout>{children}</TransitionLayout>
      </body>
    </html>
  );
}
```

4. replace `app/page.js` with the following code.

```jsx
import { TransitionLink, TransitionDiv } from 'nadpt';

export default function Home() {
  return (
    <main>
      <TransitionDiv>
        <TransitionLink href='/about'>Go To About</TransitionLink>
        <div>Home Page</div>
      </TransitionDiv>
    </main>
  );
}
```

5. create a new page `app/about/page.js` and insert the following code.

```jsx
import { TransitionDiv, TransitionLink } from 'nadpt';

const AboutPage = () => {
  return (
    <TransitionDiv>
      <TransitionLink href='/'>Back</TransitionLink>
      <div>About Page</div>
    </TransitionDiv>
  );
};

export default AboutPage;
```

## Full Documentation

Coming soon...
