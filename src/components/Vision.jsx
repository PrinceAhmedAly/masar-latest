import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";


function Vision() {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl text-right my-1 flex items-center flex-row-reverse">
            <FaceSmileIcon className="w-7 h-7 mx-2" />
            رسالتنا
          </h1>
          <p className="p-3 md:p-2 text-md text-center md:text-right md:text-lg">
            نؤمن بأهمية تمكين الأشخاص ذوي الإعاقة من الصم والبكم وتوفير الوصول
            الكامل للمعرفة والموارد بطريقة تناسب احتياجاتهم الخاصة. يهدف مشروعنا
            إلى توفير منصة مبتكرة تسمح لهم بالوصول إلى مجموعة متنوعة من
            الفيديوهات المسجلة بلغة الإشارة، والتي تغطي مختلف المواضيع
            والمجالات. نسعى جاهدين لتقديم تجربة مستخدم سلسة وممتعة، ونهدف إلى
            تمكين هذه الفئة المهمة من المجتمع لتحقيق إمكاناتهم الكاملة والمشاركة
            الفعالة في المجتمع.
          </p>
        </div>

        {/* vison image */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-3">
          <img
            src="./signs.png"
            alt="about us image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Vision;
