import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Download, FilePenLine, Trash2 } from "lucide-react";
import {
  deleteResume,
  getAllResumeByUserId,
  getResumeDataByResumeId,
} from "@/api/resumeRoutes";
import { useNavigate } from "react-router";
import resumeStore from "@/store/resumeStore";
import { ResumeStartForm } from "./forms/ResumeStartForm";
import toast from "react-hot-toast";
import DialogBox from "./DialogBox";

const ResumeSection = () => {
  const [allResumes, setAllResumes] = useState([]);
  const { setFormData } = resumeStore();
  const navigate = useNavigate();
  const handleResumeDelete = async (resumeId) => {
    try {
      const response = await deleteResume(resumeId);
      const updatedResumes = allResumes.filter(
        (resume) => resume._id !== resumeId
      );
      setAllResumes(updatedResumes);
      toast.success("Resume Deleted Succesfully");
    } catch (error) {
      console.log(error);
      toast.success("Issue during deletion");
    }
  };

  const handleResumeDownload = async (resumeId) => {
    let resumeData = await getResumeDataByResumeId(resumeId);
    resumeData = resumeData.data.resume;
    setFormData(resumeData);
    navigate("/downloadPdf");
  };
  useEffect(() => {
    const getAllResume = async () => {
      try {
        const response = await getAllResumeByUserId();
        console.log(response.data.resume);
        setAllResumes(response.data.resume);
      } catch (error) {
        console.log(error);
      }
    };
    getAllResume();
  }, []);
  if (allResumes.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[30vh] gap-y-8">
        <div className="text-3xl font-semibold w-full text-center">
          You Have No Resume
        </div>
        <div>
          <ResumeStartForm />
        </div>
      </div>
    );
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {allResumes.map((resume) => (
        <div
          key={resume._id}
          className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl p-5 border border-gray-100 flex flex-col justify-between"
        >
          <div>
            <h1 className="text-lg font-semibold text-gray-800 mb-1">
              {resume.title}
            </h1>
            <p className="text-sm text-gray-600 font-medium">
              {resume.personalInfo?.firstName} {resume.personalInfo?.lastName}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {resume.personalInfo?.email}
            </p>
          </div>
          <div className="flex gap-3 mt-5">
            <Button
              className="flex-1 bg-accent border border-black text-black hover:bg-white transition-colors duration-200 py-2 rounded-md flex items-center justify-center gap-2"
              title="Edit"
              onClick={() => navigate(`/edit-resume/${resume._id}`)}
            >
              <FilePenLine size={16} />
              <span>Edit</span>
            </Button>

            <Button
              className="flex-1  text-white  transition-colors duration-200 py-2 rounded-md flex items-center justify-center gap-2"
              onClick={() => handleResumeDownload(resume._id)}
              title="Download"
            >
              <Download size={16} />
            </Button>

            <Button
              command="show-modal"
              commandfor="dialog"
              title="Delete"
              className="flex-1 bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 py-2 rounded-md flex items-center justify-center gap-2"
            >
              <Trash2 size={16} />
            </Button>
            <DialogBox
              onConfirm={() => {
                handleResumeDelete(resume._id);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeSection;
