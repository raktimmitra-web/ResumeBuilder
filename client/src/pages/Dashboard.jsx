import Footer from "@/components/Footer";
import { ResumeStartForm } from "@/components/forms/ResumeStartForm";
import Header from "@/components/Header";
import ResumeSection from "@/components/ResumeSection";
import { Button } from "@/components/ui/button";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between w-full px-8 md:px-36">
        <h1 className="text-xl font-semibold">My Resumes</h1>
        <ResumeStartForm />
      </div>
      <div className="w-full px-8 md:px-36 py-8 min-h-[80vh]">
        <ResumeSection />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
