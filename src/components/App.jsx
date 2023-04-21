import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Tweets = lazy(() => import('../pages/Tweets'));
//const MovieDetails = lazy(() => import('../pages/MovieDetails'));
//const Reviews = lazy(() => import("./Reviews"));
//const Cast = lazy(() => import("./Cast"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        {/* <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route> */}
      </Route>
    </Routes>
  );
};
