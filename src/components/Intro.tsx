import Image from "../assets/image.jpg";

const Intro = () => {
  return (
    <>
      <h1 className="pt-4 font-bold font-sans text-4xl text-center">
        Nabira's Personal Website
      </h1>
      <div className="m-6 flex justify-center">
        <img
          src={Image}
          className="h-56 w-116 object-contain rounded-md"
        />
      </div>
      <p className="m-6 font-sans text-lg text-center px-36">
        I'm Nabira Rashid, a passionate innovator with a love for computer
        science, machine learning, and problem-solving. I enjoy areas of STEM
        that I'm interested in while finding ways to make it more accessible to
        others as well! Whether it's through research, hackathons, or community
        initiatives, I'm always looking for new ways to learn, create, and make
        an impact.{" "}
      </p>
      <h2 className="m-8 font-sans text-2xl text-center underline decoration-purple-100">
        Check out the links below!
      </h2>
    </>
  );
};

export default Intro;
