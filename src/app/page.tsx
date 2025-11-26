"use client";

import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { eligibleAddresses } from '@/utils/eligibleAddresses';

export default function Page() {
  const [inputAddress, setInputAddress] = useState('');

  const handleCheck = () => {
    const normalized = inputAddress.trim().toLowerCase();

    const isValidAddress = /^(0x[a-fA-F0-9]{40}|[1-9A-HJ-NP-Za-km-z]{32,44})$/.test(normalized);

    if (!isValidAddress) {
      toast.error('Invalid wallet address');
      return;
    }


    const isFound = eligibleAddresses.map(addr => addr.toLowerCase()).includes(normalized);

    isFound
      ? toast.success('All set to mint')
      : toast("Sorry, better luck next time 😔");
  };

  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* top-left logo */}
      <div className="absolute left-5 top-5 z-40">
        <Image
          src="/logo-canvas.png"
          alt="Canvas logo"
          width={40}
          height={40}
          className="rounded-full"
          priority
        />
      </div>

      {/* giant muted CANVAS */}
      <h1
        aria-hidden
        className="
          pointer-events-none select-none absolute inset-x-0 z-0 mx-auto 
          text-center uppercase leading-[0.9] text-zinc-400/15 
          font-extrabold tracking-tight
          top-[4vh] md:top-[6vh]
        "
        style={{
          fontFamily: "'PPMonumentExtended', sans-serif",
          fontSize: "clamp(4rem, 18vw, 18rem)",
        }}
      >
        CANVAS
      </h1>

      {/* pink script Canvas stroke */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-x-0 z-0 mx-auto text-center leading-none top-[8vh] md:top-[20vh] scale-x-[1.2] md:scale-x-[1.55]"
        style={{
          transform: "rotate(-2deg)",
        }}
      >
        <span
          style={{
            fontFamily: "Robertson",
            fontSize: "clamp(5rem, 17vw, 19rem)",
            color: "#ff84b1",
            display: "inline-block",
          }}
        >
          Canvas
        </span>
      </div>

      {/* left art cluster */}
      <section className="relative isolate z-20 mx-auto grid min-h-dvh w-full max-w-7xl grid-cols-1 items-end gap-[-10] md:gap-12  px-6 pb-8 md:grid-cols-2 md:items-center md:px-10 md:pt-40">
        <div className="relative flex items-center justify-center">
          {/* grid panel behind */}
          <div className="absolute -left-6 bottom-6 md:bottom-[-75] -z-10 h-[52svh] w-[52svh] md:w-[56svh] max-w-[560px] rounded-md border border-white/5 bg-grid" />

          {/* left icon */}
          <Image
            src="/left-icon.png"
            alt="Left icon"
            width={120}
            height={120}
            className="absolute -left-0 md:right-120 bottom-29 md:bottom-50 w-9 md:w-20 drop-shadow-[0_8px_20px_rgba(0,0,0,.5)]"
          />

          {/* characters */}
          <Image
            src="/characters.png"
            alt="Canvas characters"
            width={1600}
            height={1600}
            className="
              w-[min(100vw,1100px)]
              md:w-[min(100vw,1300px)]
              lg:w-[min(100vw,1500px)]
              -translate-y-4 md:-translate-y-6
              drop-shadow-[0_20px_60px_rgba(0,0,0,.6)]
            "
            priority
          />

          {/* right icon */}
          <Image
            src="/right-icon.png"
            alt="Right icon"
            width={120}
            height={120}
            className="absolute right-[-18] md:right-[-26] bottom-45 md:bottom-74 w-19 md:w-30 drop-shadow-[0_8px_20px_rgba(0,0,0,.5)] mix-blend-screen"
          />
        </div>

        {/* eligibility checker */}
        <div className="relative z-[9999] flex w-full justify-center md:justify-end mt-0">
          <div className="w-full max-w-md">
            <p
              className="mb-6 text-center text-xl font-bold uppercase tracking-widest"
              style={{ fontFamily: "Bison" }}
            >
              Check your eligibility
            </p>

            <input
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
              placeholder="Enter wallet address..."
              className="mb-4 w-full rounded-md border border-white/10 bg-[#1c1c1c]/80 px-4 py-3 outline-none placeholder:text-zinc-400 focus:border-pink-400/60 text-center"
            />

            <button
              className="relative isolate w-full rounded-md bg-pink-400 px-4 py-3 font-semibold text-white transition hover:bg-pink-300 active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-pink-300 cursor-pointer"
              onClick={handleCheck}
            >
              Check Wallet
            </button>
          </div>
        </div>
      </section>

      {/* fade effect */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 hidden md:block pointer-events-none"
        style={{
          height: "22vh",
          background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
        }}
      />

      {/* overlays */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-vignette" />
      <div className="pointer-events-none absolute inset-0 z-0 mix-blend-overlay opacity-[.06] noise" />

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastStyle={{
          background: "linear-gradient(135deg, #0D0D0F, #1A0F17, #231A22)",
          color: "#EDE9FE",
          borderRadius: "12px",
          border: "1px solid rgba(139, 92, 246, 0.4)",
          fontFamily: "Bison",
          fontSize: "1rem",
          fontWeight: 500,
          boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
        }}
        toastClassName="backdrop-blur-md"
      />

      {/* bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 z-20 hidden md:block pointer-events-none"
        style={{
          top: "65%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      />
    </main>
  );
}
