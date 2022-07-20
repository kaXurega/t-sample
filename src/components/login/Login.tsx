import { NextSeo } from 'next-seo';
// import { useRouter } from 'next/router';
// import { signIn, getCsrfToken } from 'next-auth/react';
// import React, { useState } from 'react';
// import { Formik, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';

export const Login = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      <div>
        <Link href="/private">
          <a>Go to private page</a>
        </Link>
      </div>
    </>
  );
};

// export const SignIn = ({ csrfToken }) => {
//   const router = useRouter();
//   const [error, setError] = useState(null);

//   return (
//     <>
//       <NextSeo title="Login" description="login page of tunnel app!" />
//       <Formik
//         initialValues={{ email: '', password: '', tenantKey: '' }}
//         validationSchema={Yup.object({
//           emial: Yup.string()
//             .max(30, 'メールアドレスは30文字以内です')
//             .email('正しいメールアドレスを入力してください')
//             .required('メールアドレスを入力してください'),
//           password: Yup.string().required('パスワードを入力してください'),
//           tenantKey: Yup.string().max(20, 'テナントキーは20文字以内です').required('テナントキーを入力してください'),
//         })}
//         onSubmit={async (values, { setSubmitting }) => {
//           const res = await signIn('credentials', {
//             redirect: false,
//             email: values.email,
//             password: values.password,
//             tenantKey: values.tenantKey,
//             callbackUrl: `${window.location.origin}`,
//           });

//           if (res?.error) {
//             setError(res.error);
//           } else {
//             setError(null);
//           }

//           if (res.url) router.push(res.url);
//           setSubmitting(false);
//         }}
//       >
//         {(formik) => (
//           <form onSubmit={formik.handleSubmit}>
//             <div className="">
//               <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

//               <div className="">{error}</div>
//               <div className="">
//                 <label htmlFor="email" className="">
//                   Email
//                   <Field name="email" aria-label="enter your email" aria-required="true" type="text" className="" />
//                 </label>
//                 <div className="">
//                   <ErrorMessage name="email" />
//                 </div>
//               </div>
//               <div className="">
//                 <label htmlFor="password" className="">
//                   password
//                   <Field
//                     name="password"
//                     aria-label="enter your password"
//                     aria-required="true"
//                     type="password"
//                     className=""
//                   />
//                 </label>
//                 <div className="">
//                   <ErrorMessage name="password" />
//                 </div>
//               </div>
//               <div className="">
//                 <label htmlFor="tenantKey" className="">
//                   Tenant
//                   <Field
//                     name="tenantKey"
//                     aria-label="enter your Tenant"
//                     aria-required="true"
//                     type="text"
//                     className=""
//                   />
//                 </label>
//                 <div className="">
//                   <ErrorMessage name="tenantKey" />
//                 </div>
//               </div>
//               <div className="">
//                 <button type="submit" className="">
//                   {formik.isSubmitting ? 'Please wait...' : 'Sign In'}
//                 </button>
//               </div>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// };

// export const getServerSideProps = async (context) => {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// };
