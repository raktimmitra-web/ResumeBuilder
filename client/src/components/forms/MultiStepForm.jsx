import { resumeSchema } from "@/validation/resumeValidation";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import EducationAndExperiences from "../resumeFormComponents/EducationAndExperiences";
import Projects from "../resumeFormComponents/Projects";
import CertificationsAndCourses from "../resumeFormComponents/CertificationsAndCourses";
import OtherDetails from "../resumeFormComponents/OtherDetails";
import { Button } from "../ui/button";
import PersonalDetails from "../resumeFormComponents/PersonalDetails";
import { useNavigate } from "react-router";
import resumeStore from "@/store/resumeStore";
import { submitResume, updateResume } from "@/api/resumeRoutes";
import { yupResolver } from "@hookform/resolvers/yup";
import ProgressBar from "../ProgressBar";
import LivePreview from "../LivePreview";
import toast from "react-hot-toast";

const MultiStepForm = ({ defaultValues, isEditing, handleEdit }) => {
  const [step, setStep] = useState(1);
  const [liveData, setLiveData] = useState(null);
  const [isSubmission, setIsSubmission] = useState(false);
  const scrollRef = useRef(null);
  const { setFormData, titleData, templateData, setResumeId, resumeId } =
    resumeStore();
  const navigate = useNavigate();
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(resumeSchema),
  });
  const { handleSubmit, trigger, getValues, reset, watch } = methods;

  const formData = watch();
  // Notify parent whenever form data changes
  useEffect(() => {
    setLiveData((prev) => {
      if (JSON.stringify(prev) !== JSON.stringify(formData)) {
        return formData;
      }
      return prev;
    });
  }, [formData]);

  // Reseting the Values of form
  useEffect(() => {
    if (defaultValues && isEditing) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  //validating the form step by step
  const validated = async () => {
    let fieldsToValidate = [];

    switch (step) {
      case 1:
        fieldsToValidate = ["personalInfo", "summary"];
        break;
      case 2:
        fieldsToValidate = ["education", "experiences"];
        break;
      case 3:
        fieldsToValidate = ["projects"];
        break;
      case 4:
        fieldsToValidate = ["certifications", "courses"];
        break;
      case 5:
        fieldsToValidate = ["skills", "achievments", "languages"];
        break;
      default:
        break;
    }

    const isValid = await trigger(fieldsToValidate);
    return isValid;
  };
  // handle previous step button
  const prevStep = () => {
    scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    setStep((prev) => prev - 1);
  };

  //handle next step button
  const nextStep = async () => {
    const isValid = await validated();
    if (isValid) {
      setStep((prev) => prev + 1);
      const values = getValues();

      //saving data at each step while editing
      // if(isEditing){
      //    await handleEdit(values);
      // }
      setFormData(values);
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log("Validation failed on step:", step);
    }
  };

  //handling the submit button
  const onSubmit = async (data) => {
    const values = getValues();
    setFormData(values);
    if (isEditing && step === 5 && isSubmission) {
      try {
        await handleEdit(values);
        navigate("/downloadPdf");
        return;
      } catch (error) {
        console.log(error);
      }
    }
    if (!isEditing && step === 5 && isSubmission) {
      try {
        const response = await submitResume({
          titleData,
          templateData,
          formData: values,
        });
        console.log(response);
        navigate("/downloadPdf");
        setIsSubmission(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  //handing auto-save during editing
  const handleSaveAndDownload = async (data) => {
    const isValid = await validated();
    if (!isEditing && isValid) {
      const values = getValues();
      if (!resumeId) {
        console.log(titleData, templateData, "bbbbbb");
        const response = await submitResume({
          titleData,
          templateData,
          formData: values,
        });
        const newId = response.data.newResume._id;
        setResumeId(newId);
        toast.success("Resume created");
      } else {
        await updateResume(resumeId, values);
        toast.success("Progress saved");
      }

      navigate("/downloadPDF");
    }
    if (isValid && isEditing) {
      const values = getValues();
      await handleEdit(values);
      setFormData(values);
      navigate("/downloadPDF");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col bg-white shadow-lg rounded-xl border border-gray-200 p-8 space-y-10 max-h-[85vh]"
        >
          <ProgressBar step={step} />

          <div
            className="flex-1 max-w-2xl space-y-10 overflow-y-auto "
            ref={scrollRef}
          >
            <div className="px-8 py-6 bg-gray-100 rounded-lg ">
              {step === 1 && <PersonalDetails methods={methods} />}
              {step === 2 && <EducationAndExperiences methods={methods} />}
              {step === 3 && <Projects methods={methods} />}
              {step === 4 && <CertificationsAndCourses methods={methods} />}
              {step === 5 && <OtherDetails methods={methods} />}
            </div>

            <div className="flex w-full justify-end gap-4 px-8 pt-6 border-t border-gray-200">
              <Button onClick={handleSaveAndDownload}>Save & Download</Button>

              {step > 1 && (
                <Button
                  onClick={prevStep}
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-2 rounded-lg transition-all duration-200"
                >
                  Prev
                </Button>
              )}

              {step < 5 ? (
                <Button
                  onClick={nextStep}
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow transition-all duration-200"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={() => setIsSubmission(true)}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all duration-200"
                >
                  Submit Now
                </Button>
              )}
            </div>
          </div>
        </form>

        <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 overflow-y-auto max-h-[85vh]">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
            Live Preview
          </h2>
          <LivePreview data={liveData} template={templateData} />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
