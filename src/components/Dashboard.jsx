import { useState } from 'react';
import { BarChart3, ClipboardList, Wand2, MessageSquare, Scale, BookOpen, Settings, Calendar, CheckSquare, Layers, Layout, Plug } from 'lucide-react';

function Card({ title, description, icon: Icon, action }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-indigo-600/10 p-2 text-indigo-600">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-slate-900">{title}</h4>
            {action}
          </div>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

const tabs = [
  { key: 'analytics', label: 'Analytics', icon: BarChart3 },
  { key: 'assessments', label: 'Assessments', icon: ClipboardList },
  { key: 'grading', label: 'Personalized Grading', icon: Wand2 },
  { key: 'feedback', label: 'Comments & Feedback', icon: MessageSquare },
  { key: 'rubrics', label: 'Rubrics', icon: Scale },
  { key: 'knowledge', label: 'Knowledge Base', icon: BookOpen },
  { key: 'settings', label: 'Settings', icon: Settings },
  { key: 'terms', label: 'Term Setup', icon: Calendar },
  { key: 'evaluation', label: 'Evaluation Setup', icon: CheckSquare },
  { key: 'bulk', label: 'Bulk Grading', icon: Layers },
  { key: 'canvas', label: 'Canvas', icon: Layout },
  { key: 'integrations', label: 'Integrations', icon: Plug },
];

export default function Dashboard() {
  const [active, setActive] = useState('analytics');

  return (
    <section id="dashboard" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-900">LMS CRM Dashboard</h2>
          <p className="text-slate-600">Manage analytics, assessments, grading workflows, and integrations.</p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-md border px-3 py-2 text-sm ${
                active === key
                  ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Icon className="h-4 w-4" /> {label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {active === 'analytics' && (
            <div className="grid md:grid-cols-3 gap-4">
              <Card title="Average Score" description="Class average across latest assessments." icon={BarChart3} />
              <Card title="Completion Rate" description="Percentage of scripts graded." icon={BarChart3} />
              <Card title="Outliers" description="Scripts flagged for review." icon={BarChart3} />
              <div className="md:col-span-3 rounded-xl border border-slate-200 bg-white p-6">
                <div className="h-60 rounded-md bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center text-slate-500">
                  Analytics chart placeholder
                </div>
              </div>
            </div>
          )}

          {active === 'assessments' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Exam Library" description="Create and manage exams and sections." icon={ClipboardList} />
              <Card title="Transcript Intake" description="Bulk upload PDFs and images." icon={Layers} />
            </div>
          )}

          {active === 'grading' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Personalized Models" description="Tune per-class grading policies and rubrics." icon={Wand2} />
              <Card title="Human-in-the-loop" description="Review and adjust scores with full audit trail." icon={Wand2} />
            </div>
          )}

          {active === 'feedback' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Inline Comments" description="Annotate and comment on specific answers." icon={MessageSquare} />
              <Card title="Student Feedback" description="Generate summaries and share securely." icon={MessageSquare} />
            </div>
          )}

          {active === 'rubrics' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Rubric Designer" description="Criteria, weights, and partial credit rules." icon={Scale} />
              <Card title="Versioning" description="Track changes and approvals." icon={Scale} />
            </div>
          )}

          {active === 'knowledge' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Articles" description="Create KB articles for graders and staff." icon={BookOpen} />
              <Card title="Search" description="Semantic search across policies and past exams." icon={BookOpen} />
            </div>
          )}

          {active === 'settings' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Organization" description="Branding, roles, and permissions." icon={Settings} />
              <Card title="Notifications" description="Alerts for progress and anomalies." icon={Settings} />
            </div>
          )}

          {active === 'terms' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Terms" description="Create terms and academic sessions." icon={Calendar} />
              <Card title="Courses" description="Map courses and instructors." icon={Calendar} />
            </div>
          )}

          {active === 'evaluation' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Schemes" description="Define evaluation schemes and thresholds." icon={CheckSquare} />
              <Card title="Moderation" description="Random sampling and double-marking." icon={CheckSquare} />
            </div>
          )}

          {active === 'bulk' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Bulk Queue" description="Process batches with priority rules." icon={Layers} />
              <Card title="Exports" description="Sync results to SIS / CSV / PDF." icon={Layers} />
            </div>
          )}

          {active === 'canvas' && (
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="h-72 rounded-md bg-slate-100 flex items-center justify-center text-slate-500">
                Canvas area for annotating scripts
              </div>
            </div>
          )}

          {active === 'integrations' && (
            <div className="grid md:grid-cols-2 gap-4">
              <Card title="Canvas LMS" description="Sync courses and grades with Canvas." icon={Plug} />
              <Card title="Google Drive" description="Import/Export via Drive." icon={Plug} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
