import Link from "next/link";
import Input from "./input";

const Footer: React.FC = () => {
  return (
    <div className="bg-dark-blue text-off-white pt-12 sm:pt-14 md:pt-18 pb-9 sm:pb-12 md:pb-9 px-6 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-28">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">
                <Link
                  href="/"
                  className="text-off-white font-semibold text-5xl"
                >
                  team<span className="text-soft-blue">.</span>
                </Link>
              </h1>
              <p className="text-caption w-40">
                Collaboration platform for mordern team
              </p>
            </div>
            <ul className="pt-12 md:pt-8 flex gap-12 xl:gap-40 flex-col-reverse sm:flex-col lg:flex-row ">
              <div className="flex gap-12 xl:gap-40 flex-col sm:flex-row">
                <li className="flex flex-col gap-4">
                  <h3 className="text-h3 text-soft-blue">Company</h3>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        Support
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="flex flex-col gap-4">
                  <h3 className="text-h3 text-soft-blue">Features</h3>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        Screen Sharing
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        iOS & Android Apps
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        File Sharing
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        User Managment
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="flex flex-col gap-4">
                  <h3 className="text-h3 text-soft-blue">Contact Us</h3>
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        info@teamapp.com
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        1-800-200-300
                      </Link>
                    </li>
                    <li>
                      <Link href="/" className="text-caption text-off-white">
                        1010 Sunset Blv.
                        <br />
                        Palo Alto, California
                      </Link>
                    </li>
                  </ul>
                </li>
              </div>
              <li className="flex flex-col gap-4 w-fit">
                <h3 className="text-h3 text-soft-blue">Stay up to date</h3>
                <ul className="flex flex-col gap-3">
                  <li>
                    <p className="text-caption text-off-white">
                      Subscribe to our newseller
                    </p>
                  </li>
                  <li>
                    <Input state="footer" />
                  </li>
                </ul>
              </li>
            </ul>

            {/* nav */}
          </div>
          <div className="self-start">
            <p className="text-caption ">© Copyright Team Inc.</p>
            {/* copyright */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
