import Image from "next/image";
import Link from "next/link";

interface BlogCard {
  id: string;
  title: string;
  description: string;
  profile: {
    imgSrc: string;
    name: string;
  };
  date: string;
}

const BlogCard: React.FC<BlogCard> = (props) => {
  const { id, title, description, profile, date } = props;
  return (
    <div className="w-full h-full shadow-[#7676b23d] shadow-xl flex flex-col gap-6 bg-off-white text-dark-blue rounded-lg">
      <div className="relative">
        <Image
          src={"/images/Rectangle.png"}
          alt="card wallpaper"
          sizes="100vw"
          height="0"
          width="0"
          className="rounded-t-lg"
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </div>
      <div className="px-4 pb-4 flex flex-col gap-12 justify-between h-full">
        <div className="flex flex-col gap-6">
          <Link href={`/blog/${id}`}>
            <h3 className="text-h3 text-soft-blue">{title}</h3>
          </Link>
          <p className="text-caption text-dark-blue">{description}</p>
        </div>
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded-full bg-soft-blue relative">
            <Image
              src={"/images/Ellipse.png"}
              alt="profile"
              height="0"
              width="0"
              sizes="100vw"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <div className="text-desaturated-blue flex items-center">
            <p className="pr-2">{profile.name}</p>
            <div className="h-6 w-[1px] bg-desaturated-blue"></div>
            <p className="pl-2">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
