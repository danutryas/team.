import Image from "next/image";
import Link from "next/link";

interface HomeBuilder {
  imgSrc: string;
  title: string;
  description: string;
  link?: string;
  section: number;
}

const HomeBuilder: React.FC<HomeBuilder> = (props) => {
  const { imgSrc, title, description, link, section } = props;

  const isEven = () => {
    return section % 2 === 0;
  };

  return (
    <div className="h-auto bg-off-white text-dark-blue py-40">
      <div
        className={`h-full w-full container mx-auto lg:items-center flex flex-col relative ${
          isEven() ? "flex-row-reverse sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        <div className="basis-full sm:basis-1/2 relative">
          <Image
            src={imgSrc ?? "/images/image-1.png"}
            alt="scheduling"
            width="0"
            height="0"
            style={{ width: "100%", height: "100%" }}
            sizes="100vw"
            className="object-cover pr-10 sm:pr-0"
            priority
          />
        </div>
        <div
          className={`basis-full sm:basis-1/2 flex flex-col gap-14 pl-6 pt-12 sm:pr-0 sm:pt-0 ${
            isEven() ? "lg:pr-40 md:pr-12" : "lg:pl-40 md:pl-12"
          }`}
        >
          <div className="flex-col flex gap-4 ">
            <h1 className="text-h1-mobile sm:text-h1">
              {title ?? "Chats for your distributed teams"}
            </h1>
            <p className="text-p">
              {description ??
                "Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Link
              href={link ?? "/"}
              className="font-medium text-soft-blue underline"
            >
              Learn more
            </Link>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1484 13.7549H6.38594C5.69844 13.7549 5.13594 14.3174 5.13594 15.0049C5.13594 15.6924 5.69844 16.2549 6.38594 16.2549H20.1484V18.4924C20.1484 19.0549 20.8234 19.3299 21.2109 18.9299L24.6859 15.4424C24.9234 15.1924 24.9234 14.8049 24.6859 14.5549L21.2109 11.0674C20.8234 10.6674 20.1484 10.9549 20.1484 11.5049V13.7549Z"
                fill="#5468E7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBuilder;
