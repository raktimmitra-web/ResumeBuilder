import React from "react";
import { useFieldArray } from "react-hook-form";
import Input from "../Input";
import { Button } from "../ui/button";
import { CirclePlus, CircleX } from "lucide-react";

const Projects = ({ methods }) => {
  const {
    register,
    control,
    formState: { errors },
  } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });
  return (
    <div>
      <div className="w-full flex justify-between my-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <div>
          <Button
            onClick={() =>
              append({
                title: "",
                description: "",
                githubLink: "",
                liveLink: "",
              })
            }
            className={"bg-blue-500 hover:bg-blue-400"}
          >
            <CirclePlus />
          </Button>
        </div>
      </div>
      {fields.map((item, index) => (
        <div key={index} className=" flex flex-col gap-y-1 my-4">
          <Button onClick={remove} className="w-fit self-end bg-accent hover:bg-accent cursor-pointer">
            <CircleX className="text-red-600 hover:bg-red-400 "/>
          </Button>
          <Input
            label={"Project Title"}
            id="title"
            name={`projects[${index}].title`}
            type="text"
            register={register}
            errors={errors}
            placeholder={"Title"}
          />
          <Input
            label={"Description"}
            id="description"
            name={`projects[${index}].description`}
            type="text"
            register={register}
            errors={errors}
            placeholder={"Description"}
          />
          <div className="grid grid-cols-2 gap-x-4">
            <Input
              label={"Github Link"}
              id="githubLink"
              name={`projects[${index}].githubLink`}
              type="text"
              register={register}
              errors={errors}
              placeholder={"Github Link"}
            />
            <Input
              label={"Live Link"}
              id="liveLink"
              name={`projects[${index}].liveLink`}
              type="text"
              register={register}
              errors={errors}
              placeholder={"Live Link"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
