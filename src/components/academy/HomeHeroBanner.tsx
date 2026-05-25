const highlights = [
  {
    label: 'Alto impacto',
    detail: 'Cursos con las tecnologías que están transformando la industria',
  },
  {
    label: 'Al alcance de todos',
    detail: 'Como fundación, acercamos formación de calidad a más personas',
  },
  {
    label: 'IA y vanguardia',
    detail: 'Educación digital con inteligencia artificial y herramientas actuales',
  },
] as const;

const AiSparkIcon = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-full w-full"
    aria-hidden="true"
  >
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
    <circle cx="32" cy="32" r="18" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
    <path
      d="M32 12v8M32 44v8M12 32h8M44 32h8M18.3 18.3l5.7 5.7M40 40l5.7 5.7M45.7 18.3 40 24M24 40l-5.7 5.7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="32" cy="32" r="5" fill="currentColor" fillOpacity="0.9" />
    <circle cx="32" cy="16" r="2.5" fill="currentColor" fillOpacity="0.55" />
    <circle cx="48" cy="32" r="2.5" fill="currentColor" fillOpacity="0.55" />
    <circle cx="32" cy="48" r="2.5" fill="currentColor" fillOpacity="0.55" />
    <circle cx="16" cy="32" r="2.5" fill="currentColor" fillOpacity="0.55" />
  </svg>
);

const HomeHeroBanner = () => (
  <section
    className="relative mx-4 mb-8 overflow-hidden rounded-2xl border border-white/10 bg-brand-surface md:mx-8 lg:mx-12"
    aria-labelledby="home-hero-heading"
  >
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,210,255,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(0,82,212,0.18),transparent_50%)]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:28px_28px]"
      aria-hidden="true"
    />

    <div className="relative grid gap-8 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-10">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
          Fundación · Educación digital · IA
        </span>

        <h1 id="home-hero-heading" className="mt-5">
          <span className="block bg-gradient-to-r from-brand-cyan via-white to-brand-blue bg-clip-text text-5xl font-black uppercase tracking-tight text-transparent md:text-6xl lg:text-7xl">
            Impulsa
          </span>
          <span className="mt-2 block text-2xl font-semibold leading-snug text-white md:text-3xl">
            el acceso a la tecnología que transforma vidas
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          DreamCenter es una fundación de educación digital que busca acercar cursos accesibles
          de última tecnología e{' '}
          <span className="font-medium text-white/80">inteligencia artificial</span> a todas las
          personas. Trabajamos para que la formación de alto impacto esté al alcance de todos y
          más gente pueda aprender, crecer y construir su futuro en el mundo digital.
        </p>

        <ul className="mt-6 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <li
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-0.5 text-xs text-white/50">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative hidden lg:block">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 blur-2xl" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-brand-dark/70 p-8">
          <div className="mx-auto h-40 w-40 text-brand-cyan">
            <AiSparkIcon />
          </div>
          <p className="mt-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand-cyan">
            Aprende · Crea · Evoluciona
          </p>
          <p className="mt-3 text-center text-sm leading-relaxed text-white/55">
            Una fundación con visión de futuro: acercamos formación tecnológica de alto impacto
            para que aprender del presente y del mañana esté al alcance de todos.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HomeHeroBanner;
