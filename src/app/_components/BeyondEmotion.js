import { Button } from "@mui/material";
import localFont from "next/font/local";
import { GroupIcon } from "./icons/CustomIcons";
const sfpro = localFont({
  src: "../(styles)/fonts/SF-Pro-Display-Regular.ttf",
});
export default function BeyondEmotion() {
  return (
    <section className="relative h-[400px] md:h-[936px] flex justify-center items-center">
      <div className="absolute z-[1]">
        <PrimaryBg />
      </div>
      <div className="z-[5] px-4">
        <h2 className="text-[24px] md:text-[36px]">Beyond Emotion</h2>
        <p
          style={sfpro.style}
          className="max-w-[570px] mt-[46px] text-[16px] md:text-[24px]"
        >
          An analytical approach that drives performance with the same rigour as
          revenue and cost. We aim to make a contribution to the entire
          finantial space using our design system and language.
        </p>
        <Button
          style={sfpro.style}
          className="text-[14px] md:text-[16px] !mt-[36px]"
          variant="text"
          startIcon={<GroupIcon />}
        >
          See people behind scene
        </Button>
      </div>
    </section>
  );
}

const PrimaryBg = () => (
  <svg
    className="w-[100vw]  h-[400px] md:h-[936px]"
    viewBox="0 0 1440 936"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.6">
      <g clipPath="url(#clip0_68_2)">
        <rect
          y="936"
          width="936"
          height="1440"
          rx="120.969"
          transform="rotate(-90 0 936)"
          fill="black"
        />
        <path
          opacity="0.5"
          d="M841.242 608.767C816.709 584.759 816.282 545.409 840.29 520.875V520.875C864.298 496.342 903.648 495.916 928.182 519.923L1111.92 699.729C1136.46 723.736 1136.88 763.087 1112.88 787.62V787.62C1088.87 812.153 1049.52 812.58 1024.98 788.572L841.242 608.767Z"
          fill="url(#paint0_linear_68_2)"
        />
        <path
          opacity="0.4"
          d="M627.856 622.554C603.424 598.444 603.162 559.092 627.273 534.659V534.659C651.383 510.227 690.735 509.966 715.168 534.076L898.154 714.65C922.587 738.76 922.848 778.112 898.738 802.545V802.545C874.627 826.977 835.276 827.238 810.843 803.128L627.856 622.554Z"
          fill="url(#paint1_linear_68_2)"
        />
        <path
          d="M705.164 347.026C729.698 371.034 730.124 410.384 706.116 434.918V434.918C682.108 459.451 642.758 459.877 618.225 435.87L434.482 256.064C409.949 232.057 409.523 192.706 433.531 168.173V168.173C457.538 143.64 496.889 143.213 521.422 167.221L705.164 347.026Z"
          fill="url(#paint2_linear_68_2)"
        />
        <path
          d="M619.163 535.811C643.635 511.74 682.986 512.065 707.057 536.536V536.536C731.128 561.008 730.803 600.359 706.331 624.43L523.053 804.708C498.581 828.778 459.23 828.454 435.159 803.982V803.982C411.088 779.511 411.413 740.159 435.885 716.088L619.163 535.811Z"
          fill="url(#paint3_linear_68_2)"
        />
        <path
          opacity="0.3"
          d="M539.589 392.58C564.06 368.509 603.412 368.834 627.483 393.306V393.306C651.553 417.777 651.229 457.128 626.757 481.199L443.479 661.477C419.007 685.548 379.656 685.223 355.585 660.752V660.752C331.514 636.28 331.839 596.929 356.31 572.858L539.589 392.58Z"
          fill="url(#paint4_linear_68_2)"
        />
        <path
          opacity="0.5"
          d="M217.239 279.132C192.806 255.022 192.545 215.67 216.656 191.238V191.238C240.766 166.805 280.118 166.544 304.55 190.654L487.537 371.228C511.97 395.338 512.231 434.69 488.121 459.123V459.123C464.01 483.555 424.658 483.816 400.226 459.706L217.239 279.132Z"
          fill="url(#paint5_linear_68_2)"
        />
        <path
          opacity="0.5"
          d="M929.239 481.132C904.806 457.022 904.545 417.67 928.656 393.238V393.238C952.766 368.805 992.118 368.544 1016.55 392.654L1199.54 573.228C1223.97 597.338 1224.23 636.69 1200.12 661.123V661.123C1176.01 685.555 1136.66 685.816 1112.23 661.706L929.239 481.132Z"
          fill="url(#paint6_linear_68_2)"
        />
        <path
          opacity="0.8"
          d="M1007.39 449.324C982.336 472.785 943.004 471.493 919.543 446.436V446.436C896.081 421.38 897.374 382.049 922.43 358.587L1110.09 182.873C1135.14 159.411 1174.48 160.704 1197.94 185.76V185.76C1221.4 210.816 1220.11 250.148 1195.05 273.609L1007.39 449.324Z"
          fill="url(#paint7_linear_68_2)"
        />
        <path
          opacity="0.8"
          d="M1027.78 362.042C1051.54 386.811 1050.73 426.155 1025.96 449.919V449.919C1001.19 473.684 961.842 472.869 938.078 448.099L760.097 262.59C736.333 237.82 737.148 198.476 761.917 174.712V174.712C786.686 150.948 826.031 151.763 849.795 176.532L1027.78 362.042Z"
          fill="url(#paint8_linear_68_2)"
        />
        <g filter="url(#filter0_f_68_2)">
          <rect
            x="1034.22"
            y="618.457"
            width="269.157"
            height="3.02423"
            rx="1.51212"
            transform="rotate(-90 1034.22 618.457)"
            fill="#F64C29"
          />
        </g>
        <g filter="url(#filter1_f_68_2)">
          <rect
            x="1034.22"
            y="618.457"
            width="269.157"
            height="3.02423"
            rx="1.51212"
            transform="rotate(-90 1034.22 618.457)"
            fill="#F64C29"
          />
        </g>
        <g filter="url(#filter2_f_68_2)">
          <rect
            x="1034.22"
            y="618.457"
            width="269.157"
            height="3.02423"
            rx="1.51212"
            transform="rotate(-90 1034.22 618.457)"
            fill="#F64C29"
          />
        </g>
        <g filter="url(#filter3_f_68_2)">
          <rect
            x="1034.22"
            y="618.457"
            width="269.157"
            height="3.02423"
            rx="1.51212"
            transform="rotate(-90 1034.22 618.457)"
            fill="#F64C29"
          />
        </g>
        <g filter="url(#filter4_f_68_2)">
          <rect
            x="1034.22"
            y="618.457"
            width="269.157"
            height="3.02423"
            rx="1.51212"
            transform="rotate(-90 1034.22 618.457)"
            fill="#F64C29"
          />
        </g>
        <g opacity="0.3" filter="url(#filter5_f_68_2)">
          <path
            d="M950.565 536.063C959.335 429.533 808.804 330.203 614.345 314.193C419.886 298.183 255.136 371.563 246.365 478.083C237.595 584.603 388.125 683.943 582.584 699.953C777.044 715.963 941.795 642.583 950.565 536.063Z"
            fill="black"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_68_2"
        x="429.376"
        y="-255.546"
        width="1212.72"
        height="1478.85"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="302.423"
          result="effect1_foregroundBlur_68_2"
        />
      </filter>
      <filter
        id="filter1_f_68_2"
        x="580.588"
        y="-104.335"
        width="910.294"
        height="1176.43"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="226.817"
          result="effect1_foregroundBlur_68_2"
        />
      </filter>
      <filter
        id="filter2_f_68_2"
        x="731.799"
        y="46.877"
        width="607.871"
        height="874.003"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="151.212"
          result="effect1_foregroundBlur_68_2"
        />
      </filter>
      <filter
        id="filter3_f_68_2"
        x="883.011"
        y="198.089"
        width="305.447"
        height="571.58"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="75.6058"
          result="effect1_foregroundBlur_68_2"
        />
      </filter>
      <filter
        id="filter4_f_68_2"
        x="958.617"
        y="273.694"
        width="154.236"
        height="420.368"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="37.8029"
          result="effect1_foregroundBlur_68_2"
        />
      </filter>
      <filter
        id="filter5_f_68_2"
        x="146"
        y="212"
        width="904.929"
        height="590.146"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="50"
          result="effect1_foregroundBlur_68_2"
        />
      </filter>
      <linearGradient
        id="paint0_linear_68_2"
        x1="1108.35"
        y1="783.999"
        x2="802.029"
        y2="727.858"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.716129" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_68_2"
        x1="894.231"
        y1="798.905"
        x2="588.144"
        y2="741.48"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.716129" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_68_2"
        x1="438.053"
        y1="171.794"
        x2="744.377"
        y2="227.935"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.51" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_68_2"
        x1="438.866"
        y1="799.53"
        x2="500.842"
        y2="494.332"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.716129" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_68_2"
        x1="359.291"
        y1="656.3"
        x2="421.267"
        y2="351.102"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.4" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_68_2"
        x1="483.614"
        y1="455.483"
        x2="177.527"
        y2="398.058"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D83A19" />
        <stop offset="0.716129" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_68_2"
        x1="1195.61"
        y1="657.483"
        x2="889.527"
        y2="600.058"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D83A19" />
        <stop offset="0.716129" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_68_2"
        x1="1194.12"
        y1="190.12"
        x2="1124.66"
        y2="493.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.716129" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_68_2"
        x1="766.323"
        y1="178.473"
        x2="1023.66"
        y2="308.463"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F64C29" />
        <stop offset="0.648263" />
      </linearGradient>
      <clipPath id="clip0_68_2">
        <rect
          y="936"
          width="936"
          height="1440"
          rx="120.969"
          transform="rotate(-90 0 936)"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);
