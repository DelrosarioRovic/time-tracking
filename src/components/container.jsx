import imageJermy from "../assets/images/image-jeremy.png";
import { firstRow } from "./obj";

const Container = () => {
  return (
    <div className="flex w-4/5 text-white max-sm:flex-wrap">
      <div className="max-md:w-1/2 md:w-1/2 max-sm:w-full w-1/4 overflow-hidden h-full">
        <div className="bg-blue-700 p-8 flex flex-col rounded-xl z-10 relative">
          <div className="p-1 bg-white rounded-full w-20 mb-8">
            <img src={imageJermy} alt="" />
          </div>
          <div className="mb-10">
            <p className="opacity-80 font-light">Report for</p>
            <h1 className="text-5xl font-light">Jeremy Robson</h1>
          </div>
        </div>
        <div className="bg-indigo-950 relative -top-12 pb-12 rounded-xl">
          <ul className="flex flex-col gap-5 pt-20 p-5">
            <li>
              <a href="">Daily</a>
            </li>
            <li>
              <a href="">Weekly</a>
            </li>
            <li>
              <a href="">Monthly</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-md:w-1/2 w-3/4 max-sm:w-full flex flex-wrap px-5 gap-x-5 max-sm:p-0 h-full">
        {firstRow.map((row, index) => (
          <div
            key={index}
            index={index}
            className="relative xl:w-[31%] lg:w-[47%] max-md:w-[100%] md:w-[100%] overflow-hidden"
          >
            <div className={`${row.color} w-full flex justify-end rounded-xl ${index===4 && "relative h-[70px]"}`}>
              <img src={row.img} alt="" className={`${index === 4 && "absolute top-0"}`} />
            </div>
            <div className="flex flex-col gap-y-5 bg-indigo-950 p-5 rounded-xl relative -top-5">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{row.subject}</h3>
                {row.BsThreeDotsVertical}
              </div>
              <div className="flex flex-col gap-y-5">
                <h2 className="text-6xl font-light">{row.hour}</h2>
                <p className="opacity-70 text-sm font-light">
                  Last Week - {row.lastWeekHours}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
