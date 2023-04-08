import ListRestaurant from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': ListRestaurant,
  '/home': ListRestaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
