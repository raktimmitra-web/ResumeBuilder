import { testimonials } from "@/dummyData/data";
import { Star } from "lucide-react";
import React from "react";

const Testimonial = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => {
          return (
            <div class="bg-slate-100 rounded-md shadow-lg p-6 space-y-4 flex flex-col items-center">
                <img src={"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} className="rounded-full h-16 w-16"/>
              <h1 className="text-xl font-semibold"> {testimonial.name}</h1>
              <div className="flex gap-2">
                {
                    Array.from({length:5}).map((_,idx)=>{
                        return <div ><Star className={idx<testimonial.rating?"text-amber-300":"text-black"}/></div>
                    })
                }
                </div>
              <p className="text-center">{testimonial.comment}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
