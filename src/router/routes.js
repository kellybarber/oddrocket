import Home from '../sections/Home';
import Work from '../sections/Work';
import Film from '../sections/Film';
import Contact from '../sections/Contact';

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
    path: '/work/film/:id',
    name: 'film',
    component: Film
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path     : '*',
    redirect : '/'
  }
]
