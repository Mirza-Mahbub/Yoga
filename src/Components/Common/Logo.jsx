export default function Logo({ texColor }) {
  return (
    <div className="flex items-center gap-4 cursor-pointer">
      <img
        className="w-10"
        src="/src/assets/yoga-pose-with-lotus-background-svgrepo-com.svg"
        alt="Logo"
      />
      <h2 className={` text-2xl ${texColor} font-bold`}>Balance Yoga</h2>
    </div>
  );
}
