import React from "react";
import Reveal from "components/ui/animations/reveal";

interface Props {
  icon: React.ReactNode;
  hoverHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  scrollHandler: () => void;
  title: string;
  content: string;
}

const ServiceItem: React.FC<Props> = ({ icon, hoverHandler, scrollHandler, title, content }) => {
  React.useEffect(() => {
    scrollHandler();
  }, []);
  return (
    <div className="flex w-full md:w-1/2 2xl:w-1/3">
      <div
        className="my-16 sm:mx-6 xl:mx-12 rounded-sm shadow-card md:shadow-none hover:shadow-card transition duration-500 ease-in-out cursor-pointer"
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        <Reveal>
          <div className="relative reveal flex flex-col justify-center">
            <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 flex justify-center">
              {icon}
            </div>
            <div className="flex flex-col justify-center items-center py-10 px-12">
              <div className="w-full text-xl text-center">{title}</div>
              <div className="w-5 h-2 bg-gold rounded-lg my-6" />
              <div className="w-full text-xs text-center">{content}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ServiceItem;
