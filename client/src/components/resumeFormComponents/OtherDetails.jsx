import React from "react";
import { useFieldArray } from "react-hook-form";
import Input from "../Input";
import { Button } from "../ui/button";
import { CirclePlus, CircleX } from "lucide-react";

const OtherDetails = ({ methods }) => {
  const {
    register,
    control,
    formState: { errors },
  } = methods;

  const {
    fields: skillFields,
    append: addSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });
  const {
    fields: achievmentFields,
    append: addAchievment,
    remove: removeAchievment,
  } = useFieldArray({
    control,
    name: "achievments",
  });
  const {
    fields: languageFields,
    append: addLanguage,
    remove: removeLanguage,
  } = useFieldArray({
    control,
    name: "languages",
  });
  return (
    <div className="">
      {/* Skills Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
          <Button
            onClick={() => addSkill("")}
            className="bg-blue-500 hover:bg-blue-400 flex items-center gap-2"
          >
            <CirclePlus className="w-4 h-4" /> Add Skill
          </Button>
        </div>

        <div className="">
          {skillFields.map((item, index) => (
            <div key={index} className="flex  gap-3 ">
              <Input
                id="skill"
                name={`skills[${index}]`}
                type="text"
                register={register}
                errors={errors}
                placeholder={`Enter skill ${index + 1}`}
                className="flex-1"
              />
              <Button
                onClick={()=>removeSkill(index)}
                type="button"
                className="  text-red-800 p-2 rounded-md bg-red-300 hover:bg-red-200"
                title="Remove skill"
              >
                <CircleX className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Achievements</h2>
          <Button
            onClick={() => addAchievment("")}
            className="bg-blue-500 hover:bg-blue-400 flex items-center gap-2"
          >
            <CirclePlus className="w-4 h-4" /> Add Achievement
          </Button>
        </div>

        <div className="space-y-3">
          {achievmentFields.map((item, index) => (
            <div
              key={index}
              className="flex gap-3 w-full"
            >
              <Input
                id="achievment"
                name={`achievments[${index}]`}
                type="text"
                register={register}
                errors={errors}
                placeholder={`Enter achievement ${index + 1}`}
                className="flex-1 "
              />
              <Button
                onClick={()=>removeAchievment(index)}
                type="button"
                className="  text-red-800 p-2 rounded-md bg-red-300 hover:bg-red-200"
                title="Remove achievement"
              >
                <CircleX className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Languages</h2>
          <Button
            onClick={() => addLanguage("")}
            className="bg-blue-500 hover:bg-blue-400 flex items-center gap-2"
          >
            <CirclePlus className="w-4 h-4" /> Add Language
          </Button>
        </div>

        <div className="space-y-3">
          {languageFields.map((item, index) => (
            <div
              key={index}
              className="flex gap-3"
            >
              <Input
                id="language"
                name={`languages[${index}]`}
                type="text"
                register={register}
                errors={errors}
                placeholder={`Enter language ${index + 1}`}
                className="flex-1"
              />
              <Button
                onClick={()=>removeLanguage(index)}
                type="button"
                className="  text-red-800 p-2 rounded-md bg-red-300 hover:bg-red-200"
s                title="Remove language"
              >
                <CircleX className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
