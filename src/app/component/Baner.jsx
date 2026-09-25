import Image from "next/image";

const Baner = () => {
  return (
    <section className=" relative overflow-hidden bg-[#17191d] px-6 py-16 md:px-12 md:py-24 my-4 rounded-3xl">
      
      {/* ব্যাকগ্রাউন্ডে হালকা গ্লো */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#C2F800]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#C2F800]/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:justify-between">
        
        {/* ---------- বাম পাশ: টেক্সট ---------- */}
        <div className="flex max-w-xl flex-col items-start gap-5">
          
          <h3 className="rounded-full border border-[#C2F800]/30 bg-[#313f24] px-4 py-1 text-xs font-bold tracking-[0.2em] text-[#C2F800]">
            WORKOUT LIBRARY
          </h3>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            TRAIN WITH INTERNT.LOG <br />
            <span className="text-[#C2F800]">EVERY SET.</span>
          </h1>

          <h5 className="text-base leading-relaxed text-[#9CA3AF] md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </h5>

          <button className="mt-2 rounded-2xl bg-[#C2F800] px-6 py-3 text-sm font-bold tracking-wide text-black transition hover:bg-[#d4ff2b] hover:-translate-y-px active:translate-y-0 shadow-lg shadow-[#C2F800]/20">
            BROWSE WORKOUT
          </button>
        </div>

        {/* ---------- ডান পাশ: ইমেজ ---------- */}
        <div className="relative w-full max-w-md shrink-0">
          <div className="relative aspect-square w-full">
            <Image
              src="/assets/banner.png"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              alt="Workout banner"
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Baner;