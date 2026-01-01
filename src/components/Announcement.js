import React, { useState, useEffect } from "react";
import { postData1 } from "../APIs";
export const Announcement = () => {
  const [annouceList, setAnnouceList] = useState([]);

  useEffect(() => {
    handleAccouceLists();
  }, []);

  const handleAccouceLists = async () => {
    const res = await postData1("api/v1/get_announcements/", {}, true);
    if (res?.status_code === 200) {
      setAnnouceList(res?.data?.data);
    }
  };
  return (
    <>
      <div className="container announcement border px-2 py-2 mt-5 md:w-[90vw] xl:w-[53vw]">
        <div className="flex justify-between">
          <h2 className="text-2xl fotn-semibold">Annoucement</h2>
          {/* <div>
               <h2>Today 16 sep 2023</h2>
            </div> */}
        </div>

        {annouceList
          ?.sort((a, b) => new Date(b.id) - new Date(a.id))
          ?.slice(0, 4)
          ?.map((el) => {
            return (
              <div className="announceCard flex justify-between mt-3 bg-gray-200  px-2 py-2 rounded">
                <div>
                  <h3 className="text-base font-semibold ">{el?.title}</h3>
                  <p className="text-sm text-gray-600">{el?.details}</p>
                  <p className="text-sm">
                    {new Date(el?.date).toLocaleTimeString("default", {
                      minute: "2-digit",
                    })}{" "}
                    Minute ago
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-lg">
                    {" "}
                    <i class="bi bi-pin-angle-fill"></i>
                  </span>
                  <span className="text-lg">
                    <i class="bi bi-three-dots"></i>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
