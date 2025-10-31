import React from "react";

const Template2 = React.forwardRef(({ resumeData }, ref) => {
  const {
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
  } = resumeData || {};

  return (
    <div>
      <div
        ref={ref}
        className="max-w-5xl mx-auto bg-white text-gray-900  rounded-md overflow-hidden"
      >
        <div className=" flex flex-col md:flex-row print:flex-row">
          {/* LEFT COLUMN */}
          <aside className="md:w-1/3 bg-gray-100 p-6 space-y-6">
            {/* Personal Info */}
            {personalInfo && (
              <div>
                <h1 className="text-3xl font-bold mb-1">
                  {personalInfo.firstName} {personalInfo.lastName}
                </h1>
                <p className="text-gray-600 mb-4 text-sm">
                  {personalInfo.address}
                </p>

                <div className="text-sm space-y-1">
                  {personalInfo.email && <p>Email: {personalInfo.email}</p>}
                  {personalInfo.phone && <p>Phone: {personalInfo.phone}</p>}
                </div>

                <div className="flex flex-col gap-1 mt-4 text-blue-600 text-sm">
                  {personalInfo.githubLink && (
                    <a
                      href={`https://${personalInfo.githubLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {personalInfo.linkedinLink && (
                    <a
                      href={`https://${personalInfo.linkedinLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  )}
                  {personalInfo.portfolioLink && (
                    <a
                      href={`https://${personalInfo.portfolioLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Portfolio
                    </a>
                  )}
                  {personalInfo.twitterLink && (
                    <a
                      href={`https://${personalInfo.twitterLink}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Skills */}
            {skills?.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-400 mb-2 pb-1">
                  Skills
                </h2>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-200 px-3 py-1 rounded whitespace-nowrap"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Languages */}
            {languages?.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-400 mb-2 pb-1">
                  Languages
                </h2>
                <ul className="flex flex-wrap gap-2 text-sm">
                  {languages.map((lang, idx) => (
                    <li key={idx} className="bg-gray-200 px-3 py-1 rounded">
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Achievements */}
            {achievments?.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-400 mb-2 pb-1">
                  Achievements
                </h2>
                <ul className="list-disc ml-5 text-sm text-gray-700">
                  {achievments.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          {/* RIGHT COLUMN */}
          <main className="md:w-2/3 p-6 space-y-6 print:w-full">
            {/* Summary */}
            {summary && (
              <section>
                <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
                  Profile Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">{summary}</p>
              </section>
            )}

            {/* Experience */}
            {experiences?.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
                  Work Experience
                </h2>
                <div className="space-y-3">
                  {experiences.map((exp, idx) => (
                    <div key={idx}>
                      {exp.position && (
                        <p className="font-semibold text-lg">{exp.position}</p>
                      )}
                      {exp.companyName && (
                        <p className="text-gray-700">{exp.companyName}</p>
                      )}
                      {(exp.startDate || exp.endDate) && (
                        <p className="text-sm text-gray-500">
                          {exp.startDate} - {exp.endDate || "Present"}
                        </p>
                      )}
                      {exp.description && (
                        <p className="text-gray-700 mt-1 text-sm">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {education?.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
                  Education
                </h2>
                <div className="space-y-3">
                  {education.map((edu, idx) => (
                    <div key={idx}>
                      {edu.institutionName && (
                        <p className="font-semibold text-lg">
                          {edu.institutionName}
                        </p>
                      )}
                      {(edu.degree || edu.fieldOfStudy) && (
                        <p className="text-gray-700">
                          {edu.degree}{" "}
                          {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                        </p>
                      )}
                      {(edu.startDate || edu.endDate) && (
                        <p className="text-sm text-gray-500">
                          {edu.startDate} - {edu.endDate || "Present"}
                        </p>
                      )}
                      {edu.obtainedPercentage && (
                        <p className="text-sm text-gray-600">
                          Obtained Percentage : {edu.obtainedPercentage}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {projects?.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
                  Projects
                </h2>
                <div className="space-y-3">
                  {projects.map((proj, idx) => (
                    <div key={idx}>
                      {proj.title && (
                        <p className="font-semibold text-lg">{proj.title}</p>
                      )}
                      {proj.description && (
                        <p className="text-gray-700">{proj.description}</p>
                      )}
                      {(proj.githubLink || proj.liveLink) && (
                        <div className="text-blue-600 space-x-3 text-sm">
                          {proj.githubLink && (
                            <a
                              href={`https://${personalInfo.githubLink}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              GitHub
                            </a>
                          )}
                          {proj.liveLink && (
                            <a
                              href={`https://${personalInfo.liveLink}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications & Courses */}
            {(certifications?.length > 0 || courses?.length > 0) && (
              <section>
                <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
                  Certifications & Courses
                </h2>

                {certifications?.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {certifications.map((cert, idx) => (
                      <div key={idx}>
                        {cert.title && (
                          <p className="font-semibold">{cert.title}</p>
                        )}
                        {cert.provider && (
                          <p className="text-gray-700">{cert.provider}</p>
                        )}
                        {cert.year && (
                          <p className="text-sm text-gray-500">{cert.year}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {courses?.length > 0 && (
                  <div className="space-y-2">
                    {courses.map((course, idx) => (
                      <div key={idx}>
                        {course.title && (
                          <p className="font-semibold">{course.title}</p>
                        )}
                        {(course.startDate || course.endDate) && (
                          <p className="text-sm text-gray-500">
                            {course.startDate} - {course.endDate || "Present"}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}
          </main>
        </div>
      </div>
    </div>
  );
});

export default Template2;
