"use client";

import { Button } from "@mui/material";

function Footer() {
  return (
    <section className="h-[320px] py-5 px-2 flex flex-col justify-between items-center mx-auto mt-[50px] md:mt-[150px] max-w-[1060px]">
      <div>
        <p className="ff-geist text-[16px] md:text-[20px] text-center">
          Lets connect
        </p>
        <h2 className="text-[24px] md:text-[36px] mt-[30px]">
          Drop us an email for an queries
        </h2>
      </div>
      <div className="text-[14px] md:text-[18px] opacity-[.5] flex justify-between w-full">
        <Button
          variant="text"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back To Top
        </Button>
        <Button variant="text">Hello@m-design.com</Button>
        <Button variant="text">© 2024 M Design</Button>
      </div>
    </section>
  );
}

export default Footer;
