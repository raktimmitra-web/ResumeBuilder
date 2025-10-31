import mongoose from "mongoose";

const resumeSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title:{
     type: String,
     required: true
    },
    personalInfo: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: Number,
      address: String,
      githubLink: String,
      linkedinLink: String,
      portfolioLink: String,
      twitterLink: String,
    },
    summary: String,
    education: [
      {
        institutionName: String,
        degree: String,
        fieldOfStudy: String,
        startDate: String,
        endDate: String,
        obtainedPercentage: Number,
      },
    ],
    experiences: [
      {
        companyName: String,
        position: String,
        startDate: String,
        endDate: String,
        description: String,
      },
    ],
    projects: [
      {
        title: String,
        description: String,
        githubLink: String,
        liveLink: String,
        techStack: [String],
      },
    ],
    certifications: [
      {
        title: String,
        provider: String,
        year: String,
      },
    ],
    courses: [
      {
        title: String,
        startDate: String,
        endDate: String,
      },
    ],
    skills: [String],
    achievments: [String],
    languages: [String],
    template: String,
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;
