import { services } from "@/dummyData/data";
import React from "react";

const Services = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16" id="about">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
            const Icon= service.icon
          return (
            <div class="bg-slate-100 rounded-md shadow-lg p-6 space-y-4">
                <Icon/>
                <h1 className="text-xl font-semibold"> {service.title}</h1>
                <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
