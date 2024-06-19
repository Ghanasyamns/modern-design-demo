import localFont from "next/font/local";
const sfpro = localFont({
  src: "../(styles)/fonts/SF-Pro-Display-Regular.ttf",
});
export function BeyondDepartment() {
  return (
    <section className="relative justify-center  mx-auto px-4 flex items-center ">
      <div
        style={{
          background:
            "linear-gradient(214.08deg, #F64C29 -3.96%, #FF000C 136.4%)",
        }}
        className="relative h-[200px] md:h-[300px] max-w-[840px] rounded-[40px]  flex flex-col gap-[32px] justify-center px-[16px]  md:px-[50px] overflow-hidden z-[2]"
      >
        <h2 className="text-[24px] md:text-[36px] font-medium z-[3]">
          Beyond Department
        </h2>
        <p style={sfpro.style} className="text-[18px] md:text-[24px] z-[3]">
          A cross-functional approach where user-centred design is not in silos,
          but the responsibility of everyone in the company.
        </p>
        <div className="absolute right-0 top-0 ">
          <BeyondDepartmentBg />
        </div>
      </div>
      {/* <div
        className="absolute h-[400px] w-[650px] z-[1]"
        style={{ filter: "blur(66.1786px)", background: "#FF4208" }}
      ></div> */}
    </section>
  );
}

const BeyondDepartmentBg = () => (
  <svg
    width="310"
    height="303"
    viewBox="0 0 310 303"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path
        d="M109.648 58.5074C121.36 46.6394 140.475 46.5125 152.343 58.224C164.211 69.9354 164.338 89.0504 152.626 100.918L64.9134 189.803C53.2019 201.671 34.0869 201.798 22.2189 190.087C10.351 178.375 10.2241 159.26 21.9356 147.392L109.648 58.5074Z"
        fill="url(#paint0_linear_0_342)"
      />
      <path
        d="M243.489 96.059C231.827 107.976 212.713 108.183 200.796 96.5214C188.879 84.8598 188.672 65.7455 200.334 53.8286L287.673 -35.4233C299.335 -47.3402 318.449 -47.5473 330.366 -35.8857C342.283 -24.224 342.49 -5.10978 330.829 6.80721L243.489 96.059Z"
        fill="url(#paint1_linear_0_342)"
      />
      <path
        d="M195.86 143.798C207.521 131.881 226.636 131.674 238.553 143.335C250.47 154.997 250.677 174.111 239.015 186.028L151.676 275.28C140.014 287.197 120.9 287.404 108.983 275.742C97.0657 264.081 96.8587 244.966 108.52 233.049L195.86 143.798Z"
        fill="url(#paint2_linear_0_342)"
      />
      <path
        d="M151.786 57.2845C163.479 69.1714 163.321 88.2861 151.434 99.9784C139.547 111.671 120.432 111.513 108.74 99.6261L21.171 10.5995C9.47869 -1.2874 9.63642 -20.4021 21.5233 -32.0944C33.4102 -43.7867 52.5249 -43.629 64.2172 -31.742L151.786 57.2845Z"
        fill="url(#paint3_linear_0_342)"
      />
      <path
        d="M109.582 -34.705C121.294 -46.573 140.409 -46.6999 152.277 -34.9884C164.145 -23.2769 164.272 -4.16196 152.56 7.70603L64.8472 96.5909C53.1357 108.459 34.0208 108.586 22.1528 96.8743C10.2848 85.1628 10.1579 66.0479 21.8694 54.1799L109.582 -34.705Z"
        fill="url(#paint4_linear_0_342)"
      />
      <path
        d="M197.057 278.81C185.661 266.639 186.289 247.534 198.46 236.138C210.631 224.741 229.736 225.369 241.132 237.54L326.484 328.694C337.881 340.865 337.253 359.97 325.082 371.366C312.911 382.763 293.806 382.135 282.41 369.964L197.057 278.81Z"
        fill="url(#paint5_linear_0_342)"
      />
      <path
        d="M238.211 276.793C226.54 288.701 207.425 288.893 195.517 277.222C183.609 265.551 183.417 246.437 195.088 234.529L282.497 145.345C294.168 133.437 313.282 133.244 325.19 144.915C337.098 156.586 337.29 175.701 325.619 187.609L238.211 276.793Z"
        fill="url(#paint6_linear_0_342)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_0_342"
        x1="23.9869"
        y1="187.898"
        x2="51.8807"
        y2="39.2174"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.73" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_342"
        x1="328.607"
        y1="-33.6891"
        x2="301.337"
        y2="115.107"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.73" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_0_342"
        x1="110.741"
        y1="273.546"
        x2="138.012"
        y2="124.75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.73" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_0_342"
        x1="23.6859"
        y1="-30.2941"
        x2="171.934"
        y2="-0.189539"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.73" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_0_342"
        x1="23.9207"
        y1="94.6852"
        x2="51.8146"
        y2="-53.9949"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.73" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_0_342"
        x1="322.964"
        y1="369.513"
        x2="175.501"
        y2="335.771"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.73" stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_0_342"
        x1="323.43"
        y1="147.111"
        x2="296.044"
        y2="295.885"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.73" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

const BgShadow = () => (
  <svg
    width="650"
    height="400"
    viewBox="0 0 650 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_0_326)">
      <path
        d="M784.487 360.098V301.9C784.487 208.482 770.017 132.674 752.186 132.674H165.297C147.467 132.674 132.996 208.482 132.996 301.9V360.098C132.996 453.516 147.467 529.324 165.297 529.324H752.186C770.017 529.324 784.487 453.758 784.487 360.098Z"
        fill="url(#paint0_linear_0_326)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_0_326"
        x="0.638321"
        y="0.316544"
        width="916.206"
        height="661.364"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="66.1786"
          result="effect1_foregroundBlur_0_326"
        />
      </filter>
      <linearGradient
        id="paint0_linear_0_326"
        x1="617.425"
        y1="219.272"
        x2="191.499"
        y2="178.723"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F64C29" />
        <stop offset="1" stop-color="#FF522E" />
      </linearGradient>
    </defs>
  </svg>
);
