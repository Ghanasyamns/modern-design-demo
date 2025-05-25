import Paragraph from "../../components/Word";
export function DesignStrategy() {
  return (
    <section className="flex flex-col items-center strategy-section mt-[100px] md:mt-[150px]">
      <div className="relative ">
        <div className="strategy-bg w-[400px] md:w-[960px]"></div>
      </div>
      <p
        style={{ textShadow: "0px 0px 40px #FF3D00" }}
        className="text-[24px] md:text-[32px] font-medium text-center"
      >
        A design Strategy to enhance
        <br /> overall experience
      </p>
      <Paragraph
        paragraph="
        At M design, we are a small collective with a grand ambition: to
        transcend the traditional confines of the financial domain through the
        art and science of design. Our token-based design system is not just a
        tool but a catalyst for transformation, breathing new life into the
        fintech industry. We envision a world where financial interactions are
        seamless, intuitive, and profoundly human. By distilling complexity into
        elegance, we aim to elevate every user's experience, forging a path
        toward a more enlightened and connected financial future."
      />
    </section>
  );
}
