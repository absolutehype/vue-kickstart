import orderRoutes from '../containers/Orders';
import homeRoutes from '../containers/Home';

const routes = [
	...orderRoutes,
	...homeRoutes
];

export default routes;
