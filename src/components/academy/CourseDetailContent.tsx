import type { CourseDetail } from '../../data/types';

interface CourseDetailContentProps {
  detail: CourseDetail;
}

const descriptionFields = [
  { key: 'objective', label: 'Objetivo' },
  { key: 'requirements', label: 'Requisitos' },
  { key: 'audience', label: '¿A quién va dirigido?' },
] as const;

const CourseDetailContent = ({ detail }: CourseDetailContentProps) => (
  <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-2">
    <div className="space-y-8">
      {detail.note && (
        <div className="rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 p-6">
          <p className="text-sm leading-relaxed text-white/80">{detail.note}</p>
        </div>
      )}

      <section>
        <h2 className="mb-4 text-xl font-semibold text-white">Qué aprenderás</h2>
        <ul className="space-y-2 rounded-xl border border-white/5 bg-brand-surface p-6">
          {detail.learnings.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-white/70">
              <span className="text-brand-cyan">·</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-white">Descripción</h2>
        <div className="space-y-4">
          {descriptionFields.map(({ key, label }) => (
            <div key={key} className="rounded-xl border border-white/5 bg-brand-surface p-6">
              <h3 className="mb-2 text-sm font-semibold text-brand-cyan">{label}</h3>
              <p className="text-sm leading-relaxed text-white/60">{detail[key]}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

    <section>
      <h2 className="mb-4 text-xl font-semibold text-white">Temario</h2>
      <div className="space-y-4 rounded-xl border border-white/5 bg-brand-surface p-6">
        {detail.modules.map((module, index) => (
          <div key={`${module.title}-${index}`}>
            <h3 className="flex gap-3 text-sm font-semibold text-white">
              <span className="font-mono text-brand-cyan">{String(index + 1).padStart(2, '0')}</span>
              {module.title}
            </h3>
            <ul className="mt-2 space-y-1 pl-9">
              {module.topics.map((topic) => (
                <li key={topic} className="text-sm text-white/60">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default CourseDetailContent;
