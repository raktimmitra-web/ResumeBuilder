export function generateTemplate1HTML(data) {
  const {
    personalInfo = {},
    summary = "",
    education = [],
    experiences = [],
    projects = [],
    certifications = [],
    courses = [],
    skills = [],
    achievments = [],
    languages = [],
  } = data || {};

  return `
    <div style="max-width:800px;margin:0 auto;background:white;color:#111827;padding:32px;border-radius:8px;font-family:'Inter',sans-serif;">
      
      ${personalInfo.firstName || personalInfo.lastName ? `
        <header style="border-bottom:2px solid #d1d5db;padding-bottom:16px;margin-bottom:24px;">
          <h1 style="font-size:32px;font-weight:700;margin:0;">
            ${personalInfo.firstName || ""} ${personalInfo.lastName || ""}
          </h1>
          <div style="font-size:14px;margin-top:8px;line-height:1.6;">
            ${personalInfo.email ? `<p>Email: ${personalInfo.email}</p>` : ""}
            ${personalInfo.phone ? `<p>Phone: ${personalInfo.phone}</p>` : ""}
            ${personalInfo.address ? `<p>Address: ${personalInfo.address}</p>` : ""}
            <div style="margin-top:4px;">
              ${personalInfo.githubLink ? `<a href="https://${personalInfo.githubLink}" style="color:#2563eb;margin-right:8px;">GitHub</a>` : ""}
              ${personalInfo.linkedinLink ? `<a href="https://${personalInfo.linkedinLink}" style="color:#2563eb;margin-right:8px;">LinkedIn</a>` : ""}
              ${personalInfo.portfolioLink ? `<a href="https://${personalInfo.portfolioLink}" style="color:#2563eb;margin-right:8px;">Portfolio</a>` : ""}
              ${personalInfo.twitterLink ? `<a href="https://${personalInfo.twitterLink}" style="color:#2563eb;">Twitter</a>` : ""}
            </div>
          </div>
        </header>
      ` : ""}

      ${summary ? `
        <section style="margin-bottom:24px;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Summary</h2>
          <p style="color:#374151;">${summary}</p>
        </section>
      ` : ""}

      ${skills.length ? `
        <section style="margin-bottom:24px;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Skills</h2>
          <ul style="display:flex;flex-wrap:wrap;gap:8px;padding:0;margin:0;">
            ${skills.map(skill => `<li style="background:#f3f4f6;padding:4px 12px;border-radius:4px;">${skill}</li>`).join("")}
          </ul>
        </section>
      ` : ""}

      ${education.length ? `
        <section style="margin-bottom:24px;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Education</h2>
          ${education.map(edu => `
            <div style="margin-bottom:12px;">
              ${edu.institutionName ? `<p style="font-weight:600;font-size:16px;margin:0;">${edu.institutionName}</p>` : ""}
              ${(edu.degree || edu.fieldOfStudy) ? `<p style="color:#374151;margin:0;">${edu.degree || ""} ${edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ""}</p>` : ""}
              ${(edu.startDate || edu.endDate) ? `<p style="font-size:13px;color:#6b7280;margin:0;">${edu.startDate || ""} - ${edu.endDate || "Present"}</p>` : ""}
              ${edu.obtainedPercentage ? `<p style="font-size:13px;color:#6b7280;margin:0;">Obtained Percentage: ${edu.obtainedPercentage}</p>` : ""}
            </div>
          `).join("")}
        </section>
      ` : ""}

      ${experiences.length ? `
        <section style="margin-bottom:24px;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Work Experience</h2>
          ${experiences.map(exp => `
            <div style="margin-bottom:12px;">
              ${exp.position ? `<p style="font-weight:600;font-size:16px;margin:0;">${exp.position}</p>` : ""}
              ${exp.companyName ? `<p style="color:#374151;margin:0;">${exp.companyName}</p>` : ""}
              ${(exp.startDate || exp.endDate) ? `<p style="font-size:13px;color:#6b7280;margin:0;">${exp.startDate || ""} - ${exp.endDate || "Present"}</p>` : ""}
              ${exp.description ? `<p style="color:#374151;margin-top:4px;">${exp.description}</p>` : ""}
            </div>
          `).join("")}
        </section>
      ` : ""}

      ${projects.length ? `
        <section style="margin-bottom:24px;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Projects</h2>
          ${projects.map(proj => `
            <div style="margin-bottom:12px;">
              ${proj.title ? `<p style="font-weight:600;font-size:16px;margin:0;">${proj.title}</p>` : ""}
              ${proj.description ? `<p style="color:#374151;margin:0;">${proj.description}</p>` : ""}
              <div style="margin-top:4px;">
                ${proj.githubLink ? `<a href="https://${proj.githubLink}" style="color:#2563eb;margin-right:8px;">GitHub</a>` : ""}
                ${proj.liveLink ? `<a href="https://${proj.liveLink}" style="color:#2563eb;">Live Demo</a>` : ""}
              </div>
            </div>
          `).join("")}
        </section>
      ` : ""}

      ${certifications.length ? `
        <section style="margin-bottom:24px;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Certifications</h2>
          ${certifications.map(cert => `
            <div style="margin-bottom:8px;">
              ${cert.title ? `<p style="font-weight:600;margin:0;">${cert.title}</p>` : ""}
              ${cert.provider ? `<p style="color:#374151;margin:0;">${cert.provider}</p>` : ""}
              ${cert.year ? `<p style="font-size:13px;color:#6b7280;margin:0;">${cert.year}</p>` : ""}
            </div>
          `).join("")}
        </section>
      ` : ""}

      ${courses.length ? `
        <section style="margin-bottom:24px;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Courses</h2>
          ${courses.map(course => `
            <div style="margin-bottom:8px;">
              ${course.title ? `<p style="font-weight:600;margin:0;">${course.title}</p>` : ""}
              ${(course.startDate || course.endDate) ? `<p style="font-size:13px;color:#6b7280;margin:0;">${course.startDate || ""} - ${course.endDate || "Present"}</p>` : ""}
            </div>
          `).join("")}
        </section>
      ` : ""}

      ${achievments.length ? `
        <section style="margin-bottom:24px;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Achievements</h2>
          <ul style="margin-left:20px;color:#1f2937;">
            ${achievments.map(a => `<li>${a}</li>`).join("")}
          </ul>
        </section>
      ` : ""}

      ${languages.length ? `
        <section style="margin-bottom:24px;">
          <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Languages</h2>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${languages.map(lang => `<span style="background:#f3f4f6;padding:4px 12px;border-radius:4px;">${lang}</span>`).join("")}
          </div>
        </section>
      ` : ""}
    </div>
  `;
}
