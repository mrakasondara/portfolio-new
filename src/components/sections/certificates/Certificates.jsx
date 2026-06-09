import CertificateItem from "./CertificateItem";
const Certificates = () => {
  const items = [
    {
      image: "/certificates/vsga.png",
      title: "Junior Web Developer",
      url: "https://drive.google.com/file/d/1vZENsKIKZFD6_I4oucN-q2QDpmFkqVfn/view?usp=sharing",
    },
    {
      image: "/certificates/sib.png",
      title: "Best Graduation - SIB Dicoding Cycle 6",
      url: "https://drive.google.com/file/d/1hnFO0c6EjyIXLxQKpBTFWc8Abv_jJ7Hq/view?usp=sharing",
    },
    {
      image: "/certificates/mentor-dbs.png",
      title: "Mentor - DBS Coding Camp 2025",
      url: "https://drive.google.com/file/d/1X3XF79VABXp5NjEcwGCJvN5iksQJI3v6/view?usp=sharing",
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
