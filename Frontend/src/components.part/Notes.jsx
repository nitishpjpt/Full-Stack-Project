import axios from "axios";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/Notes"
      );
      setUser(response.data.data.notes);
      console.log(response.data.data.notes);
    };

    fetchDetails();
  }, []);

  return (
    <>
      <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 gap-3 place-items-center">
        {user.map((item, index) => (
          <div
            key={index}
            className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div className="relative mx-4 mt-4 h-[40vh] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
              <img
                src={item.fileUrl}
                className="h-full w-full object-cover"
                alt={item.title}
              />
            </div>
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {item.title}
                </p>
                <p className="flex font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  <h6 className="text-gray-700 ">sem:</h6>
                  {item.semester}
                </p>
              </div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                {item.description}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Download PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      <link
        rel="stylesheet"
        href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
      />
    </>
  );
};

export default Notes;
