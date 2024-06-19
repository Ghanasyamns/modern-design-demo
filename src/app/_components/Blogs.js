import { Button } from "@mui/material";

function Blogs() {
  return (
    <section className=" mx-auto max-w-[1060px] px-4">
      <h1 className="text-[24px] md:text-[36px]">Explore Our Latest Blogs</h1>
      <div className="mt-[60px] w-full flex flex-col gap-4">
        {[...new Array(2)].map((item, i) => (
          <BlogCard key={i} />
        ))}

        <Button
          className="text-[14px] md:text-[16px] !mt-[36px] !font-semibold "
          variant="outlined"
          endIcon={<RightArrow />}
        >
          Visit The Blog
        </Button>
      </div>
    </section>
  );
}

export default Blogs;

const BlogCard = () => (
  <div className="   h-[300px] rounded-[20px]  overflow-hidden flex  blog-card border-opacity-[.5]">
    <div className="w-[50%] h-full bg-[#FF4300] rounded-[20px]"></div>
    <div className="w-[50%] h-full flex flex-col justify-between p-4 ff-geist">
      <div>
        <p className="text-[14px] opacity-[.6]">Design . Mar 19, 2024</p>
        <p className="mt-[8px] text-[18px] md:text-[24px]">
          Building Your Brand Umbrella
        </p>
        <p className="text-[16px] md:text-[18px] opacity-[.6] mt-[12px]">
          Craft a compelling personal brand to attract freelance clients.
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-[14px] md:text-[16px]">Read More</p>
        <RightArrow />
      </div>
    </div>
  </div>
);

const RightArrow = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.0306 9.03318L9.53063 13.5332C9.38973 13.6741 9.19863 13.7532 8.99938 13.7532C8.80012 13.7532 8.60902 13.6741 8.46813 13.5332C8.32723 13.3923 8.24807 13.2012 8.24807 13.0019C8.24807 12.8027 8.32723 12.6116 8.46813 12.4707L11.6875 9.25255H2.5C2.30109 9.25255 2.11032 9.17353 1.96967 9.03288C1.82902 8.89223 1.75 8.70146 1.75 8.50255C1.75 8.30364 1.82902 8.11287 1.96967 7.97222C2.11032 7.83157 2.30109 7.75255 2.5 7.75255H11.6875L8.46937 4.53255C8.32848 4.39165 8.24932 4.20056 8.24932 4.0013C8.24932 3.80204 8.32848 3.61095 8.46937 3.47005C8.61027 3.32915 8.80137 3.25 9.00062 3.25C9.19988 3.25 9.39098 3.32915 9.53187 3.47005L14.0319 7.97005C14.1018 8.03982 14.1573 8.12272 14.1951 8.21399C14.2329 8.30525 14.2523 8.40309 14.2522 8.50187C14.252 8.60066 14.2324 8.69845 14.1944 8.78962C14.1564 8.8808 14.1007 8.96357 14.0306 9.03318Z"
      fill="white"
      fillOpacity="0.7"
    />
  </svg>
);
