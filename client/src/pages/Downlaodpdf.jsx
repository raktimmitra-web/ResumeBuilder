import axiosInstance from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";
import resumeStore from "@/store/resumeStore";
import { Download } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Downlaodpdf = () => {
  const { formData, templateData } = resumeStore();
  const navigate = useNavigate()
  console.log(formData, templateData, "aaaaaaaaaaa");
  const downloadPdf = async () => {
    try {
      const response = await axiosInstance.post(
        "/resume/generate-pdf",
        { resumeData: formData, template: templateData },
        { responseType: "blob" }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      link.click();
      toast.success("PDF downloaded")
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast.error("Download error")
    }
  };
  const handleNavigate = async () => {
    navigate("/dashboard")
  };
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="max-w-2xl w-full mx-auto px-12 py-8 border rounded-2xl shadow hover:shadow-xl">
        <div className="flex flex-col pb-8">
          <p className="text-4xl  font-bold text-gray-800 mb-2 text-center">
            Download Your PDF
          </p>
          <p className="text-gray-500 text-center">
            Your document is ready. You can download it or return to your
            dashboard.
          </p>
        </div>
        <div className="flex justify-center gap-8 ">
          <Button
            onClick={downloadPdf}
            className="bg-gray-500 hover:bg-gray-700 p-6"
          >
            Download Pdf{" "}
            <span>
              <Download />
            </span>
          </Button>
          <Button onClick={handleNavigate} className={"bg-gray-700 p-6"}>
            Go To Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Downlaodpdf;
