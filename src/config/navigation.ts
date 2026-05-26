export interface NavLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  href?: string;
  children?: NavLink[];
}

/** Navegación principal — inspirada en la estructura pública de EDteam */
export const mainNav: NavGroup[] = [
  {
    label: 'Cursos',
    href: '/cursos',
    children: [
      { label: 'Todos los cursos', href: '/cursos', description: 'Catálogo completo de formación' },
      { label: 'Cursos gratis', href: '/cursos/gratis', description: 'Acceso libre para empezar' },
      { label: 'Próximos lanzamientos', href: '/cursos#proximos', description: 'Lo que viene pronto' },
      { label: 'En tendencia', href: '/cursos#tendencia', description: 'Lo más popular esta semana' },
    ],
  },
  {
    label: 'Rutas',
    href: '/rutas',
    children: [
      { label: 'Todas las rutas', href: '/rutas', description: 'Planes guiados de estudio' },
      { label: 'Desarrollo Web Introductorio', href: '/rutas/desarrollo-web-introductorio', description: 'Tu primer paso en código' },
      { label: 'Desarrollo Web Intermedio', href: '/rutas/desarrollo-web-intermedio', description: 'JavaScript y frontend' },
      { label: 'Desarrollo Web Avanzado', href: '/rutas/desarrollo-web-avanzado', description: 'React, TypeScript y APIs' },
      { label: 'Desarrollo Web Experto', href: '/rutas/desarrollo-web-experto', description: 'React, Supabase y Strapi' },
    ],
  },
  {
    label: 'Escuelas',
    href: '/escuelas',
    children: [
      { label: 'Todas las escuelas', href: '/escuelas', description: 'Especialízate por área' },
      { label: 'Programación web', href: '/escuelas/programacion', description: 'Bases del desarrollo' },
      { label: 'Frontend', href: '/escuelas/frontend', description: 'Interfaces y UX' },
      { label: 'Backend', href: '/escuelas/backend', description: 'APIs y servicios' },
    ],
  },
  {
    label: 'Empresas',
    href: '/empresas',
    children: [
      { label: 'Plan para equipos', href: '/empresas', description: 'Capacita a tu organización' },
      { label: 'Solicitar demo', href: '/empresas#contacto', description: 'Conversemos sobre tu equipo' },
    ],
  },
];

/** Navegación secundaria — menú móvil y utilidades */
export const secondaryNav: NavLink[] = [
  { label: 'Becas', href: '/becas', description: 'Apoyo para estudiantes de bajos recursos' },
  { label: 'Comunidad', href: '/comunidad', description: 'Conecta con otros estudiantes' },
  { label: 'Blog', href: '/blog', description: 'Artículos y recursos' },
];

export const authNav = {
  login: { label: 'Inicia sesión', href: '/login' },
  signup: { label: 'Contáctanos', href: '/soporte' },
};

export const footerNav = {
  about: {
    title: 'Acerca de DreamCenter',
    links: [
      { label: '¿Qué es DreamCenter?', href: '/nosotros' },
      { label: 'Nuestra misión', href: '/nosotros#mision' },
      { label: 'El equipo', href: '/nosotros#equipo' },
      { label: 'Profesores', href: '/nosotros#profesores' },
    ],
  },
  connect: {
    title: 'Conecta con nosotros',
    links: [
      { label: 'Soporte', href: '/soporte' },
      { label: 'Política de privacidad', href: '/privacidad' },
      { label: 'Términos y condiciones', href: '/terminos' },
      { label: 'Becas y acceso social', href: '/becas' },
    ],
  },
  products: {
    title: 'Nuestros programas',
    links: [
      { label: 'Cursos gratis', href: '/cursos/gratis' },
      { label: 'Rutas de estudio', href: '/rutas' },
      { label: 'Para empresas', href: '/empresas' },
      { label: 'Becas estudiantiles', href: '/becas' },
    ],
  },
  resources: {
    title: 'Recursos gratis',
    links: [
      { label: 'Cursos abiertos', href: '/cursos/gratis' },
      { label: 'Blog', href: '/blog' },
      { label: 'Comunidad', href: '/comunidad' },
      { label: 'Preguntas frecuentes', href: '/faq' },
    ],
  },
};
