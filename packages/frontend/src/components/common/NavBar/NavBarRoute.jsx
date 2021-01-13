const navRoutes = [
  {
    route: '/',
    label: 'Schola',
    access: ['student', 'admin', 'teacher', 'parent'],
  },
  {
    route: '/home',
    label: 'Home',
    access: ['student', 'admin', 'teacher', 'parent'],
  },
  {
    route: '/schedule',
    label: 'Emploi du temps',
    access: ['student', 'admin', 'teacher', 'parent'],
  },
  {
    route: '/cantine',
    label: 'Cantine',
    access: ['student', 'admin', 'teacher', 'parent'],
  },
  {
    route: '/quizz',
    label: 'Quizz',
    access: ['student', 'admin', 'teacher', 'parent'],
  },
  {
    route: '/rollcall',
    label: 'Appel',
    access: ['admin', 'teacher'],
  },
];

export default navRoutes;
