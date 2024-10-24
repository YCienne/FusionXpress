
import { beauty } from "../../services/category.js";

const Beauty = () => {
  return (
    <section>
      <div
        id="alignment-container"
        className="w-[80%] mx-auto flex flex-col gap-y-[2rem] py-[3rem]"
      >
        <h4 className="text-[2rem] font-medium">Beauty</h4>
        <div
          id="ad-cards"
          className="grid grid-cols-3 grid-rows-2 gap-x-[1rem] gap-y-[1.5rem]"
        >
          {/* card */}
            {beauty.MAKEUP.map((item, index) => {
                console.log(item);
                return (
                  <div
                    key={index}
                    className=" bg-white w-[100%] h-[170px]  flex rounded-[6px] shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                  >
                    <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm flex justify-center items-center overflow-hidden">
                      <img
                        src={item.image}
                        alt="Image of ad"
                        className="w-[100%] h-[100%] object-cover rounded-[inherit]  "
                      />
                    </div>
                    <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem]">
                      <h5 className="font-medium">{item.title}</h5>
                      <h4 className=" font-semibold text-[1.3rem] text-[#e41e1b]">
                        {item.price}
                      </h4>
                    </div>
                  </div>
                );
            })}

          
          
        </div>
      </div>
    </section>
  );
}

export default Beauty;