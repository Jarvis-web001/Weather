export default function LoadingSkeleton() {
  return (
    <div className="animate-fade-in space-y-4">
      <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-2">
            <div className="h-8 w-40 rounded-xl bg-shimmer animate-shimmer" />
            <div className="h-4 w-24 rounded-lg bg-shimmer animate-shimmer" />
          </div>
          <div className="h-16 w-16 rounded-full bg-shimmer animate-shimmer" />
        </div>
        <div className="h-20 w-48 rounded-xl bg-shimmer animate-shimmer mb-2" />
        <div className="h-4 w-32 rounded-lg bg-shimmer animate-shimmer" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-24 rounded-2xl bg-shimmer animate-shimmer" />
        ))}
      </div>
    </div>
  );
}
