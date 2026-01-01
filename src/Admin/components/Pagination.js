import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Pagination = (props) => {
  const handleNextPage = () => {
    if (props?.pageNo < props?.totalPage) {
      props.setPageNo(props?.pageNo + 1);
    }
  };
  const handlePrePage = () => {
    if (props?.pageNo > 1) {
      props.setPageNo(props?.pageNo - 1);
    }
  };
  return (
    <div className="flex items-center justify-end mt-5 pr-16">
      <h3>{`Total ${props?.totalItem} Per Page ${props?.perPage} ${props?.pageNo} of ${props.totalPage}`}</h3>
      <FaChevronLeft className="cursor-pointer mr-2" onClick={handlePrePage} />
      {new Array(5).fill(0).map((value, index) => {
        return (
          props?.pageNo + index <= props.totalPage && (
            <span
              onClick={() => props.setPageNo(props?.pageNo + index)}
              key={index}
              className={
                props?.pageNo + index === props?.pageNo
                  ? "text-white bg-cyan-400 w-6 flex items-center justify-center cursor-pointer"
                  : "bg-slate-200  m-2 w-6 flex items-center justify-center cursor-pointer"
              }
            >
              {props?.pageNo + index}
            </span>
          )
        );
      })}
      <FaChevronRight className="cursor-pointer ml-2" onClick={handleNextPage} />
    </div>
  );
};

export default Pagination;
