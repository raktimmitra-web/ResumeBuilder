import { progressBarData } from "@/dummyData/data";
import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <div className="max-w-5xl  my-10 px-6">
      <div className="relative flex justify-between items-start">
        {/* Connector line (background) */}
        <div className="absolute top-6 left-0 right-0 h-1 bg-gray-300 -z-2 hidden"></div>

        {progressBarData.map((item, index) => {
          const isActive = item.step === step;
          const isCompleted = item.step <= step;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center w-full"
            >
              {/* Active/Completed Connector Line */}
              {index > 0 && (
                <div
                  className={`absolute top-6 left-[-50%] w-full h-1 ${
                    isCompleted ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              )}

              {/* Step Circle */}
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold text-lg 
              transition-all duration-300 z-10
              ${
                isActive
                  ? "bg-blue-600 text-white ring-4 ring-blue-200 scale-105"
                  : isCompleted
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              >
                { item.step}
              </div>

              {/* Step Label */}
              <div
                className={`mt-3 text-sm font-medium text-center leading-tight w-20 
              ${
                isActive
                  ? "text--900"
                  : isCompleted
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
