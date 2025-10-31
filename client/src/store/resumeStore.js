import { create } from "zustand";
import {persist} from "zustand/middleware"
const resumeStore = create(
  persist((set) => ({
    titleData: {
      title: null,
    },
    formData: {
      personalInfo: {},
      education: [],
      experiences: [],
      projects: [],
      certifications: [],
      courses: [],
      skills: [],
      achievments: [],
      languages: [],
    },
    templateData: {
      template: null,
    },
    setTitleData: (data) => set({ titleData: data }),
    setFormData: (data) => set({ formData: data }),
    setTemplateData: (data) => set({ templateData: data }),
    clearResume : () => set({titleData:null,formData:null})
  }),
   {name: "resume-store"}
)
);

export default resumeStore