import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import localFont from "next/font/local";
import { TeamCard } from "./_components/TeamCard";

const sfpro = localFont({
  src: "../(styles)/fonts/SF-Pro-Display-Regular.ttf",
});
function AboutUs() {
  return (
    <main className="bg-[--backgrounnd-primary] ">
      <NavBar />
      <h1 className="mx-auto text-center text-[24px] md:text-[48px] mt-[50px]">
        Small team, grand vision: revolutionizing
        <br /> fintech one token at a time.{" "}
      </h1>
      {/* background: #FF4208;
filter: blur(200px); */}
      <section className="max-w-[630px] mx-auto mt-[100px] px-4">
        <h1 className="text-[18px] md:text-[32px] mb-[24px]">The Vision</h1>
        <p style={sfpro.style} className="text-[18px] md:text-[24px]">
          At D design, our vision is to revolutionize the fintech domain through
          relentless innovation and simplicity. By leveraging our cutting-edge
          design system, we aim to transform traditional financial processes,
          making them more efficient and accessible. Our commitment to
          excellence drives us to create intuitive, user-centric solutions that
          not only streamline operations but also enhance the overall user
          experience. We believe in the power of design to simplify the
          complexities of the financial sector, ultimately empowering businesses
          and individuals to achieve their financial goals with greater ease and
          confidence.
        </p>
      </section>
      <section className="max-w-[1170px] mx-auto px-4 mt-[100px]">
        <h2 className="text-[24px] md:text-[48px] ">Design System Team</h2>
        <div className=" team-container mt-[32px]">
          {TeamList.map((member, i) => (
            <TeamCard member={member} key={i} />
          ))}
        </div>
      </section>
      <section className="max-w-[1170px] mx-auto px-4 mt-[100px] h-[170px] md:h-[300px] relative">
        <div className="absolute">
          <RedPillBg />
        </div>
        <p
          style={sfpro.style}
          className="text-[18px] absolute bottom-6 left-[12vw] md:text-[44px] text-[#FF4208] opacity-[.95]"
        >
          Individually, we are one drop.
          <br /> Together, we are an ocean.
        </p>
      </section>
      <Footer />
    </main>
  );
}

export default AboutUs;

const TeamList = [
  {
    image: "",
    name: "Drake Thomas",
    designation: "Designer",
    desc: "Design at the speed of thought, crafted with precision.",
    linkedin: "",
  },
  {
    image: "",
    name: "John Philip",
    designation: "Sr Designer",
    desc: "Driven by vision, fueled by diligence",
    linkedin: "",
  },
  {
    image: "",
    name: "Joel Mathew",
    designation: "Sr Engineer",
    desc: "Code forged with dedication, building tomorrow's possibilities",
    linkedin: "",
  },
  {
    image: "",
    name: "James ",
    designation: "VP Engineering",
    desc: "Guiding the future with visionary",
    linkedin: "",
  },
  {
    image: "",
    name: "Julie Fernandez",
    designation: "Engineer",
    desc: "Coding solutions to shape a smoother tomorrow, one problem at a time",
    linkedin: "",
  },
  {
    image: "",
    name: "Ram Prakash",
    designation: "Design Specialist",
    desc: "Redefining excellence, one design at a time, setting the standard for tomorrow",
    linkedin: "",
  },
  {
    image: "",
    name: "Ameer Salim",
    designation: "Director Engineer",
    desc: "Leading with unwavering focus, engineering the path to success with steadfast resolve.",
    linkedin: "",
  },
  {
    image: "",
    name: "Sarah M",
    designation: "Vice President Design",
    desc: "Sculpting tomorrow's design landscape with visionary fervor..",
    linkedin: "",
  },
  {
    image: "",
    name: "Therese Mathew",
    designation: "Sr Engineer",
    desc: "Embracing challenges, engineering efficiency, and optimizing for excellenc",
    linkedin: "",
  },
  {
    image: "",
    name: "Vaibhav Sharma",
    designation: "Sr Designer",
    desc: "With dedication and methodical precision, crafting designs that stand the test of time",
    linkedin: "",
  },
  {
    image: "",
    name: "Sam Thomas",
    designation: "Lead Design",
    desc: "Forge the vision, chart the course, design lead guiding innovation's force",
    linkedin: "",
  },
  {
    image: "",
    name: "Karl pe",
    designation: "Priciple Engineer",
    desc: "Pioneering vision into reality, the dev lead steers execution with foresight and finesse",
    linkedin: "",
  },
  {
    image: "",
    name: "Frank Thomas",
    designation: "Engineer",
    desc: " forging tomorrow's code with relentless dedication.",
    linkedin: "",
  },
];

const RedPillBg = () => (
  <svg
    className="w-[200px] md:w-[414px] h-[140px] md:h-[279px]"
    viewBox="0 0 414 279"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.4"
      d="M238.19 232.629C219.323 250.295 189.706 249.322 172.039 230.454V230.454C154.372 211.587 155.346 181.97 174.213 164.303L315.521 31.9884C334.389 14.3216 364.006 15.2951 381.672 34.1627V34.1627C399.339 53.0302 398.366 82.6472 379.498 100.314L238.19 232.629Z"
      fill="url(#paint0_linear_79_6)"
    />
    <path
      opacity="0.4"
      d="M233.966 179.709C251.861 198.36 251.247 227.987 232.595 245.882V245.882C213.944 263.776 184.317 263.163 166.423 244.511L32.4013 104.82C14.5067 86.1689 15.1203 56.5423 33.7719 38.6477V38.6477C52.4235 20.753 82.05 21.3667 99.9447 40.0182L233.966 179.709Z"
      fill="url(#paint1_linear_79_6)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_79_6"
        x1="378.8"
        y1="37.4455"
        x2="326.492"
        y2="266.045"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.716129" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_79_6"
        x1="37.0893"
        y1="41.4801"
        x2="266.307"
        y2="91.0075"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.716129" />
      </linearGradient>
    </defs>
  </svg>
);
