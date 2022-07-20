import { NextPage } from 'next';
import { SignIn } from 'components/login/Login';

const LoginPage: NextPage = () => <SignIn csrfToken={undefined} />;

export default LoginPage;
