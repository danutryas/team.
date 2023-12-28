import Image from "next/image";
import StarSVG from "../starSVG";

interface ReviewCard {
  description: string;
  name: string;
  position: string;
  imgSrc?: string;
}

const ReviewCard: React.FC<ReviewCard> = (props) => {
  const { description, name, position, imgSrc } = props;
  return (
    <div className="inline-block align-top bg-off-white">
      <div className="px-8 py-11 shadow-[#7676b23d] shadow-xl flex flex-col gap-10 rounded-sm h-fit w-fit mr-7 float-right">
        <div className="flex flex-col gap-6">
          <div className="flex">
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
            <StarSVG />
          </div>
          {/* description */}
          <p className="max-w-80 text-p text-dark-blue text-wrap">
            {description}
          </p>
        </div>
        {/* profile */}
        <div className="flex gap-3 ">
          <div className="w-14 h-14 rounded-full bg-soft-blue relative">
            <Image
              src={imgSrc ?? "/images/Ellipse.png"}
              alt="profile"
              height="0"
              width="0"
              sizes="100vw"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-h3">{name}</h3>
            <p className="text-caption text-desaturated-blue">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
