import { Mail, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-slate-900">LumenGrade LMS</h4>
            <p className="mt-2 text-sm text-slate-600">
              Automated grading for exam transcripts with audit-ready accuracy.
            </p>
          </div>
          <div>
            <h5 className="font-medium text-slate-900">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-slate-900">About us</a></li>
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-slate-900">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@lumengrade.app</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> lumengrade.app</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
          © {new Date().getFullYear()} LumenGrade. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
