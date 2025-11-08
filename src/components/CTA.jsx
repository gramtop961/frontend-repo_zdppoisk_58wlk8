import { ArrowRight, Calculator } from 'lucide-react';

export default function CTA() {
  return (
    <section id="quote" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">Get a custom quotation</h3>
              <p className="mt-3 text-white/80">
                Tell us your exam volume and grading needs. We’ll send a clear, no-obligation quote with timelines and onboarding plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-indigo-700 px-6 py-3 font-medium shadow hover:bg-white/90">
                Talk to Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#signup" className="inline-flex items-center justify-center rounded-md border border-white/30 text-white px-6 py-3 font-medium hover:bg-white/10">
                Calculate Pricing
                <Calculator className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
