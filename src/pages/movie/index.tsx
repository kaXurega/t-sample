import { NextPageWithLayout } from 'next';
import { Layout } from '@/components/Layout';
import { MovieList } from '@/components/movie/MovieList';

const MoviePage: NextPageWithLayout = () => <MovieList />;
MoviePage.getLayout = (page) => <Layout>{page}</Layout>;

export default MoviePage;
