import { ChartNoAxesCombined, FileUser, HeartPlus } from "lucide-react";

export const dummyResume = {
  id: 1,
  name: "Raktim Mitra",
  description: ["data analyst", "marketing manager"],
  contactInfo: [
    {
      type: "email",
      value: "raktimmitra@me.com",
    },
    {
      type: "location",
      value: "India",
    },
    {
      type: "phone",
      value: "+91 1234567890",
    },
    {
      type: "linkedin",
      value: "https://www.linkedin.com/in/raktim-mitra/",
    },
    {
      type: "github",
      value: "https://github.com/raktimmitra",
    },
  ],
  skills: ["data analyst", "marketing manager"],
  profileSummary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quodLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod ",
  languages: ["English", "Hindi"],
  projects: [
    {
      id: 1,
      title: "Project 1",
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      title: "Project 2",
      technologies: ["React", "Node.js", "MongoDB"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ],
  workExperience: [
    {
      id: 1,
      jobTitle: "Data Analyst",
      company: "ABC Company",
      startDate: "2020-01-01",
      endDate: "2021-12-31",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      jobTitle: "Marketing Manager",
      company: "XYZ Company",
      startDate: "2021-01-01",
      endDate: "Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ],
  training: [
    {
      id: 1,
      title: "Data Analytics",
      institution: "ABC University",
      startDate: "2020-01-01",
      endDate: "2021-12-31",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
      id: 2,
      title: "Marketing Management",
      institution: "XYZ University",
      startDate: "2021-01-01",
      endDate: "Present",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  ],
};

export const footerOptions = [
  "About",
  "Accessibility",
  "Terms of Use",
  "Privacy Policy",
  "Contact",
];

export const services = [
  {
    icon: FileUser,
    title: "Easy To Use",
    description: "You can easily choose a theme and update your resume",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Make CV Online",
    description: "You can easily choose a theme and update your resume",
  },
  {
    icon: HeartPlus,
    title: "24*7 Support",
    description: "Get 24 X 7 support ",
  },
];

export const testimonials = [
  {
    name: "Aarav Patel",
    comment:
      "This platform made building my resume so easy! The templates are professional and user-friendly.",
    rating: 5,
  },
  {
    name: "Sophia Johnson",
    comment:
      "I love how intuitive the interface is. I was able to create and download my resume in minutes.",
    rating: 4,
  },
  {
    name: "Liam Smith",
    comment:
      "Great experience overall. Could use a few more customization options, but still an excellent tool.",
    rating: 4,
  },
];
export const resumes = [
  {
    id: 1,
    heading: "John Doe Resume",
    name: "John Doe",
    title: "Frontend Developer",
    summary:
      "Passionate frontend developer with 3+ years of experience in building responsive web applications.",
    location: "New York, USA",
    experience: "3 Years",
    skills: ["React", "JavaScript", "CSS", "HTML"],
    lastUpdated: "2025-10-10",
  },
  {
    id: 2,
    heading: "Example Resume",
    name: "Jane Smith",
    title: "UI/UX Designer",
    summary:
      "Creative designer focused on user-centric design and seamless user experiences.",
    location: "London, UK",
    experience: "4 Years",
    skills: ["Figma", "Sketch", "Adobe XD", "UX Research"],
    lastUpdated: "2025-09-28",
  },
  {
    id: 3,
    heading: "Example Resume",
    name: "Alex Johnson",
    title: "Full Stack Developer",
    summary:
      "Experienced full-stack developer skilled in building end-to-end web solutions.",
    location: "Toronto, Canada",
    experience: "5 Years",
    skills: ["Node.js", "React", "MongoDB", "Express.js"],
    lastUpdated: "2025-10-01",
  },
];

export const resumeFormDefaultValues = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    githubLink: "",
    linkedinLink: "",
    portfolioLink: "",
    twitterLink: "",
  },
  summary: "",
  education: [
    {
      institutionName: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      obtainedPercentage: "",
    },
  ],
  experiences: [
    {
      position: "",
      companyName: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ],
  projects: [
    {
      title: "",
      description: "",
      githubLink: "",
      liveLink: "",
      techStack: [""],
    },
  ],
  certifications: [
    {
      title: "",
      provider: "",
      year: "",
    },
  ],
  courses: [
    {
      title: "",
      startDate: "",
      endDate: "",
    },
  ],
  skills: [""],
  achievments: [""],
  languages: [""],
};

export const progressBarData = [
  {
    step: 1,
    text: "Personal Details",
  },
  {
    step: 2,
    text: "Education and Experiences",
  },
  {
    step: 3,
    text: "Projects",
  },
  {
    step: 4,
    text: "Certifications and Courses",
  },
  {
    step: 5,
    text: "Other Details",
  },
];





  // const contentRef1 = useRef(null);
  // const contentRef2 = useRef(null);
  // const navigate = useNavigate();

  // const reactToPrintFn = useReactToPrint({
  //   contentRef: selectedValue === "template_1" ? contentRef1 : contentRef2,
  // });

  // const handleSubmit = async () => {
  //   setTemplateData(selectedValue);
  //   reactToPrintFn();
  // };