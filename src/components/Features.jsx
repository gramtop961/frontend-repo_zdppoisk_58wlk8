import { ShieldCheck, Clock, FileSpreadsheet, Settings, Sparkles, Gauge } from 'lucide-react';

const features = [
  {
    title: 'AI-Assisted Grading',
    description:
      'OCR + rubric-aware scoring handles handwritten and typed responses with human-level accuracy.',
    icon: Sparkles,
  },
  {
    title: 'Bulk Transcript Intake',
    description:
      'Upload PDFs or images in batches; auto-detection maps pages to students and questions.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Configurable Rubrics',
    description:
      'Point scales, partial credit, and criteria weights tailored for every exam and subject.',
    icon: Settings,
  },
  {
    title: 'Speed & Reliability',
    description:
      'Grade in minutes, not weeks. Built-in validation and outlier detection keep results fair.',
    icon: Gauge,
  },
  {
    title: 'Compliance & Security',
    description:
      'End-to-end encryption, role-based access, and exportable audit logs keep data safe.',
    icon: ShieldCheck,
  },
  {
    title: 'Real-time Dashboards',
    description:
      'Track progress, flag edge cases, and finalize grades with one click.',
    icon: Clock,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Powerful features built for institutions</h2>
          <p className="mt-3 text-slate-600">
            Everything you need to capture, grade, verify, and publish results with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-600/10 p-2 text-indigo-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
