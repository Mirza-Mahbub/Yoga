export default function Button({ children, styling }) {
  return (
    <button
      className={`py-3 px-6 rounded-3xl ${styling} duration-500 cursor-pointer font-semibold text-white w-fit`}
    >
      {children}
    </button>
  );
}
