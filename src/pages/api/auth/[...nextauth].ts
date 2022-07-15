import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credential',
      async authorize() {
        const user = { name: 'ゲストユーザー', email: 'guest@example.com' };
        return user;
      },
      credentials: {},
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
