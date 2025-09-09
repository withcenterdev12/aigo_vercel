export default function Consultant({
  imagePath,
  label,
}: Readonly<{
  imagePath: string;
  label: string;
}>) {
  return (
    <span className="text-mobile-14m-subtext text-on-bg-d-1 flex flex-row items-center gap-[4px]">
      <img
        src={`/images/${imagePath}.svg`}
        className="h-[28px] w-[28px] rounded-full"
      />
      {label}
    </span>
  );
}
