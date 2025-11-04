import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import resumeStore from "@/store/resumeStore";
import { useNavigate } from "react-router";

export function ResumeStartForm() {
  const [resumeTitle, setResumeTitle] = useState("");
  const { setTitleData, setResumeId } = resumeStore();
  const navigate = useNavigate();

  //handling the submission of Resume Title
  const handleSubmit = () => {
    console.log("Resume Title :", resumeTitle);
    setTitleData(resumeTitle);
    setResumeId(null);
    if (resumeTitle) navigate("/choose-template");
    else {
      //show toast
    }
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Create Resume</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              Create resume with just 3 step using ResuMine
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <Label htmlFor="title">Resume Title</Label>
            <Input
              id="title"
              name="title"
              defaultValue={resumeTitle}
              onChange={(e) => setResumeTitle(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>
              Start
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
