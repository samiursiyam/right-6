import React from "react";
import CardDesign from "./CardDesign";
import Link from "next/link";

const FontCard = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to load data");
  }

  const data = await res.json();

  return (
    <section className="w-full bg-[#0f0f0f] min-h-screen p-6">

<div className="mx-3 ">
  <h1 className="text-3xl font-bold">THE LIBRARY</h1>
  <h5 className="text-[#9CA3AF] ">Twelve lifts covering every major muscle group.</h5>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {data.map((data , ind) => (
          
         <div key={ind} > 
         <Link href={`/card/${data.id}`}>
         <CardDesign data={data}></CardDesign> 
         </Link>
         
         </div>
        ))}
      </div>
    </section>
  );
};

export default FontCard;
// <CardDesign key={item.id} data={item} />