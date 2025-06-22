export default function Menu({ children, href = "#" }) {
  return (
    <a href={`${href}`} className="relative group">
      <span className="text-[#547670] hover:text-[#227179] font-semibold text-lg ">
        {children}
      </span>
      <span className="absolute left-1/2 -bottom-4 w-1.5 h-1.5 bg-[#227179] rounded-full opacity-0 group-hover:opacity-100"></span>
    </a>
  );
}
