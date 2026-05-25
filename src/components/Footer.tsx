const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-brand-dark py-12">
      <div className="mx-auto max-w-[1920px] px-4 md:px-8 lg:px-12">
        <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Academia</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Cursos</li>
              <li>Rutas de estudio</li>
              <li>Escuelas</li>
              <li>Workshops</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Recursos</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Blog</li>
              <li>Comunidad</li>
              <li>Precios</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Términos</li>
              <li>Privacidad</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>hola@dreamcenter.dev</li>
              <li>Soporte</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-white/40">
          © 2025 DreamCenter Academy. Contenido informativo de demostración.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
