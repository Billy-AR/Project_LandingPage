import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { formatRupiah } from "./ModulBooking";
import { motion } from "framer-motion";

export default function ModalForm({ img, title, price, open, openFn, secondPrice }) {
  if (!img || !title || !price) {
    return null;
  }

  const [priceState, setPriceState] = useState({ price, quantity: 1 });

  function priceOnChange(event) {
    const value = event.target.value;
    if (value < 18) {
      setPriceState((prevState) => ({
        ...prevState,
        price: price * prevState.quantity,
      }));
    } else {
      setPriceState((prevState) => ({
        ...prevState,
        price: secondPrice * prevState.quantity,
      }));
    }
  }
  function quantityChange(event) {
    const value = event.target.value;
    setPriceState((prevState) => ({
      ...prevState,
      price: value * prevState.price,
      quantity: value,
    }));

    console.log(priceState.price * priceState.quantity);
  }

  const modalDialog = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    const message = `Nama: ${data.nama}%0A` + `Tanggal Sewa: ${data.date}%0A` + `Durasi Sewa: ${data.duration} jam%0A` + `Metode Pembayaran: ${data.method}%0A` + `Lapang: ${title}%0A` + `Harga: ${formatRupiah(priceState.price)}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6287824705350&text=${message}`;
    window.location.href = whatsappUrl;

    closeHandle();
  }

  useEffect(() => {
    if (open) {
      modalDialog.current.showModal();
    } else if (modalDialog.current?.open) {
      modalDialog.current.close();
    }
  }, [open]);

  return createPortal(
    <motion.dialog initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }} exit={{ opacity: 0, y: 30 }} onClose={openFn} ref={modalDialog} className="rounded-xl h-4/5 md:w-3/4">
      <div className="max-w-lg my-24 mx-auto relative">
        {/* X Button */}
        <button type="button" className="absolute md:-right-6 right-5 md:-top-10 -top-14 w-9 h-9 bg-slate-500 text-white rounded-full text-sm flex justify-center items-center" onClick={openFn}>
          X
        </button>

        {/* Header */}
        <div className="flex flex-col justify-center items-center space-y-3">
          <img src={img} alt="" className="max-w-[50%] rounded-xl" />
          <h3 className="text-xl">{title}</h3>
          <p className="text-darkGrayishBlue text-lg">{`${formatRupiah(priceState.price)}`}</p>
        </div>

        {/* Konten dialog */}
        <form className="space-y-10 w-full p-5" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="nama" className="text-md font-bold">
              Nama:
            </label>
            <input type="text" id="nama" className="border-b border-b-gray-400 outline-none focus:border-b-strongCyan w-full text-md py-1 duration-300" name="nama" required />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="tanggalSewa" className="text-md font-bold">
              Tanggal Sewa:
            </label>
            <input type="date" id="tanggalSewa" className="border-b border-b-gray-400 outline-none focus:border-b-strongCyan w-full text-md py-1 duration-300" name="date" required />
          </div>

          {/* Jam */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="waktuSewa" className="text-md font-bold">
              Waktu Sewa:
            </label>
            <select id="waktuSewa" className="border-b border-b-gray-400 outline-none focus:border-b-strongCyan w-full text-md py-1 duration-300 appearance-none bg-white" defaultValue="" name="time" onChange={priceOnChange} required>
              <option value="" disabled>
                Pilih waktu sewa
              </option>
              <option value="7">07:00</option>
              <option value="8">08:00</option>
              <option value="9">09:00</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="metodePembayaran" className="text-md font-bold">
              Durasi Sewa:
            </label>
            <select
              id="metodePembayaran"
              className="border-b border-b-gray-400 outline-none focus:border-b-strongCyan w-full text-md py-1 duration-300 appearance-none bg-white"
              defaultValue=""
              name="duration"
              onChange={quantityChange}
              required
            >
              <option value="" disabled>
                Silahkan pilih durasi sewa
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="metodePembayaran" className="text-md font-bold">
              Metode Pembayaran:
            </label>
            <select id="metodePembayaran" className="border-b border-b-gray-400 outline-none focus:border-b-strongCyan w-full text-md py-1 duration-300 appearance-none bg-white" defaultValue="" required name="method">
              <option value="" disabled>
                Pilih metode pembayaran
              </option>
              <option value="transfer">QRIS</option>
              <option value="creditCard">BCA</option>
              <option value="cash">DANA</option>
            </select>
          </div>
          <button type="submit" className="py-2 px-6 bg-slate-500 rounded-lg text-white">
            Submit
          </button>
        </form>
      </div>
    </motion.dialog>,
    document.getElementById("portal")
  );
}
