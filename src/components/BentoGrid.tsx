export const BentoGrid = () => {
  return (
    <div className=" dark:text-neutral-400">
      <div className="grid grid-cols-4 gap-4 pb-5">
        <div className="dark:border-white border-black border-2  col-span-3 dark:text-neutral-400 rounded-xl p-2">
          <h1 className="text-lg font-roboto text-bold mt-4"> Work Experience</h1>
        </div>
        <div className="bg-green-500 h-20 w-20col-span-2 ">2</div>
        <div className="bg-blue-500  col-span-2">3</div>
        <div className="bg-yellow-500  col-span-2">4</div>
        <div className="bg-red-500 h-20 w-20">5</div>
        <div className="bg-green-500 h-20 w-20">6</div>
        <div className="bg-blue-500 h-20 w-20">7</div>
        <div className="bg-yellow-500 h-20 w-20">8</div>
        <div className="bg-red-500 h-20 w-20">9</div>
        <div className="bg-green-500 h-20 w-20">10</div>
        <div className="bg-blue-500 h-20 w-20">11</div>
        <div className="bg-yellow-500 h-20 w-20">12</div>
      </div>
    </div>
  );
};
