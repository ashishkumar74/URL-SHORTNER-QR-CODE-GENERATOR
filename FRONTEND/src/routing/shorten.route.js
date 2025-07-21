import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './routeTree';
import ShortenPage from '../pages/ShortenPage'; // This is the file above

export const shortenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/shorten',
  component: ShortenPage,
});
