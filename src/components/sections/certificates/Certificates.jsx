import CertificateItem from "./CertificateItem";
const Certificates = () => {
  const items = [
    {
      image: "/certificates/vsga.png",
      title: "Junior Web Developer",
      url: "https://drive.google.com/file/d/1y_RSz-KYFXDf8CNbJ85AVN2eN8FnGWL0/view?usp=sharing",
    },
    {
      image: "/certificates/sib.png",
      title: "Best Graduation - SIB Dicoding Cycle 6",
      url: "https://drive.google.com/file/d/1I4BzFZ_wLokWYLZpuj3ZPQFwOvwuo37U/view?usp=sharing",
    },
    {
      image: "/certificates/mentor-dbs.png",
      title: "Mentor - DBS Coding Camp 2025",
      url: "https://drive.google.com/file/d/1y8VHqqaqgNM5Ief4nGpm2PnFPvAXyjU5/view?usp=sharing",
    },
  ];

  return (
    <div
      className="flex flex-col flex-wrap md:flex-row md:justify-center gap-[3rem] md:w-[90%] lg:w-1/2 my-[2rem] md:mx-auto p-5 mt-[2rem]"
      id="Certificates"
    >
      {items.map((item, index) => (
        <CertificateItem {...item} key={index++} />
      ))}
    </div>
  );
};

export default Certificates;
