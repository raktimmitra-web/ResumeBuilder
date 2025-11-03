import React from "react";

const Template1 = React.forwardRef(({ resumeData }, ref) => {
  console.log(resumeData);
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
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white text-gray-900 p-8 rounded "
    >
      {/* Personal Info */}
      {personalInfo && (
        <header className="border-b-2 border-gray-300 pb-4 mb-6">
          <h1 className="text-4xl font-bold break-words whitespace-pre-wrap">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <div className="text-sm mt-2 space-y-1 break-words whitespace-pre-wrap">
            {personalInfo.email && <p>Email: {personalInfo.email}</p>}
            {personalInfo.phone && <p>Phone: {personalInfo.phone}</p>}
            {personalInfo.address && <p>Address: {personalInfo.address}</p>}
            <div className="flex flex-wrap gap-3 text-blue-600 mt-1">
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
                  href={personalInfo.twitterLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </header>
      )}

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
            Summary
          </h2>
          <p className="text-gray-700 break-words whitespace-pre-wrap">{summary}</p>
        </section>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-3 text-gray-800">
            {skills.map((skill, idx) => (
              <li key={idx} className="bg-gray-100 px-3 py-1 rounded">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
            Education
          </h2>
          {education.map((edu, idx) => (
            <div key={idx} className="mb-3">
              {edu.institutionName && (
                <p className="font-semibold text-lg break-words whitespace-pre-wrap">{edu.institutionName}</p>
              )}
              {(edu.degree || edu.fieldOfStudy) && (
                <p className="text-gray-700 break-words whitespace-pre-wrap">
                  {edu.degree} {edu.fieldOfStudy && `in ${edu.fieldOfStudy}`}
                </p>
              )}
              {(edu.startDate || edu.endDate) && (
                <p className="text-sm text-gray-600">
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
        </section>
      )}

      {/* Experience */}
      {experiences?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
            Work Experience
          </h2>
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-3">
              {exp.position && (
                <p className="font-semibold text-lg break-words whitespace-pre-wrap">{exp.position}</p>
              )}
              {exp.companyName && (
                <p className="text-gray-700 break-words whitespace-pre-wrap">{exp.companyName}</p>
              )}
              {(exp.startDate || exp.endDate) && (
                <p className="text-sm text-gray-600">
                  {exp.startDate} - {exp.endDate || "Present"}
                </p>
              )}
              {exp.description && (
                <p className="text-gray-700 mt-1 break-words whitespace-pre-wrap">{exp.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
            Projects
          </h2>
          {projects.map((proj, idx) => (
            <div key={idx} className="mb-3">
              {proj.title && (
                <p className="font-semibold text-lg break-words whitespace-pre-wrap">{proj.title}</p>
              )}
              {proj.description && (
                <p className="text-gray-700 break-words whitespace-pre-wrap">{proj.description}</p>
              )}
              {(proj.githubLink || proj.liveLink) && (
                <div className="text-blue-600 space-x-3">
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
        </section>
      )}

      {/* Certifications */}
      {certifications?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
            Certifications
          </h2>
          {certifications.map((cert, idx) => (
            <div key={idx} className="mb-2">
              {cert.title && <p className="font-semibold break-words whitespace-pre-wrap">{cert.title}</p>}
              {cert.provider && (
                <p className="text-gray-700 break-words whitespace-pre-wrap">{cert.provider}</p>
              )}
              {cert.year && (
                <p className="text-sm text-gray-600 break-words whitespace-pre-wrap">{cert.year}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Courses */}
      {courses?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
            Courses
          </h2>
          {courses.map((course, idx) => (
            <div key={idx} className="mb-2">
              {course.title && <p className="font-semibold break-words whitespace-pre-wrap">{course.title}</p>}
              {(course.startDate || course.endDate) && (
                <p className="text-sm text-gray-600">
                  {course.startDate} - {course.endDate || "Present"}
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Achievements */}
      {achievments?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
            Achievements
          </h2>
          <ul className="list-disc ml-6 text-gray-800">
            {achievments.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {languages?.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 border-gray-300 mb-2">
            Languages
          </h2>
          <div className="flex flex-wrap gap-3 text-gray-800">
            {languages.map((lang, idx) => (
              <span key={idx} className="bg-gray-100 px-3 py-1 rounded break-words whitespace-pre-wrap">
                {lang}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
});

export default Template1;
