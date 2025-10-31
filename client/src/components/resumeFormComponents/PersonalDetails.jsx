import React from "react";
import Input from "../Input";

const PersonalDetails = ({ methods }) => {
  const {
    register,
    formState: { errors },
  } = methods;
  return (
    <div className="">
      {/* Personal Details */}
      <div className="">
        <h1 className="text-2xl font-bold my-4">Personal Details</h1>
        <div className="flex flex-col gap-y-1">
          <div className="grid grid-cols-2 gap-x-4 ">
            {/* FirstName */}
            <Input
              label="First Name"
              id="firstName"
              name="personalInfo.firstName"
              type="text"
              register={register}
              errors={errors}
              placeholder="First Name"
              className={""}
            />

            {/* LastName */}
            <Input
              label="Last Name"
              id="lastName"
              name="personalInfo.lastName"
              type="text"
              register={register}
              errors={errors}
              placeholder={"Last Name"}
              className={""}
            />
          </div>

          {/* Email */}
          <Input
            label="Email"
            id="email"
            name="personalInfo.email"
            type="email"
            register={register}
            errors={errors}
            placeholder={"Email"}
          />

          {/* Phone Number */}
          <Input
            label="Phone Number"
            id="phone"
            name="personalInfo.phone"
            type="text"
            register={register}
            errors={errors}
            placeholder={"Phone No."}
          />

          {/* Address */}
          <Input
            label="Address"
            id="address"
            name="personalInfo.address"
            type="text"
            register={register}
            errors={errors}
            placeholder={"Address"}
          />
          <div className="grid grid-cols-2 gap-x-4 justify-between">
            {/* Github Link */}
            <Input
              label="Github Link"
              id="githubLink"
              name="personalInfo.githubLink"
              type="text"
              register={register}
              errors={errors}
              placeholder={"Github Link"}
            />
            {/* LinkedIn Link */}
            <Input
              label="Linkedin Link"
              id="linkedinLink"
              name="personalInfo.linkedinLink"
              type="text"
              register={register}
              errors={errors}
              placeholder={"LinkedIn Link"}
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4 justify-between">
            {/* Portfolio Link */}
            <Input
              label="Portfolio Link"
              id="portfolioLink"
              name="personalInfo.portfolioLink"
              type="text"
              register={register}
              errors={errors}
              placeholder={"Portfolio Link"}
            />

            {/* Twitter Link */}
            <Input
              label="Twitter Link"
              id="twitterLink"
              name="personalInfo.twitterLink"
              type="text"
              register={register}
              errors={errors}
              placeholder={"Twitter Link"}
            />
          </div>
        </div>
      </div>
      {/* Summary */}
      <div>
        <h1 className="font-bold text-2xl my-4">Summary</h1>
        <Input
          label="Summary"
          id="summary"
          name="summary"
          type="text"
          register={register}
          errors={errors}
          placeholder={"Summary"}
          
        />
      </div>
    </div>
  );
};

export default PersonalDetails;
