import Resume from "../models/resumeModel.js";
import puppeteer from "puppeteer";
import { generateResumeHTML } from "../templates/generateResumeHTML.js";

export const addResume = async (req, res) => {
  const {
    title,
    personalInfo,
    summary,
    education,
    experiences,
    projects,
    certifications,
    courses,
    skills,
    achievments,
    languages,
    template,
  } = req.body;
  if (!personalInfo) {
    return res.status(400).json({ message: "Personal Info  is needed" });
  }
  const userId = req.userId;
  if (!userId) {
    return res.status(400).json({ message: "User Id is needed" });
  }

  const newResume = await Resume.create({
    userId,
    title,
    personalInfo,
    summary,
    education,
    experiences,
    projects,
    certifications,
    courses,
    skills,
    achievments,
    languages,
    template,
  });

  return res.status(201).json({ message: "New resume created", newResume });
};

export const updateResume = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json("Resume Id is needed");
    }
    const { formData } = req.body;
    const updatedResume = await Resume.findByIdAndUpdate(id, {
      $set: formData,
    });
    return res.status(200).json({ message: "Resume Updated", updatedResume });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json("Resume Id is needed");
    }
    const resume = await Resume.findByIdAndDelete(id);
    return res.status(200).json({ message: "Resume Deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const getResumeByUserId = async (req, res) => {
  const userId = req.userId;
  if (!userId) {
    return res.status(400).json({ message: "User Id is needed" });
  }
  const resume = await Resume.find({ userId });
  return res.status(200).json({ message: "Resume Found", resume });
};

export const getResumeDataByResumeId = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Resume Id is needed" });
  }
  const resume = await Resume.findById(id);
  return res.status(200).json({ message: "Resume Found", resume });
};

export const downloadResume = async (req, res) => {
  try {
    const { resumeData, template } = req.body;

    const html = generateResumeHTML(resumeData, template);

    const browser = await puppeteer.launch({
      headless: "new", 
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="resume.pdf"`,
    });

    res.send(pdfBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating PDF");
  }
};
