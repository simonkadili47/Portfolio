import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

const Resume = () => {
  return (
    <div className="px-4 flex w-full">
      {/* Left Section */}
      <div className="font-bold ml-6 text-left w-1/4 sticky top-0">
        <p>Education</p>
        <p>Experience</p>
        <p>Skills</p>
        <p>Awards</p>
      </div>

      {/* Right Section (Education and Experience) */}
      <div className="ml-40 text-blue-700 font-bold text-3xl flex flex-col items-start max-w-full w-full">
        {/* Education Section */}
        <div className="w-full max-w-full">
          <p className="text-left mr-16">Educational</p>
          <div className="mt-4 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-4">
              <MdOutlineCastForEducation className="text-white text-2xl" />
            </div>
            <p className="ml-2 text-gray-700 text-lg">2022-2025</p>
          </div>

          <div className="mb-2 ml-10 text-left text-2xl font-bold text-black max-w-xl">
            <p>Bachelor of Science in Information Technology.</p>
            <span className="text-lg">
              <p>Ardhi University</p>
            </span>
            <span className="text-gray-400 text-lg">
              <p>Graduated with GPA</p>
            </span>
            <div className="border mt-4 w-auto"></div>
          </div>

          <div className="mt-4 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-4">
              <MdOutlineCastForEducation className="text-white text-2xl" />
            </div>
            <p className="ml-2 text-gray-700 text-lg">2022-2025</p>
          </div>

          <div className="mb-2 ml-10 text-left text-2xl font-bold text-black max-w-xl">
            <p>Secondary Education</p>
            <span className="text-lg">
              <p>Kisarawe Lutheran Junior Seminary</p>
            </span>
            <span className="text-gray-400 text-lg">
              <p>Took science subjects</p>
            </span>
            <div className="border mt-4 w-auto"></div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-blue-700 font-bold text-3xl flex flex-col items-start max-w-full w-full">
          <p>Experience</p>
          <div className="mt-4 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-4">
              <MdOutlineCastForEducation className="text-white text-2xl" />
            </div>
            <p className="ml-2 text-gray-700 text-lg">12/2024 - Present</p>
          </div>

          <div className="mb-2 ml-10 text-left text-2xl font-bold text-black w-full">
            <p>Full Stack Web Developer</p>
            <span className="text-lg">
              <p>Upwork, World-Wide</p>
            </span>
            <div className="mt-4 flex flex-wrap w-full">
              <span className="text-gray-400 text-lg flex items-start mb-2 w-full">
                <GoDotFill className="text-2xl mr-2" />
                Designed and developed websites, portals, and large-scale web
                applications for multiple clients.
              </span>
              <span className="text-gray-400 text-lg flex items-start mb-2 w-full">
                <GoDotFill className="text-2xl mr-2" />
                Utilized a diverse range of technologies to create dynamic web
                applications tailored to client needs.
              </span>
              <span className="text-gray-400 text-lg flex items-start mb-2 w-full">
                <GoDotFill className="text-2xl mr-2" />
                Collaborated closely with UI and UX professionals to enhance the
                usability and visual appeal of websites.
              </span>
              <span className="text-gray-400 text-lg flex items-start mb-2 w-full">
                <GoDotFill className="text-2xl mr-2" />
                Prepared and delivered design presentations and proposals to
                clients.
              </span>
            </div>
            <div className="border mt-4 w-full"></div>
          </div>

          <div className="mt-4 flex items-center justify-start">
            <div className="bg-blue-700 rounded-full p-4">
              <MdOutlineCastForEducation className="text-white text-2xl" />
            </div>
            <p className="ml-2 text-gray-700 text-lg">07/2024-10/2025</p>
          </div>

          <div className="mb-2 ml-10 text-left text-2xl font-bold text-black w-full">
            <p>Web Master</p>
            <span className="text-lg">
              <p>Amecore Limited, Dar es Salaam</p>
            </span>
            <div className="mt-4 flex flex-wrap w-full">
              <span className="text-gray-400 text-lg flex items-start mb-2 w-full">
                <GoDotFill className="text-md mt-1 mr-2" />
                Developed company website mrkuku.org and company newsletter-blog blog.mrkuku.org
              </span>
              <span className="text-gray-400 text-lg flex items-start mb-2 w-full">
                <GoDotFill className="text-2xl mr-2" />
                Assisted employees with the use of company websites through one-on-one support, user guides, and training sessions.
              </span>
              <span className="text-gray-400 text-lg flex items-start mb-2 w-full">
                <GoDotFill className="text-2xl mr-2" />
                Maintained current knowledge of best practices and emerging developments in web design, web development, and technology.
              </span>
              <span className="text-gray-400 text-lg flex items-start mb-2 w-full">
                <GoDotFill className="text-sm mt-1 mr-2" />
                Performed other related duties as assigned.
              </span>
            </div>
            <div className="border mt-4 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
