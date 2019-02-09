import Home from '../sections/Home';
import Work from '../sections/Work';
import Film from '../sections/Film';

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/work',
    name: 'work',
    component: Work
  },
  {
    path: '/film/:id',
    name: 'film',
    component: Film
  },
  {
    path     : '*',
    redirect : '/'
  }
]
