import { Header, BentoGrid } from "../components/index";

const LandingPage = () => {

  return (
    <div className=" dark:bg-black bg-white  h-[150svh] bg-opacity-70 w-[svw] flex justify-center backdrop-blur-3xl">
      <div className="">
        <Header />
        <BentoGrid/>
      </div>
    </div>
  );
};

export default LandingPage;
