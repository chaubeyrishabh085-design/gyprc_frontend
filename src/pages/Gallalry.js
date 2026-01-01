
import React from 'react';
import gallery1 from "../assets/gallery/gallery1.jpg"
import gallery2 from "../assets/gallery/gallery2.jpg"
import gallery3 from "../assets/gallery/gallery3.jpg"
import gallery4 from "../assets/gallery/gallery4.jpg"
import gallery5 from "../assets/gallery/gallery5.jpg"
import gallery6 from "../assets/gallery/gallery6.jpg"
import gallery7 from "../assets/gallery/gallery7.jpg"
import gallery8 from "../assets/gallery/gallery8.jpg"
import gallery9 from "../assets/gallery/gallery9.jpg"
import gallery10 from "../assets/gallery/gallery10.jpg"
import gallery11 from "../assets/gallery/gallery11.jpg"
import gallery12 from "../assets/gallery/gallery12.jpg"
import gallery13 from "../assets/gallery/gallery13.jpg"
import gallery14 from "../assets/gallery/gallery14.jpg"
import gallery15 from "../assets/gallery/gallery15.jpg"
import gallery16 from "../assets/gallery/gallery16.jpg"
import gallery17 from "../assets/gallery/gallery17.jpg"
import gallery18 from "../assets/gallery/gallery18.jpg"
import gallery19 from "../assets/gallery/gallery19.jpg"
import gallery20 from "../assets/gallery/gallery20.jpg"

const data = [
  {image: gallery1,},  {image: gallery2,},  {image: gallery3,},  {image: gallery4,},  
];

const BitBeedata = [
 
  {image: gallery5,},  {image: gallery6,},  {image: gallery7,},  {image: gallery8,},
  
];

const TingleTasteData = [

  {image: gallery9,},  {image: gallery10,},  {image: gallery11,},  {image: gallery12,},
];

const EquipMedyData= [

  {image: gallery13,},  {image: gallery14,},  {image: gallery15,},  {image: gallery16,},
];
const NimmminData = [
  {image: gallery17,},  {image: gallery18,},  {image: gallery19,},  {image: gallery20,},
];



export const Gallery = ({ data }) => {
  return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 ">
      {data.map((item, index) => (
        <div key={index} className="relative overflow-hidden bg-white rounded-lg shadow-lg hover:scale-110 duration-700 ">
          <img src={item.image} alt={item.title} className="object-cover w-full h-48" />
          {/* <div className="p-0">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div> */}
        </div>
      ))}
    </div>
  </>
  );
};

export const Gallery2 = () => {
  return (
    <div className='container mx-auto px-6' >

    <div className="min-h-screen  pt-[100px]">
      <h1 className="text-3xl font-bold text-text-start my-8">GYPR Gallery</h1>
      <Gallery data={data} />

{/* // EquipMedy */}

<div className=" ">
<h1 className="text-3xl font-bold text-start my-8">EquipMedy Gallery</h1>
<Gallery data={EquipMedyData} />
</div>

<div className=" ">
<h1 className="text-3xl font-bold text-start my-8">TingleTaste</h1>
<Gallery data={TingleTasteData} />
</div>

<div className=" ">
<h1 className="text-3xl font-bold text-start my-8">BitBeeMedia</h1>
<Gallery data={BitBeedata} />
</div>

<div className=" ">
<h1 className="text-3xl font-bold text-start my-8">MyBanana Product Gallery</h1>
<Gallery data={NimmminData} />
</div>
    
    </div>





</div>


  );
};


