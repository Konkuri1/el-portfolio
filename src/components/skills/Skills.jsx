import React from "react";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 mx-5">
      <div className="personal mr-2">
        <h3 className="text-center font-bold">Soft Skills</h3>
        <div className="skills grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button className="rounded-full  p-2 text-black border bg-transparent">
           Effective Communication
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
           Adaptable
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
           Continuous Learning
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
           Teambuilding
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
           Persistence
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
           Result-Driven
          </button>
        </div>
      </div>
      <div className="creative">
        <h3 className="text-center font-bold">Technical Skills</h3>
        <div className="skills grid grid-cols-1 gap-2 sm:grid-cols-2">
          <button className="rounded-full  p-2 text-black border bg-transparent">
            HTML5
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
            CSS
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
            JavaScript
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
            React
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
            Material UI
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
            Express.js
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
            Node.js
          </button>
          <button className="rounded-full  p-2 text-black border bg-transparent">
            MongoDB
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
