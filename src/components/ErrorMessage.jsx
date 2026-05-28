export default function ErrorMessage({ message }) {
  return (
    <div className="rounded-3xl bg-red-500/20 backdrop-blur-md border border-red-400/30 p-8 text-center animate-fade-in">
      <div className="text-5xl mb-4">⚠️</div>
      <h3 className="text-white text-xl font-display font-bold mb-2">Something went wrong</h3>
      <p className="text-white/80 text-sm">{message}</p>
    </div>
  );
}
