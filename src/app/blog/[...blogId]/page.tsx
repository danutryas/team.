"use client";
import Header from "@/components/header";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Blogs from "../../../data/blogs.json";

export default function Blog() {
  const pathname = usePathname();
  const id = pathname.split("/")[2] as string;
  return (
    <>
      <Header theme="dark" />
      <div className="bg-off-white min-h-screen text-dark-blue py-48">
        <div className="container mx-auto w-full flex flex-col gap-28">
          <div className="flex flex-col">
            <div className="flex flex-col gap-14">
              <h1 className="text-h1-mobile sm:text-h1 px-48">
                {Blogs[Number(id)].title}
              </h1>
              <div className="flex gap-2 px-48">
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
                  <p className="pr-2">{Blogs[Number(id)].profile.name}</p>
                  <div className="h-6 w-[1px] bg-desaturated-blue"></div>
                  <p className="pl-2">{Blogs[Number(id)].date}</p>
                </div>
              </div>
              <Image
                src={"/images/Rectangle.png"}
                height="0"
                width="0"
                sizes="100vw"
                style={{ height: "100%", width: "100%" }}
                alt="content"
              />
            </div>

            <div className="flex flex-col gap-20 mt-20 px-48">
              <div className="text-p text-[#25313cd7] flex flex-col gap-8">
                <p>
                  Administrators of Team Cloud organizations can export public
                  data from their organization via the organization settings
                  menu. The exports include all the data that appears in public
                  streams, and can be used to migrate from Team Cloud to
                  self-hosting Team. Note that exporting private data is a
                  separate process that requires contacting Team Support.
                </p>
                <p>
                  Due to a bug in the public export code, exports of public data
                  contained all uploaded files, even those from private messages
                  and private streams. This may have allowed organization owners
                  or administrators to extract uploaded files that they were not
                  otherwise allowed to access. The content of non-public
                  messages was never included in public exports.
                </p>
                <p>
                  This bug has existed since the public export feature was
                  implemented in August 2019. We have deleted all existing Team
                  Cloud exports from our servers, and will be making changes to
                  auto-expire all exports after 7 days in the future. This bug
                  was fixed for self-hosted users in the Team Server 5.4
                  release.
                </p>
                <p>
                  We have notified by email all administrators and users in
                  non-deactivated Team Cloud organizations who may have been
                  impacted by this bug. As many organizations have never
                  exported their data, most Team Cloud users were not affected.
                </p>
                <p>
                  We would like to thank Antoine Benoist for bringing this issue
                  to our attention.
                </p>
              </div>
              {/* profile */}
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 relative">
                  <Image
                    src={"/images/Ellipse.png"}
                    alt="profile"
                    height="0"
                    width="0"
                    sizes="100vw"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h4 className="text-h4 text-soft-violet text-bold">
                    Written by
                  </h4>
                  <h3 className="text-h3">{Blogs[Number(id)].profile.name}</h3>
                  <p className="text-caption w-80">
                    COO at Team. Author of the upcoming book on Team Management
                    and Leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-[#BBC8D4] mx-48"></div>
          <div className="flex flex-col gap-12 px-48">
            <p className="text-p">Join the conversation</p>
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-soft-blue relative">
                <Image
                  src={"/images/Ellipse.png"}
                  alt="profile"
                  height="0"
                  width="0"
                  sizes="100vw"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="w-full p-4 rounded-[4px] border-desaturated-blue border-2 bg-transparent"
                placeholder="Comments"
              ></textarea>
            </div>
            {/* comment */}
          </div>
        </div>
      </div>
    </>
  );
}
