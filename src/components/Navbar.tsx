import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
