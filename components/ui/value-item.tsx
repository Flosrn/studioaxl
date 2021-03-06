import React from "react";
import Reveal from "components/ui/animations/reveal";

interface Props {
  icon: React.ReactNode;
  hoverHandler: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  scrollHandler: () => void;
  title: string;
  content: string;
}

const ValueItem: React.FC<Props> = ({ icon, hoverHandler, scrollHandler, title, content }) => {
  React.useEffect(() => {
    scrollHandler();
  }, []);
  return (
    <div className="flex w-full md:w-4/6 max-w-md">
      <div
        className="my-12 sm:mx-6 xl:mx-12 rounded-sm shadow-card lg:shadow-none hover:shadow-lg transition duration-500 ease-in-out cursor-pointer"
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        <Reveal>
          <div className="relative reveal flex flex-col justify-center">
            <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 flex justify-center">
              {icon}
            </div>
            <div className="flex flex-col justify-center items-center py-10 px-10">
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

export default ValueItem;
