export default function StatsCard({ icon: Icon, label, value, color = 'text-indigo-600' }) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-2">
        <Icon size={20} className={color} />
        <span className="text-sm text-slate-500 dark:text-slate-400">{label}</span>
      </div>
      <div className={`text-3xl font-bold ${color}`}>{value}</div>
    </div>
  );
}
