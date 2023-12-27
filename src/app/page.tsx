import HomeBuilder from "@/components/builder/homeBuilder";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header theme="light" />
      <Hero />
      <div className="h-screen bg-off-white text-dark-blue overflow-x-hidden">
        <div className="h-full w-full container mx-auto px-7 flex items-start md:items-center relative">
          <div className="basis-full md:basis-2/5 flex flex-col gap-14 mt-[640px] md:mt-0">
            <div className="flex-col flex gap-4  ">
              <h1 className="text-h1-mobile sm:text-h1 ">
                Chats for your distributed teams
              </h1>
              <p className="text-p">
                Team combines the immediacy of real-time chat with an email
                threading model. With Team, you can catch up on important
                conversations while ignoring irrelevant ones.
              </p>
            </div>
            <div className="flex gap-2 items-center ">
              <Link href={""} className="font-medium text-soft-blue underline">
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
          <div className="w-full absolute right-0 md:-right-[40%] top-12 md:top-1/2 md:transform md:-translate-y-1/2">
            <Image
              src="/images/mockup.svg"
              alt="mockup app"
              style={{ width: "110%", height: "110%" }}
              width="0"
              height="0"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
      <HomeBuilder
        title="Chats for your distributed teams"
        description="Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
        imgSrc="/images/image-1.png"
        section={1}
      />
      <HomeBuilder
        title="Choose how you want to work"
        description="In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
        imgSrc="/images/image-2.png"
        section={2}
      />
      <HomeBuilder
        title="Move faster with your Team tools"
        description="With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
        imgSrc="/images/image-3.png"
        section={3}
      />
    </>
  );
}
