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

    if (!/^0x[a-fA-F0-9]{40}$/.test(normalized)) {
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
        className="pointer-events-none select-none absolute inset-x-0 top-[6svh] z-0 mx-auto text-center font-extrabold uppercase leading-none text-zinc-400/15 tracking-[0.15em]"
        style={{ fontSize: "clamp(4rem, 16vw, 18rem)" }}
      >
        CANVAS
      </h1>

      {/* pink script Canvas stroke */}
<div
  aria-hidden
  className="pointer-events-none select-none absolute inset-x-0 z-0 mx-auto text-center leading-none "
  style={{
    top: "15vh", // higher so it peeks out more
    transform: "rotate(-2deg)", // subtle tilt
  }}
>
  <span
    style={{
      fontFamily: "'Pacifico', cursive",
      fontSize: "clamp(5rem, 17vw, 19rem)", // slightly bigger for impact
      color: "#ff84b1",
      textShadow: "0 8px 28px rgba(255,132,177,.35)", // brighter glow
      letterSpacing: "0.08em", // wider for that stretched flow
      display: "inline-block",
    }}
  >
    Canvas
  </span>
</div>

      {/* left art cluster */}
      <section className="relative z-20 mx-auto grid min-h-dvh w-full max-w-7xl grid-cols-1 items-end gap-10 px-6 pb-8 md:grid-cols-2 md:items-center md:px-10 md:pt-24">
        {/* characters + grid */}
<div className="relative flex items-center justify-center">
  {/* grid panel behind */}
  <div className="absolute -left-6 bottom-6 -z-10 h-[52svh] w-[52svh] max-w-[560px] rounded-md border border-white/5 bg-grid" />
  
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
    width={800}
    height={800}
    className="w-[min(90vw,640px)] drop-shadow-[0_20px_60px_rgba(0,0,0,.6)]"
    priority
  />

  {/* right icon */}
  <Image
    src="/right-icon.png"
    alt="Right icon"
    width={120}
    height={120}
    className="absolute -right-0 md:left-120 bottom-42 md:bottom-67 w-14 md:w-32 drop-shadow-[0_8px_20px_rgba(0,0,0,.5)]"
  />
</div>


        {/* eligibility card */}
        <div className="flex w-full justify-center md:justify-end md:self-center md:translate-y-20">
          <div className="w-full max-w-md rounded-xl border border-white/10 bg-black/30 p-6 backdrop-blur-md">
            <p className="mb-4 text-center text-sm font-bold uppercase tracking-widest">
              Check your eligibility
            </p>

            <label className="mb-2 block text-xs opacity-70">Enter wallet address…</label>
            <input
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
              placeholder="0x…"
              className="mb-4 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-zinc-400 focus:border-pink-400/60"
            />

            <button
              className="w-full rounded-md bg-pink-400 px-4 py-3 font-semibold text-white transition hover:bg-pink-300 active:translate-y-[1px]"
              onClick={handleCheck}
            >
              Check Wallet
            </button>
          </div>
        </div>
      </section>

      {/* subtle vignette + noise overlays */}
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
          background: "linear-gradient(135deg, #0D0D0F, #1A0F17, #231A22)", // matches site gradient
          color: "#EDE9FE", // soft violet-white for text
          borderRadius: "12px",
          border: "1px solid rgba(139, 92, 246, 0.4)", // subtle purple border
          fontFamily: "Inter, sans-serif", 
          fontSize: "1rem",
          fontWeight: 500,
          boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
        }}
        toastClassName="backdrop-blur-md"
      />

    </main>
  );
}
