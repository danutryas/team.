import Button from "./button/button";
import Input from "./input";

const Hero = () => {
  return (
    <div className="relative h-screen w-full z-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/hero.png")' }}
      ></div>
      <div className="w-full container mx-auto absolute inset-0 flex items-center px-7">
        <div className="w-full flex flex-col gap-14">
          <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex-col flex gap-4">
            <h1 className="text-h1-mobile sm:text-h1">
              Instant collaboration for remote teams
            </h1>
            <p className="text-p">
              All-in-one place for your remote team to chat, collaborate and
              track project progress.
            </p>
          </div>
          <div className="flex w-full md:w-4/5 lg:w-3/5 xl:w-2/5 gap-4 flex-col sm:flex-row">
            <Input state="hero" />
            <Button state="primary">Get Early Access</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
