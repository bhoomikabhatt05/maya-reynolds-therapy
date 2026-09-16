export default function Eyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-sage-dark">
      {children}
    </p>
  );
}
