import axiosInstance from "./axiosInstance";

export const submitResume = async (data) => {
  const { formData,titleData , templateData} = data;
  const payload = {
    ...formData,
    template: templateData,
    title: titleData,
  };
  console.log(payload);

  try {
    const response = axiosInstance.post("/resume/add-resume", payload);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteResume = async (resumeId) => {
  try {
    const response = await axiosInstance.delete(
      `/resume/delete-resume/${resumeId}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getAllResumeByUserId = async () => {
  try {
    const response = await axiosInstance.get("/resume/getResumeByUserId")
    return response
  } catch (error) {
    console.log(error);
  }
};

export const getResumeDataByResumeId = async (id)=>{
   try {
    const response = await axiosInstance.get(`/resume/getResumeDataByResumeId/${id}`)
    return response
   } catch (error) {
     console.log(error)
   }
}

export const updateResume = async(id,formData)=>{
   try {
    const response = await axiosInstance.put(`/resume/update/${id}`,{formData})
    return response
   } catch (error) {
      console.log(error)
   }
}
