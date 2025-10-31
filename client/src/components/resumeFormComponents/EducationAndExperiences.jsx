import React from "react";
import { useFieldArray } from "react-hook-form";
import Input from "../Input";
import { Button } from "../ui/button";
import { CirclePlus, CircleX } from "lucide-react";

const EducationAndExperiences = ({ methods }) => {
  const {
    register,
    control,
    formState: { errors },
  } = methods;
  const {
    fields: eduFields,
    append: addEdu,
    remove: removeEdu,
  } = useFieldArray({
    control,
    name: "education",
  });
  const {
    fields: expFields,
    append: addExp,
    remove: removeExp,
  } = useFieldArray({
    control,
    name: "experiences",
  });
  return (
    <div>
      {/* Education Fields */}
      <div>
        <div className="w-full flex justify-between my-4">
          <h1 className="text-2xl font-bold">Education</h1>
          <Button
            onClick={() =>
              addEdu({
                institutionName: "",
                degree: "",
                fieldOfStudy: "",
                startDate: "",
                endDate: "",
                obtainedPercentage: "",
              })
            }
            className={"bg-blue-500 hover:bg-blue-400"}
          >
            <CirclePlus />{" "}
          </Button>
        </div>
        {eduFields.map((item, index) => (
          <div key={index} className=" flex flex-col gap-y-1">
            <Button onClick={removeEdu} className="w-fit self-end bg-accent hover:bg-accent cursor-pointer">
              <CircleX className="text-red-600 hover:bg-red-400 "/>
            </Button>
            <Input
              id="institutionName"
              name={`education[${index}].institutionName`}
              type="text"
              register={register}
              errors={errors}
              placeholder={"Institution Name"}
              label={"Institution Name"}
            />
            <div className="grid grid-cols-2 gap-x-4 ">
              <Input
                id="degree"
                name={`education[${index}].degree`}
                type="text"
                register={register}
                errors={errors}
                placeholder={"Degree"}
                label={"Degree"}
              />
              <Input
                id="fieldOfStudy"
                name={`education[${index}].fieldOfStudy`}
                type="text"
                register={register}
                errors={errors}
                placeholder={"Field of study"}
                label={"Field Of Study"}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4 ">
              <Input
                id="startDate"
                name={`education[${index}].startDate`}
                type="date"
                register={register}
                errors={errors}
                placeholder={"Start Date"}
                label={"Start Date"}
              />
              <Input
                id="endDate"
                name={`education[${index}].endDate`}
                type="date"
                register={register}
                errors={errors}
                placeholder={"End Date"}
                label={"End Date"}
              />
            </div>
            <Input
              id="obtainedPercentage"
              name={`education[${index}].obtainedPercentage`}
              type="text"
              register={register}
              errors={errors}
              placeholder={"Obtained Percentage"}
              label={"Obtained Percentage"}
            />
          </div>
        ))}
      </div>
      {/* Experience Fields */}
      <div>
        <div className="w-full flex justify-between my-4">
          <h1 className="text-2xl font-bold">Experience</h1>
          <Button
            onClick={() =>
              addExp({
                position: "",
                companyName: "",
                startDate: "",
                endDate: "",
                description: "",
              })
            }
            className={"bg-blue-500 hover:bg-blue-400"}
          >
            <CirclePlus />{" "}
          </Button>
        </div>
        {expFields.map((item, index) => (
          <div key={index} className="flex flex-col gap-y-1  ">
            <Button onClick={removeExp} className="w-fit self-end bg-accent hover:bg-accent cursor-pointer">
              <CircleX className="text-red-600 hover:bg-red-400 "/>
            </Button>

            <div className="grid grid-cols-2 gap-x-4">
              <Input
                id="position"
                name={`experiences[${index}].position`}
                type="text"
                register={register}
                errors={errors}
                placeholder={"Position"}
                label={"Job Position"}
              />
              <Input
                id="companyName"
                name={`experiences[${index}].companyName`}
                type="text"
                register={register}
                errors={errors}
                placeholder={"Company Name"}
                label={"Company Name"}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4 ">
              <Input
                id="startDate"
                name={`experiences[${index}].startDate`}
                type="date"
                register={register}
                errors={errors}
                placeholder={"Start Year"}
                label={"Start Year"}
              />
              <Input
                id="endDate"
                name={`experiences[${index}].endDate`}
                type="date"
                register={register}
                errors={errors}
                placeholder={"End Year"}
                label={"End Year"}
              />
            </div>
            <Input
              id="description"
              name={`experiences[${index}].description`}
              type="text"
              register={register}
              errors={errors}
              placeholder={"Description"}
              label={"Description"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationAndExperiences;
