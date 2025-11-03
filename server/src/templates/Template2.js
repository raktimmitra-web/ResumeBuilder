export function generateTemplate2HTML(data) {
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
  <div style="max-width:1000px;margin:0 auto;background:#ffffff;color:#111827;border-radius:8px;overflow:hidden;font-family:'Inter',sans-serif;">
    <div style="display:flex;flex-direction:column;">
      <style>
        @media print {
          .resume-container {
            flex-direction: row !important;
          }
        }
        @media (min-width:768px) {
          .resume-container {
            flex-direction: row !important;
          }
        }
      </style>

      <div class="resume-container" style="display:flex;flex-direction:column;">
        
        <!-- LEFT COLUMN -->
        <aside style="width:100%;max-width:33%;background:#f3f4f6;padding:24px;display:flex;flex-direction:column;gap:24px;">
          
          ${
            personalInfo.firstName || personalInfo.lastName
              ? `
            <div>
              <h1 style="font-size:28px;font-weight:700;margin:0 0 4px 0;">
                ${personalInfo.firstName || ""} ${personalInfo.lastName || ""}
              </h1>
              ${
                personalInfo.address
                  ? `<p style="color:#4b5563;margin:0 0 16px 0;font-size:14px;">${personalInfo.address}</p>`
                  : ""
              }
              <div style="font-size:14px;line-height:1.6;">
                ${
                  personalInfo.email
                    ? `<p style="margin:0;">Email: ${personalInfo.email}</p>`
                    : ""
                }
                ${
                  personalInfo.phone
                    ? `<p style="margin:0;">Phone: ${personalInfo.phone}</p>`
                    : ""
                }
              </div>
              <div style="margin-top:12px;display:flex;flex-direction:column;gap:4px;font-size:14px;">
                ${
                  personalInfo.githubLink
                    ? `<a href="https://${personalInfo.githubLink}" style="color:#2563eb;">GitHub</a>`
                    : ""
                }
                ${
                  personalInfo.linkedinLink
                    ? `<a href="https://${personalInfo.linkedinLink}" style="color:#2563eb;">LinkedIn</a>`
                    : ""
                }
                ${
                  personalInfo.portfolioLink
                    ? `<a href="https://${personalInfo.portfolioLink}" style="color:#2563eb;">Portfolio</a>`
                    : ""
                }
                ${
                  personalInfo.twitterLink
                    ? `<a href="https://${personalInfo.twitterLink}" style="color:#2563eb;">Twitter</a>`
                    : ""
                }
              </div>
            </div>`
              : ""
          }

          ${
            skills.length
              ? `
            <div>
              <h2 style="font-size:18px;font-weight:600;border-bottom:1px solid #9ca3af;padding-bottom:4px;margin-bottom:8px;">Skills</h2>
              <ul style="display:flex;flex-wrap:wrap;gap:6px;font-size:14px;margin:0;padding:0;">
                ${skills
                  .map(
                    (skill) =>
                      `<li style="background:#e5e7eb;padding:4px 10px;border-radius:4px;list-style:none;">${skill}</li>`
                  )
                  .join("")}
              </ul>
            </div>`
              : ""
          }

          ${
            languages.length
              ? `
            <div>
              <h2 style="font-size:18px;font-weight:600;border-bottom:1px solid #9ca3af;padding-bottom:4px;margin-bottom:8px;">Languages</h2>
              <ul style="display:flex;flex-wrap:wrap;gap:6px;font-size:14px;margin:0;padding:0;">
                ${languages
                  .map(
                    (lang) =>
                      `<li style="background:#e5e7eb;padding:4px 10px;border-radius:4px;list-style:none;">${lang}</li>`
                  )
                  .join("")}
              </ul>
            </div>`
              : ""
          }

          ${
            achievments.length
              ? `
            <div>
              <h2 style="font-size:18px;font-weight:600;border-bottom:1px solid #9ca3af;padding-bottom:4px;margin-bottom:8px;">Achievements</h2>
              <ul style="margin-left:18px;color:#374151;font-size:14px;">
                ${achievments.map((a) => `<li>${a}</li>`).join("")}
              </ul>
            </div>`
              : ""
          }
        </aside>

        <!-- RIGHT COLUMN -->
        <main style="width:100%;padding:24px;display:flex;flex-direction:column;gap:24px;">
          
          ${
            summary
              ? `
            <section>
              <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Profile Summary</h2>
              <p style="color:#374151;line-height:1.6;">${summary}</p>
            </section>`
              : ""
          }

          ${
            experiences.length
              ? `
            <section>
              <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Work Experience</h2>
              <div style="display:flex;flex-direction:column;gap:12px;">
                ${experiences
                  .map(
                    (exp) => `
                  <div>
                    ${
                      exp.position
                        ? `<p style="font-weight:600;font-size:16px;margin:0;">${exp.position}</p>`
                        : ""
                    }
                    ${
                      exp.companyName
                        ? `<p style="color:#374151;margin:0;">${exp.companyName}</p>`
                        : ""
                    }
                    ${
                      exp.startDate || exp.endDate
                        ? `<p style="font-size:13px;color:#6b7280;margin:0;">${
                            exp.startDate || ""
                          } - ${exp.endDate || "Present"}</p>`
                        : ""
                    }
                    ${
                      exp.description
                        ? `<p style="color:#374151;margin-top:4px;font-size:14px;">${exp.description}</p>`
                        : ""
                    }
                  </div>`
                  )
                  .join("")}
              </div>
            </section>`
              : ""
          }

          ${
            education.length
              ? `
            <section>
              <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Education</h2>
              <div style="display:flex;flex-direction:column;gap:12px;">
                ${education
                  .map(
                    (edu) => `
                  <div>
                    ${
                      edu.institutionName
                        ? `<p style="font-weight:600;font-size:16px;margin:0;">${edu.institutionName}</p>`
                        : ""
                    }
                    ${
                      edu.degree || edu.fieldOfStudy
                        ? `<p style="color:#374151;margin:0;">${
                            edu.degree || ""
                          } ${
                            edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ""
                          }</p>`
                        : ""
                    }
                    ${
                      edu.startDate || edu.endDate
                        ? `<p style="font-size:13px;color:#6b7280;margin:0;">${
                            edu.startDate || ""
                          } - ${edu.endDate || "Present"}</p>`
                        : ""
                    }
                    ${
                      edu.obtainedPercentage
                        ? `<p style="font-size:13px;color:#6b7280;margin:0;">Obtained Percentage: ${edu.obtainedPercentage}</p>`
                        : ""
                    }
                  </div>`
                  )
                  .join("")}
              </div>
            </section>`
              : ""
          }

          ${
            projects.length
              ? `
            <section>
              <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Projects</h2>
              <div style="display:flex;flex-direction:column;gap:12px;">
                ${projects
                  .map(
                    (proj) => `
                  <div>
                    ${
                      proj.title
                        ? `<p style="font-weight:600;font-size:16px;margin:0;">${proj.title}</p>`
                        : ""
                    }
                    ${
                      proj.description
                        ? `<p style="color:#374151;margin:0;">${proj.description}</p>`
                        : ""
                    }
                    <div style="margin-top:4px;font-size:14px;">
                      ${
                        proj.githubLink
                          ? `<a href="https://${proj.githubLink}" style="color:#2563eb;margin-right:8px;">GitHub</a>`
                          : ""
                      }
                      ${
                        proj.liveLink
                          ? `<a href="https://${proj.liveLink}" style="color:#2563eb;">Live Demo</a>`
                          : ""
                      }
                    </div>
                  </div>`
                  )
                  .join("")}
              </div>
            </section>`
              : ""
          }

          ${
            certifications.length || courses.length
              ? `
            <section>
              <h2 style="font-size:20px;font-weight:600;border-bottom:2px solid #d1d5db;margin-bottom:8px;">Certifications & Courses</h2>
              
              ${
                certifications.length
                  ? `
              <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
                ${certifications
                  .map(
                    (cert) => `
                  <div>
                    ${
                      cert.title
                        ? `<p style="font-weight:600;margin:0;">${cert.title}</p>`
                        : ""
                    }
                    ${
                      cert.provider
                        ? `<p style="color:#374151;margin:0;">${cert.provider}</p>`
                        : ""
                    }
                    ${
                      cert.year
                        ? `<p style="font-size:13px;color:#6b7280;margin:0;">${cert.year}</p>`
                        : ""
                    }
                  </div>`
                  )
                  .join("")}
              </div>`
                  : ""
              }

              ${
                courses.length
                  ? `
              <div style="display:flex;flex-direction:column;gap:8px;">
                ${courses
                  .map(
                    (course) => `
                  <div>
                    ${
                      course.title
                        ? `<p style="font-weight:600;margin:0;">${course.title}</p>`
                        : ""
                    }
                    ${
                      course.startDate || course.endDate
                        ? `<p style="font-size:13px;color:#6b7280;margin:0;">${
                            course.startDate || ""
                          } - ${course.endDate || "Present"}</p>`
                        : ""
                    }
                  </div>`
                  )
                  .join("")}
              </div>`
                  : ""
              }
            </section>`
              : ""
          }
        </main>
      </div>
    </div>
  </div>
  `;
}
