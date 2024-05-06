import React, { useState } from "react";
import VideoPageHero from "../components/VideoPageHero";
import DistCard from "../components/DistCard";
import SimpleDialog from "../components/SimpleDialog";
import VideoTextDialog from "../components/VideoTextDialog";

const distNames = [
  "التعريف بالمركز ورسالته",
  "حجرة الإستقبال",
  "مكتب إداري 1",
  "مكتب إداري 2",
  "قاعة التدريب",
  "معمل كمبيوتر",
  "حجرة طباعة برايل",
];

const distImages = [
  "./definition.png",
  "./reception1.png",
  "./manager2.png",
  "./manager1.png",
  "./training.png",
  "./lap2.png",
  "./braille.png",
];

const videoUrls = [
  "https://www.youtube.com/embed/8UY6QVSql-I?si=jjoOS2GPmA4oSz3d",
  "https://www.youtube.com/embed/NdbJ5rcwiwA?si=A_gtFb-lVeY-Udhr",
  "https://www.youtube.com/embed/9uu4Tx1y5_A?si=wZUHqYAdoSOxJdqV",
  "https://www.youtube.com/embed/GqQJjMXxtzs?si=OACPtKfLp0iFIy2-",
  "https://www.youtube.com/embed/H2PU8GALrcU?si=3pMq8TIdwyXmxxZY",
  "https://www.youtube.com/embed/m5kpYILMGtQ?si=ft3Pnev_Dfr7C9k7",
  "https://www.youtube.com/embed/IZCy5KbBMdQ?si=3b__VXD03d1QPhoc",
];

const videoText = [
  "تعريف المركز: يسعي مركز خدمة الطلبة ذوى الاعاقة بجامعة سوهاج الي تقديم الخدمات المتكاملة (أكاديميا واجتماعيا و صحيا ونفسيا وثقافيا ورياضيا ....) وفق المعايير العالمية وتحقيق التميز المحلى والاقليمي والعالمي .   رسالة المركز :  تقديم الدعم المتكامل للطلبة ذوى الاعاقة وأسرهم لتلبية جميع احتياجاتهم  من خلال البرامج والانشطة المتكاملة لخلق بيئة دامجه والاستفادة من امكانيات وقدرات هؤلاء الطلبة في تحقيق التنمية المستدامة في اطار الاحترام والعطاء والمشاركة والتمكين والعمل الجماعي بين جميع منسوبي الجامعة  . ",

  " غرفه الاستقبال  هي اول غرفه من جهة اليسار  غرفه الاستقبال: تطبيق قواعد وقرارات المجلس الاعلي للجامعات بشأن قبول ذوى الاعاقة بكليات الجامعة  - استقبال البحوث الاجتماعية  وطلبات الخدمات العلاجية  والاجهزة التعويضية  ودعم الرسوم الدراسية ودعم الكتب الجامعية",

  "مكتب اداري واحد  هو ثاني  حجره من جهة اليسار  يتضمن المكتب حجره رئيس المركز الدكتور طارق زكي  المسؤول الأول عن خدمة ومساعدة ذوي الاحتياجات الخاصة بحامعه سوهاج وتقديم العون  لهم في كافة الانشطه المتعلقة بحياة الجامعية ورقم هاتفه 1148716953",

  "مكتب اداري ٢ هو ثالث حجره من جهة اليمين  هو مختص بتسجيل بيانات طلاب ذوي الاعاقة",

  "قاعة التدريب هي الحجره الثالثه من جهة اليسار  غرفه التدريب: تأهيل طلبة متخصصين(رفقاء لذوى الاعاقة) لمساعدة الطلبة ذوى الاعاقة في الحركة والتنقل - تقديم الدعم النفسي والاكاديمي والاجتماعي والحماية الاجتماعية   تأهيل الطلبة ذوى الاعاقة للتوظيف والتأهيل لسوق العمل - التشبيك مع أرباب العمل من مؤسسات القطاع الحكومي والخاص لدعم ذوى الاعاقة",

  "حجرة معمل الكومبيوتر هي اول حجره من جهة اليمين  وهي تساعد الطلاب من جميع الاعاقات في تسجيل على المنصه أو أداء الامتحانات ويفعل كود الإتاحة يقوم بأداء البحوث المطلوبه منه",

  "حجرة طباعه بريل هي ثاني حجرة من جهة اليمين  وهي توفر بعض المراجع والكتب والمصادر بطريقة برايل  - تزويد وحدة المكفوفين بالمكتبة بماكينات برايل",
]

function CenterPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isTextDialogOpen, setIsTextDialogOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState("");

  const handlePlayBtnClick = (index, title) => {
    setSelectedVideoIndex(index);
    setSelectedVideoTitle(title);
    setIsDialogOpen(true);
  };

  const handleEditBtnClick = (index, title) => {
    setSelectedVideoIndex(index);
    setSelectedVideoTitle(title);
    setIsTextDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedVideoIndex(null);
    setSelectedVideoTitle("");
  };

  const handleTextDialogClose = () => {
    setIsTextDialogOpen(false);
    setSelectedVideoIndex(null);
    setSelectedVideoTitle("");
  };

  return (
    <>
      <div>
        <VideoPageHero place={"مركز خدمة ذوي الإعاقة"} />
      </div>

      <div
        className="container mx-auto border min-h-96 p-4 flex items-center justify-center bg-no-repeat bg-bottom"
        style={{
          backgroundImage: "url('play-button.png')",
          backgroundSize: "200px",
          backgroundPosition: "bottom left",
        }}
      >
        <div className="my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-row">
          {distNames.map((title, index) => (
            <DistCard
              key={index}
              title={title}
              imageSrc={distImages[index]}
              onPlayButtonClick={() => handlePlayBtnClick(index)}
              onEditButtonClick={() => handleEditBtnClick(index)}
            />
          ))}
        </div>
      </div>

      <div>
        <SimpleDialog
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          videoSrc={
            selectedVideoIndex !== null ? videoUrls[selectedVideoIndex] : ""
          }
          title={
            selectedVideoIndex !== null ? distNames[selectedVideoIndex] : ""
          }
        />

        <VideoTextDialog
        isTextDialogOpen={isTextDialogOpen}
        onClose={handleTextDialogClose}
        textSrc={
          selectedVideoIndex !== null ? videoText[selectedVideoIndex] : ""
        }
        textTitle={
          selectedVideoIndex !== null ? distNames[selectedVideoIndex] : ""
        }
        />


      </div>
    </>
  );
}

export default CenterPage;
