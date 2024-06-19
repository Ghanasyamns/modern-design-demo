import Image from "next/image";
import skullBg from "../../../public/assets/skull-bg.png";
import skull from "../../../public/assets/header-skull.png";
import localFont from "next/font/local";
import { Button } from "@mui/material";
import { LearnMoreIocn, PlayButton } from "./icons/CustomIcons";
const sfpro = localFont({
  src: "../(styles)/fonts/SF-Pro-Display-Regular.ttf",
});
export default function HeaderBanner() {
  return (
    <section className="flex flex-col items-center">
      <div className="relative h-[450px]">
        <div className="absolute top-[160px] left-[50%] translate-x-[-50%] w-[400px] sm:w-[500px] h-[270px] z-[1]">
          <Image
            className="object-cover"
            src={skullBg}
            alt="logo"
            sizes="100%"
            fill
          />
        </div>
        <div className="absolute top-0 left-[50%] translate-x-[-52.5%] w-[375px] h-[450px] z-[3]">
          <Image
            className="object-contain"
            src={skull}
            alt="logo"
            sizes="100%"
            fill
          />
        </div>
      </div>
      <p className="text-[24px] md:text-[48px] font-medium z-[4] mt-[-130px] text-center">
        It&apos;s not just a design system it&apos;s <br /> a vision brought to
        life.
      </p>
      <p
        className={`text-[14px] md:text-[16px] font-normal  text-center  mt-[24px] ${sfpro.className}`}
      >
        Design-first solutions for fintech pioneers!. A small contribution
        <br /> from the small group
      </p>
      <div className="flex gap-[50px] mt-[36px]">
        <Button
          style={sfpro.style}
          className="text-[14px] md:text-[16px]"
          variant="text"
          startIcon={<PlayButton />}
        >
          Watch Video
        </Button>
        <Button
          style={sfpro.style}
          className="text-[14px] md:text-[16px]"
          variant="text"
          startIcon={<LearnMoreIocn />}
        >
          Learn more
        </Button>
      </div>
    </section>
  );
}
