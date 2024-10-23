import spareParts from "../../assets/categories/spare-parts.png";
import fashion from "../../assets/categories/fashion.png";
import cars from "../../assets/categories/cars.png";
import property from "../../assets/categories/property.png";
import furniture from "../../assets/categories/furniture.png";
import { Link } from "react-router-dom";


const HomeCategories = () => {
  return (
    <section>
      <div
        id="alignment-container"
        className="w-[80%] mx-auto flex flex-col gap-y-[2rem] py-[3rem]"
      >
        <h4 className="text-[2rem] font-medium">Featured Categories</h4>
        <div
          id="category-grids"
          className="w-[100%] mx-auto flex justify-between"
        >
          {/* Category 1 */}
          <Link to="/categories-cars">
            <div className="w-[200px] h-[400px] px-[10px]  shadow-lg bg-[#EAEAEA] rounded-[15px] flex items-center relative hover:scale-[1.05] duration-200 ease-in-out">
              <img
                src={cars}
                alt="spare parts"
                className="w-[100%] bg-center my-auto"
              />
              <div
                id="overlay"
                className="bg-[#00000000] h-[100%] w-[100%] absolute top-0 left-0 rounded-[15px] flex justify-center items-end hover:bg-[#000000b1] hover:text-white hover:items-center hover:font-semibold"
              >
                <h4 className=" font-semibold text-[1.3rem] mb-[20px]">Cars</h4>
              </div>
            </div>
          </Link>
          {/* Category 2 */}
          <Link to="/categories-fashion">
            <div className="w-[200px] h-[400px] px-[10px] shadow-lg mt-[70%] bg-[#EAEAEA] rounded-[15px] flex items-center relative hover:scale-[1.05]  duration-200 ease-in-out">
              <img
                src={fashion}
                alt="spare parts"
                className="w-[100%] bg-center my-auto"
              />
              <div
                id="overlay"
                className="bg-[#00000000] h-[100%] w-[100%] absolute top-0 left-0 rounded-[15px] flex justify-center items-end hover:bg-[#000000b1] hover:text-white hover:items-center hover:font-semibold"
              >
                <h4 className=" font-semibold text-[1.3rem] mb-[20px]">
                  Fashion
                </h4>
              </div>
            </div>
          </Link>

          {/* Category 3 */}
          <Link to="/categories-events">
            <div className="w-[200px] h-[400px] px-[10px] shadow-lg bg-[#EAEAEA] rounded-[15px] flex items-center relative hover:scale-[1.05] duration-200 ease-in-out">
              <img
                src={property}
                alt="spare parts"
                className="w-[100%] bg-center my-auto"
              />
              <div
                id="overlay"
                className="bg-[#00000000] h-[100%] w-[100%] absolute top-0 left-0 rounded-[15px] flex justify-center items-end hover:bg-[#000000b1] hover:text-white hover:items-center hover:font-semibold"
              >
                <h4 className=" font-semibold text-[1.3rem] mb-[20px]">
                  Events
                </h4>
              </div>
            </div>
          </Link>
          {/* Category 4 */}
          <Link to="/categories-spare-parts">
            <div className="w-[200px] h-[400px] shadow-lg mt-[70%] bg-[#EAEAEA] rounded-[15px] flex items-center relative hover:scale-[1.05] duration-200 ease-in-out">
              <img
                src={spareParts}
                alt="spare parts"
                className="w-[100%] bg-center my-auto"
              />
              <div
                id="overlay"
                className="bg-[#00000000] h-[100%] w-[100%] absolute top-0 left-0 rounded-[15px] flex justify-center items-end hover:bg-[#000000b1] hover:text-white hover:items-center hover:font-semibold"
              >
                <h4 className=" font-semibold text-[1.3rem] mb-[20px]">
                  Spare Parts
                </h4>
              </div>
            </div>
          </Link>
          {/* Category 5 */}
          <Link to="/categories-properties">
            <div className="w-[200px] h-[400px] px-[10px] shadow-lg bg-[#EAEAEA] rounded-[15px] flex items-center relative hover:scale-[1.05] duration-200 ease-in-out">
              <img
                src={property}
                alt="spare parts"
                className="w-[100%] bg-center my-auto"
              />
              <div
                id="overlay"
                className="bg-[#00000000] h-[100%] w-[100%] absolute top-0 left-0 rounded-[15px] flex justify-center items-end hover:bg-[#000000b1] hover:text-white hover:items-center hover:font-semibold"
              >
                <h4 className=" font-semibold text-[1.3rem] mb-[20px]">
                  Property
                </h4>
              </div>
            </div>
          </Link>
          {/* Category 6 */}
          <Link to="/categories-furniture">
            <div className="w-[200px] h-[400px] shadow-lg mt-[70%] bg-[#EAEAEA] rounded-[15px] flex items-center relative hover:scale-[1.05] duration-200 ease-in-out">
              <img
                src={furniture}
                alt="spare parts"
                className="w-[100%] bg-center my-auto"
              />
              <div
                id="overlay"
                className="bg-[#00000000] h-[100%] w-[100%] absolute top-0 left-0 rounded-[15px] flex justify-center items-end hover:bg-[#000000b1] hover:text-white hover:items-center hover:font-semibold"
              >
                <h4 className=" font-semibold text-[1.3rem] mb-[20px]">
                  Furniture
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
