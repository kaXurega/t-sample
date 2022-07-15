import { useRouter } from 'next/router';
import React from 'react';

const Person = () => {
  const router = useRouter();

  return <div>{router.query.image}</div>;
};

export default Person;
