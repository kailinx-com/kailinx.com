export function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-2.5">
      <h2 className="text-[12px] font-bold tracking-[0.14em] uppercase text-black shrink-0">
        {title}
      </h2>
      <div className="flex-1 border-t border-black" />
    </div>
  );
}
