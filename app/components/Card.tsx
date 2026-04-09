export default function Card({ title, value }) {
  return (
    <div className="p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}