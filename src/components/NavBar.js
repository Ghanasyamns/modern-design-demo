import MaxWidthWrapper from "./MaxWidthWrapper";
import { AppBar, Button } from "@mui/material";
import Link from "next/link";
export default function NavBar() {
  return (
    <AppBar position="sticky">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center static h-[60px] ">
          <Link href="/" className="relative w-[70px] h-[28px]">
            <p>M Design</p>
          </Link>
          <div className="  font-normal  items-center gap-[40px] hidden md:flex">
            <Button className="ff-geist" variant="text">
              Home
            </Button>
            <Link href="/about-us">
              <Button className="ff-geist" variant="text">
                People
              </Button>
            </Link>
            <Button className="ff-geist" variant="text">
              Blogs
            </Button>
            <Button className="ff-geist" variant="text">
              Design System
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </AppBar>
  );
}
