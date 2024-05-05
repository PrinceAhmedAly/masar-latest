import { QrCodeIcon } from "@heroicons/react/24/outline";
import React from "react";

function AboutSite() {
  return (
    <div className="container mx-auto flex min-h-96">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-right my-4 flex items-center flex-row-reverse">
          <QrCodeIcon className="w-7 h-7 mx-2"/>
          عن الموقع</h1>
        <p className="w-5/6 text-sm md:text-lg">موقع مسار يساعد الصم في الوصول إلى وجهتهم عن طريق فحص الكود الموجود أمام المكان ومن ثم تظهر له عدة فديوهات ترشده مسجلة بلغة الإشارة ترشده إلى وجهته.</p>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <img src="./scan-qr.png" alt="about site image" className="w-full"/>
      </div>
    </div>
  );
}

export default AboutSite;
