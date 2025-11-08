import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 text-sm mb-4">
              <Sparkles className="h-4 w-4" />
              AI-powered grading for modern education
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
              Automate Exam Transcript Grading with Confidence
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              LumenGrade analyzes handwritten and typed exam scripts, applies custom rubrics, and delivers instant, auditable results—freeing educators to focus on teaching.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-500"
              >
                Get Started Free
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-slate-700 font-medium hover:bg-slate-50"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-indigo-200/40 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-lg p-4 md:p-6">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
                alt="Automated grading dashboard"
                className="rounded-lg w-full object-cover"
              />
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-slate-900">98%</p>
                  <p className="text-xs text-slate-500">Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">10x</p>
                  <p className="text-xs text-slate-500">Faster grading</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">100%</p>
                  <p className="text-xs text-slate-500">Audit trail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
