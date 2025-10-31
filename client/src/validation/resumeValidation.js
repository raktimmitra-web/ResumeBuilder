import * as yup from "yup";

//schema for resume validation
const httpLinkRegex =
  /^((https?):\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const resumeSchema = yup.object().shape({
  personalInfo: yup.object().shape({
    firstName: yup.string().matches(/^[^\s]+$/, 'No spaces are allowed').required("First Name is required"),
    lastName: yup.string().matches(/^[^\s]+$/, 'No spaces are allowed').required("Last Name is required"),
    email: yup
      .string()
      .email("Use a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^\d+$/, "Only digits are allowed")
      .min(10, "Minimum 10 digits required")
      .max(15, "Maximum 15 digits allowed")
      .required("Phone number is required"),
    address: yup.string().optional(),
    githubLink: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        String(originalValue).trim() === "" ? null : value
      )
      .matches(httpLinkRegex, "Add a valid link")
      .optional(),
    linkedinLink: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        String(originalValue).trim() === "" ? null : value
      )
      .matches(httpLinkRegex, "Add a valid link")
      .optional(),
    portfolioLink: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        String(originalValue).trim() === "" ? null : value
      )
      .matches(httpLinkRegex, "Add a valid link")
      .optional(),
    twitterLink: yup
      .string()
      .nullable()
      .transform((value, originalValue) =>
        String(originalValue).trim() === "" ? null : value
      )
      .matches(httpLinkRegex, "Add a valid link")
      .optional(),
  }),
  summary: yup.string().max(500, "500 characters max").optional(),
  education: yup.array().of(
    yup.object().shape({
      institutionName: yup.string().optional(),
      degree: yup.string().optional(),
      fieldOfStudy: yup.string().optional(),
      startDate: yup
        .string()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .optional(),
      endDate: yup
        .string()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .test(
          "is-after-start",
          "End date should be after start date",
          function (value) {
            const { startDate } = this.parent;
            if (!startDate) return false;
            if (!value) return true;
            return new Date(value) > new Date(startDate);
          }
        )
        .optional(),
      obtainedPercentage: yup
        .number()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .max(100, "Percentage should be below hundred")
        .optional(),
    })
  ),
  experiences: yup.array().of(
    yup.object().shape({
      position: yup.string().optional(),
      companyName: yup.string().optional(),
      startDate: yup
        .string()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .optional(),
      endDate: yup
        .string()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .test(
          "is-after-start",
          "End date should be after start date",
          function (value) {
            const { startDate } = this.parent;
            if (!startDate) return false;
            if (!value) return true;
            return new Date(value) > new Date(startDate);
          }
        )
        .optional(),
      description: yup.string().optional(),
    })
  ),
  projects: yup.array().of(
    yup.object().shape({
      title: yup.string().optional(),
      description: yup.string().optional(),
      githubLink: yup
        .string()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .matches(httpLinkRegex, "Add a valid link")
        .optional(),
      liveLink: yup
        .string()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .matches(httpLinkRegex, "Add a valid link")
        .optional(),
      techStack: yup.array().of(yup.string()).optional(),
    })
  ),
  certifications: yup.array().of(
    yup.object().shape({
      title: yup.string().optional(),
      provider: yup.string().optional(),
      year: yup
        .number()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .optional(),
    })
  ),
  courses: yup.array().of(
    yup.object().shape({
      title: yup.string().optional(),
      startDate: yup
        .string()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .optional(),
      endDate: yup
        .string()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .test(
          "is-after-start",
          "End date should be after start date",
          function (value) {
            const { startDate } = this.parent;
            if (!startDate) return false;
            if ( !value) return true;
            return new Date(value) > new Date(startDate);
          }
        )
        .optional(),
    })
  ),
  skills: yup.array().of(yup.string()).optional(),
  achievments: yup.array().of(yup.string()).optional(),
  languages: yup.array().of(yup.string()).optional(),
});
