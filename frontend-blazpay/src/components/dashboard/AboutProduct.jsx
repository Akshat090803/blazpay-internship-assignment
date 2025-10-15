import { aboutData } from "@/data/data";

const AboutProduct = () => {
  return (
    <>
      <div className="flex flex-col w-[80%] gap-12 mx-auto">
        <div className="text-center">
          <h3 className="text-3xl font-bold">About Product</h3>
          <span className="text-sm font-semibold">Peace of mind by design</span>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1  gap-8">
          {aboutData.map((imgSrc, ind) => {
            return (
              <img
                src={imgSrc}
                alt={`about-img-${ind + 1}`}
                key={`about-img-${ind + 1}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export { AboutProduct };
