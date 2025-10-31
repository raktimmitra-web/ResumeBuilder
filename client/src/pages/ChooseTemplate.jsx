import { Button } from "@/components/ui/button";
import resumeStore from "@/store/resumeStore";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const ChooseTemplate = () => {
  const [selectedValue, setSelectedValue] = useState("template_1");
  const { setTemplateData } = resumeStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setTemplateData(selectedValue);
    navigate(`/add-resume?template=${selectedValue}`);
  };
  return (
    <div className="min-h-screen bg-accent flex flex-col items-center justify-start py-20 px-4">
      {/* Header */}
      <h1 className="text-center text-5xl font-bold  mb-12">
        Choose Your Template
      </h1>

      {/* Template Options */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl w-full">
        {/* Template 1 */}
        <div className="flex flex-col">
          <label
            className={`cursor-pointer transition-all border-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gary-500 ${
              selectedValue === "template_1"
                ? "border-gray-600 ring-2 ring-gray-400"
                : "border-gray-200"
            }`}
          >
            <input
              type="radio"
              name="template"
              value="template_1"
              checked={selectedValue === "template_1"}
              onChange={() => setSelectedValue("template_1")}
              className="hidden"
            />
            <div className="p-6 flex flex-col items-center gap-4">
              <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-600 font-semibold text-lg">
                <img
                  src="template_1.png"
                  className="scale-112 translate-y-15"
                />
              </div>
            </div>
          </label>
          <p className="text-lg font-medium text-gray-70 z-10 text-center">Classic</p>
        </div>

        {/* Template 2 */}
        <div className="flex flex-col">
          <label
          className={`cursor-pointer transition-all border-2 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-gray-500 ${
            selectedValue === "template_2"
              ? "border-gray-600 ring-2 ring-gray-400"
              : "border-gray-200"
          }`}
        >
          <input
            type="radio"
            name="template"
            value="template_2"
            checked={selectedValue === "template_2"}
            onChange={() => setSelectedValue("template_2")}
            className="hidden"
          />
          <div className="p-6 flex flex-col items-center gap-4">
            <div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-600 font-semibold text-lg">
              <img src="template_2.png" className="scale-115 translate-y-10" />
            </div>
          </div>
        </label>
            <p className="text-lg font-medium text-gray-700 z-10 text-center">Modern </p>

        </div>
      </form>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <Button
          onClick={handleSubmit}
          className="px-10 py-8  text-white font-semibold text-xl rounded-xl shadow-md  "
        >
          Choose
        </Button>
      </div>
    </div>
  );
};

export default ChooseTemplate;
