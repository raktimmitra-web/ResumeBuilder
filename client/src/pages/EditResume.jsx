import { getResumeDataByResumeId, updateResume } from "@/api/resumeRoutes";
import MultiStepForm from "@/components/forms/MultiStepForm";
import resumeStore from "@/store/resumeStore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const EditResume = () => {
  const { id } = useParams();
  const {setTemplateData} = resumeStore()
  const [resumeFormData, setResumeFormData] = useState(null);
  const {setFormData} = resumeStore ()
  useEffect(() => {
    const fetchResumeData = async () => {
      const response = await getResumeDataByResumeId(id);
      console.log(response);
      setResumeFormData(response.data.resume)
      setFormData(response.data.resume);
      setTemplateData(response.data.resume.template)
    };
    fetchResumeData();
  }, []);

  const handleEdit = async(updatedValues) => {
   try {
        const response = await updateResume(id,updatedValues)
        console.log("updated")
   } catch (error) {
     console.log(error)
   }    
  };
  return (
    <div>
      <MultiStepForm
        defaultValues={resumeFormData}
        isEditing={true}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default EditResume;
