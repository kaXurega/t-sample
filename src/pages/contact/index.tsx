import { NextPageWithLayout } from 'next';
import { Layout } from '@/components/Layout';
import { Form } from '@/components/contact/form';

const ContactPage: NextPageWithLayout = () => <Form />;
ContactPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ContactPage;
