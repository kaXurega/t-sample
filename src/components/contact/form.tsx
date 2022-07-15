import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormInputs } from '../../types';
import styles from '@/styles/components/form.module.scss';

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>({
    mode: 'onSubmit',
    criteriaMode: 'firstError',
    shouldFocusError: false,
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    Router.push('/form/result');
  };
  console.log(errors);

  return (
    <>
      <NextSeo title="Form" description="form page of tunnel app!" />
      <section>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <p>メールアドレス</p>
          <input type="text" placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email?.type === 'required' && <span className={styles.error}>入力してください</span>}
          <p>お問い合わせ内容</p>
          <textarea placeholder="Contact Us" {...register('free', { required: true })}></textarea>
          <input type="submit" className={styles.btn} />
        </form> */}
        <h1>Contact form</h1>
        <p>
          <Link href="/home">
            <a>Go Home</a>
          </Link>
        </p>
      </section>
    </>
  );
};
