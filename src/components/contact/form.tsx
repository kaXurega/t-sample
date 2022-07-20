import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { IFormInputs } from '../../types';
import styles from 'styles/components/form.module.scss';

export const Form = () => {
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm<IFormInputs>({
  //   mode: 'onSubmit',
  //   criteriaMode: 'firstError',
  //   shouldFocusError: false,
  // });
  // const onSubmit: SubmitHandler<IFormInputs> = (data) => {
  //   console.log(data);
  //   Router.push('form/result');
  // };
  // console.log(errors);

  return (
    <>
      <NextSeo title="Form" description="form page of tunnel app!" />
      <section>
        <h1>Contact form</h1>
        <p>
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </p>
      </section>
    </>
  );
};
