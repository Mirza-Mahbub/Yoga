export default function Heading({ text, styling }) {
  return (
    <h2 className={`text-5xl font-semibold ${styling} text-[#227179]`}>
      {text}
    </h2>
  );
}
