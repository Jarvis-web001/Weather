export default function StatCard({ icon, label, value, theme }) {
  return (
    <div className={`rounded-2xl p-4 ${theme.statBg} flex flex-col gap-1`}>
      <span className="text-2xl">{icon}</span>
      <span className="text-xs text-white/50 uppercase tracking-widest font-mono">{label}</span>
      <span className="text-white font-medium text-sm">{value}</span>
    </div>
  );
}
