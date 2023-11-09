
export function StatusCard({ label, count,src }) {
  return (
    <div className="flex flex-col items-center justify-center w-[170px]">
      <img src={src}></img>
      <h1 className="text-3xl mt-5">{label}</h1>
      <p className="text-3xl">{count}</p>
    </div>
  );
}