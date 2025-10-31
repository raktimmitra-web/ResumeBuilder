import React from "react";
import Input from "../Input";
import { useFieldArray } from "react-hook-form";
import { Button } from "../ui/button";
import { CirclePlus, CircleX } from "lucide-react";

const CertificationsAndCourses = ({ methods }) => {
  const {
    register,
    control,
    formState: { errors },
  } = methods;

  const {
    fields: certiFields,
    append: addCerti,
    remove: removeCerti,
  } = useFieldArray({
    control,
    name: "certifications",
  });
  const {
    fields: courseFields,
    append: addCourse,
    remove: removeCourse,
  } = useFieldArray({
    control,
    name: "courses",
  });
  return (
    <div>
      {/* Certification Fields */}
      <div>
        <div className="w-full flex justify-between my-4">
          <h1 className="text-2xl font-bold">Certifications</h1>
          <Button
            onClick={() =>
              addCerti({
                title: "",
                provider: "",
                year: "",
              })
            }
            className={"bg-blue-500 hover:bg-blue-400"}
          >
            <CirclePlus />{" "}
          </Button>
        </div>
        {certiFields.map((item, index) => (
          <div key={index} className="flex flex-col gap-y-1 my-4">
            <Button
              onClick={removeCerti}
              className="w-fit self-end bg-accent hover:bg-accent cursor-pointer"
            >
              <CircleX className="text-red-600 hover:bg-red-400 " />
            </Button>
            <Input
              id="title"
              name={`certifications[${index}].title`}
              type="text"
              register={register}
              errors={errors}
              placeholder={"Certification Title"}
            />
            <div className="grid grid-cols-2 gap-x-4">
              <Input
                id="provider"
                name={`certifications[${index}].provider`}
                type="text"
                register={register}
                errors={errors}
                placeholder={"Provider"}
              />
              <Input
                id="year"
                name={`certifications[${index}].year`}
                type="text"
                register={register}
                errors={errors}
                placeholder={"Year"}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Courses Fields */}
      <div>
        <div className="w-full flex justify-between my-4">
          <h1 className="text-2xl font-bold">Courses</h1>
          <Button
            onClick={() =>
              addCourse({
                title: "",
                startDate: "",
                endDate: "",
              })
            }
            className={"bg-blue-500 hover:bg-blue-400"}
          >
            <CirclePlus />
          </Button>
        </div>
        {courseFields.map((item, index) => (
          <div key={index} className="flex flex-col gap-y-1 my-4">
            <Button onClick={removeCourse} className="w-fit self-end bg-accent hover:bg-accent cursor-pointer">
              <CircleX className="text-red-600 hover:bg-red-400 "/>
            </Button>
            <Input
              id="title"
              name={`courses[${index}].title`}
              type="text"
              register={register}
              errors={errors}
              placeholder={"Course Title"}
            />

            <div className="grid grid-cols-2 gap-x-4">
              <Input
                id="startDate"
                name={`courses[${index}].startDate`}
                type="date"
                register={register}
                errors={errors}
                placeholder={"Start Year"}
              />
              <Input
                id="endDate"
                name={`experiences[${index}].endDate`}
                type="date"
                register={register}
                errors={errors}
                placeholder={"End Year"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsAndCourses;
