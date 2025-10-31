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
    <div>
      {/* Skills Section */}
      <div>
        <div className="w-full flex justify-between my-4">
          <h1 className="text-2xl font-bold">Skills</h1>
          <Button
            onClick={() => addSkill("")}
            className={"bg-blue-500 hover:bg-blue-400"}
          >
            <CirclePlus />
          </Button>
        </div>
        <div className="">
          {skillFields.map((item, index) => (
            <div key={index} className="flex flex-col gap-2  ">
              <Button onClick={removeSkill} className="w-fit self-end bg-accent hover:bg-accent cursor-pointer">
                <CircleX className="text-red-600 hover:bg-red-400 "/>
              </Button>
              <Input
                id="skill"
                name={`skills[${index}]`}
                type="text"
                register={register}
                errors={errors}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Achievments Section */}
      <div>
        <div className="w-full flex justify-between my-4">
          <h1 className="text-2xl font-bold">Achievment</h1>
          <Button
            onClick={() => addAchievment("")}
            className={"bg-blue-500 hover:bg-blue-400"}
          >
            {" "}
            <CirclePlus />
          </Button>
        </div>
        {achievmentFields.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 ">
            <Button onClick={removeAchievment} className="w-fit self-end bg-accent hover:bg-accent cursor-pointer">
              <CircleX className="text-red-600 hover:bg-red-400 "/>
            </Button>
            <Input
              id="achievment"
              name={`achievments[${index}]`}
              type="text"
              register={register}
              errors={errors}
            />
          </div>
        ))}
      </div>
      {/* Languages Section */}
      <div>
        <div className="w-full flex justify-between my-4">
          <h1 className="text-2xl font-bold">Language</h1>
          <Button
            onClick={() => addLanguage("")}
            className={"bg-blue-500 hover:bg-blue-400"}
          >
            <CirclePlus />
          </Button>
        </div>
        {languageFields.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 ">
            <Button onClick={removeLanguage} className="w-fit self-end bg-accent hover:bg-accent cursor-pointer">
              <CircleX className="text-red-600 hover:bg-red-400 "/>
            </Button>
            <Input
              id="language"
              name={`languages[${index}]`}
              type="text"
              register={register}
              errors={errors}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherDetails;
