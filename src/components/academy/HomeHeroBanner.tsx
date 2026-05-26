import { assetUrl } from '../../utils/assetUrl';

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
        <h1
          id="home-hero-heading"
          className="max-w-2xl bg-gradient-to-r from-brand-cyan via-white to-brand-blue bg-clip-text text-balance text-2xl font-bold leading-[1.15] text-transparent sm:text-3xl md:text-4xl lg:max-w-none lg:text-5xl"
        >
          El acceso a la tecnología que transforma vidas
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          En <span className="font-semibold text-white">DreamCenter</span> acercamos cursos
          accesibles de última tecnología e{' '}
          <span className="font-medium text-white/80">inteligencia artificial</span> a todas las
          personas. Como fundación, trabajamos para que la formación de alto impacto esté al
          alcance de todos y más gente pueda aprender, crecer y construir su futuro en el mundo
          digital.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/10 to-brand-blue/10 blur-2xl" aria-hidden="true" />
        <div className="relative flex flex-col items-center rounded-2xl border border-white/10 bg-brand-dark/70 px-8 py-10 text-center lg:px-10 lg:py-12">
          <img
            src={assetUrl('images/logo-academy.png')}
            alt="DreamCenter"
            className="h-28 w-28 rounded-full object-cover ring-4 ring-brand-cyan/20 md:h-36 md:w-36"
          />
          <p className="mt-6 text-2xl font-bold text-white">
            Dream<span className="text-brand-cyan">Center</span>
          </p>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-brand-cyan">
            Aprende · Crea · Evoluciona
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            Fundación de educación digital enfocada en acercar tecnología de alto impacto e
            inteligencia artificial a todos.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HomeHeroBanner;
