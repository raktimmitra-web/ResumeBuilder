import axiosInstance from "@/api/axiosInstance";
import { Button } from "@/components/ui/button";
import resumeStore from "@/store/resumeStore";
import { Download, FileText, Loader2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const DownloadPdf = () => {
  const { formData, templateData } = resumeStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const downloadPdf = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/resume/generate-pdf",
        { resumeData: formData, template: templateData },
        { responseType: "blob" }
      );

      // Create a blob from the PDF
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link to trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      link.click();

      // Cleanup and feedback
      window.URL.revokeObjectURL(url);
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast.error("Failed to download PDF");
    } finally {
      setLoading(false);
    }
  };

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl border border-gray-100 p-10 ">

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <FileText className="text-blue-600 w-10 h-10" />
          </div>

          <h1 className="text-3xl  font-bold text-gray-800">
            Your Resume Is Ready!
          </h1>

          <p className="text-gray-500 max-w-md">
            Your resume has been generated successfully. You can download your
            PDF or go back to your dashboard to manage your resumes.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <Button
              onClick={downloadPdf}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all flex items-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5" /> Downloading...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" /> Download PDF
                </>
              )}
            </Button>

            <Button
              onClick={handleNavigate}
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Go To Dashboard
            </Button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default DownloadPdf;
