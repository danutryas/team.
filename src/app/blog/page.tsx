import Header from "@/components/header";
import Image from "next/image";
import Blogs from "../../data/blogs.json";
import BlogCard from "@/components/cards/blogCard";
import Button from "@/components/button/button";

interface Blog {
  id: string;
  title: string;
  description: string;
  imgSrc: string;
  profile: {
    imgSrc: string;
    name: string;
  };
  date: string;
}

export default function Blog() {
  return (
    <>
      <Header theme="dark" />
      <div className="bg-off-white py-48 px-7 md:px-0">
        <div className="container mx-auto text-dark-blue">
          <div className="flex flex-col gap-3 pb-20">
            <h1 className="text-h1">Blog</h1>
            <p className="text-caption">
              Open-source threaded team chat that helps teams stay productive
              and focused.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10 ">
            {Blogs.map((blog: Blog, index: number) => (
              <BlogCard
                key={index}
                title={blog.title}
                description={blog.description}
                profile={blog.profile}
                date={blog.date}
              />
            ))}
          </div>
          <div className="col-start-2 flex justify-center w-full mt-28">
            <Button state="secondary" className="">
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
