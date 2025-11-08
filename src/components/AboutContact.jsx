import { Users, Target, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function AboutContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-slate-700 text-sm mb-4">
              <Users className="h-4 w-4" />
              About us
            </div>
            <h2 className="text-3xl font-bold text-slate-900">We help institutions grade at scale</h2>
            <p className="mt-4 text-slate-600">
              Our mission is to make assessment fair, fast, and transparent. From small schools to nationwide boards, we support secure intake, automated scoring, and human verification.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-slate-900 font-medium"><Target className="h-4 w-4 text-indigo-600" /> Accuracy first</div>
                <p className="mt-2 text-sm text-slate-600">Benchmarked models and rubric checks ensure reliable grading.</p>
              </div>
              <div className="rounded-lg border border-slate-200 p-4">
                <div className="flex items-center gap-2 text-slate-900 font-medium"><Users className="h-4 w-4 text-indigo-600" /> Human-in-the-loop</div>
                <p className="mt-2 text-sm text-slate-600">Review edge cases, override scores, and keep a full audit trail.</p>
              </div>
            </div>
          </div>

          <div id="contact" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <MessageSquare className="h-5 w-5 text-indigo-600" /> Contact us
            </div>
            <p className="mt-1 text-sm text-slate-600">Have questions or want a custom quote? Send us a message.</p>

            {submitted ? (
              <div className="mt-6 rounded-md bg-green-50 p-4 text-green-700">
                Thanks! We received your message and will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={onChange}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-500"
                >
                  Send message
                  <Send className="ml-2 h-4 w-4" />
                </button>
                <a
                  href="#quote"
                  className="ml-3 inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-slate-700 font-medium hover:bg-slate-50"
                >
                  Get a quotation
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
