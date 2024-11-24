export function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

export default function ModulBooking({ title, price, image, fieldFn, openFn, customImg, secondPrice }) {
  function submitHandle() {
    const field = { title, price, image, secondPrice };
    fieldFn(field);

    openFn();
  }

  return (
    <>
      <div className="p-4 flex flex-col justify-center items-center rounded-xl shadow-md text-black space-y-4 pb-8 border border-gray-200 duration-200 md:hover:-translate-y-5 md:hover:shadow-2xl">
        <img src={image} alt="" className={`max-w-[95] ${customImg}`} />
        <h1 className="font-extrabold text-2xl">{title}</h1>
        <p className="text-lg font-medium">Mulai Dari {formatRupiah(price)}</p>
        <button className="py-1 px-10 bg-teal-800 rounded-xl text-md text-white " onClick={submitHandle}>
          Sewa
        </button>
      </div>
    </>
  );
}
