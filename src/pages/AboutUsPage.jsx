import React from "react";
import Vision from "../components/Vision";
import NameCard from "../components/NameCard";
import DocName from "../components/DocName";
import StudentsSwiper from "../components/StudentsSwiper";

const students = [
  {name: "بسمة الحسيني", Image: "./students/basma.jpeg"},
  {name:   "حسناء السيد ", Image: "./students/hasnaa el sayed.jpeg"},
  {name: "دنيا خالد", Image: "./students/donia khaled.jpeg"},
  {name: "إسراء اسامة", Image:  "./students/esraa osama.jpeg"},
  {name: "إسراء عاطف", Image:"./students/esraa atef.jpeg"},
  {name: "رحمة جابر", Image:  "./students/rahman gaber.jpeg"},
  {name:  "حنين علي", Image: "./students/hanen ali.jpeg"},
  {name:  "نهال اكرم ", Image:  "./students/nehal karam.jpeg"},
  {name: "ساره مرسي", Image: "./students/sara morsy.jpeg"},
  {name:  "منة الله ثروت", Image: "./students/menna tharwat.jpeg"},
  {name: "ساره ثروت", Image: "./students/sara tharwat.jpeg"},  
];

const docNames = [
  "د/ سنيه جمال عبد الحميد",
 "د/ أشرف محمد عبد اللطيف",
  "د/ طارق زكي موسى",
  "د/ مروة فوزي عبد العليم",
];

const title = [
  "تحت إشراف"
];

function AboutUsPage() {
  return (
    <div className="container mx-auto my-10 mt-16">
      <Vision />

      {/* names */}
      <div className="my-1">
        <div className="w-full p-3 text-center my-2 mt-5">
          <h1 className="text-xl md:text-2xl font-bold">
            القائمين على المشروع:
          </h1>
        </div>

        <div className="w-full p-3 text-right">
          <h1 className="text-md md:text-xl font-bold">
            طالبات كلية الآداب قسم الفئات الخاصة مجموعة من أجل غد دفعة 2024
          </h1>
        </div>

        {/* <div className="my-3 px-5 md:px-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {students.map((student, index) => (
            <NameCard key={index} name={student.name} imgSrc={student.Image}/>
          ))}
        </div> */}

        <div className="w-full h-auto  md:px-10">
          <StudentsSwiper />
        </div>

        {/* supervisors */}
        <div className="w-full p-3 text-center my-2 mt-5">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">{title[0]}</h1>
          </div>

          <div className="my-5 px-5 md:px-3 grid grid-cols-1 md:grid-cols-3 gap-3">
            {docNames.map((index, key) => {
              return <DocName docName={index} key={key} />;
            })}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
