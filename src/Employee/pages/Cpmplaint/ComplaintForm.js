import React from "react";
import { UserProfile } from "../../components/UserProfile";
import { useFormik} from 'formik';
import { descSchema} from "../../../utils/validation";
import * as Yup from 'yup';
import { postData1 } from "../../../APIs";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export const ComplaintForm = () => {
  const navigate=useNavigate();
    const formik=useFormik({
      initialValues:{
        description:""
      },
      validationSchema: Yup.object({
        description:descSchema
      }),
      onSubmit: (values) => {
        handleForm(values);
      },
    });

    const handleForm=async (values)=>{
      const res=await postData1("api/v1/add_complaint/",values,true);
      if(res?.status_code===200){
        navigate("/employee/complaint");
      }
      else{
        toast.error("Something went wrong, try again !");
      }
    };
  return (
    <>
      <div className="leavForm mb-5">
        <div>
          <UserProfile />
        </div>

        <div className="LeaveForm flex  justify-center  mt-8">
          <div className=" w-[60%]">
            <h1 className="text-3xl font-semibold text-orange-600">
              Complaints Box</h1>
            <div className=" mt-3">
              <form onSubmit={formik.handleSubmit}>

                {/* <div className="mb-5 ">
                    <label htmlFor="email" className="block text-xl mb-1 font-medium text-gray-600">Reporting Manager Email</label>
                  </div> */}
                <div className="mb-5 ">
                  <label htmlFor="description" className="block text-xl mb-1 font-medium text-gray-600">Description</label>
                  <textarea 
                    name="description" 
                    id="Description" 
                    placeholder="description" 
                    className="utline-none mt-1 p-2 w-full border rounded-md outline-none" cols="10" rows="6"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    >
                    </textarea>
                    {formik.errors.description && <p className="text-red-600">{formik.errors.description}</p>}

                </div>
                <div className='text-start items-center justify-center'>
                  <button type="submit" className="bg-orange-600 mt-2 text-white font-bold p-2 rounded-md w-[100%] hover:bg-gray-400 hover:text-black">Submit</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}