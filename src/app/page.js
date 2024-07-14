import Card from "@/components/Card";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import logo from "../../public/logo.png";
import profile from "../../public/profile.png";
import { cards } from "@/assets/article";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover-image p-10 pb-[1200px]">
        <nav className="flex justify-between items-center px-4 py-2">
          <Image src={logo} alt="Logo" />
          <div className="text-white hover:cursor-pointer underline">
            <a
              href="https://www.linkedin.com/in/sankalp-agarwal-04a632166/"
              className="text-base flex items-center gap-1"
            >
              <p>Contact Me</p>
              <MdOutlineKeyboardArrowRight />
            </a>
          </div>
        </nav>
        <section className="flex flex-col items-center mt-24 text-center gap-5">
          <h1 className="text-3xl font-bold">
            Crafting Smooth Experiences And Driving <br /> Growth Through Design
          </h1>
          <p className="text-sm font-normal">
            Hi, I am Sankalp Agarwal, I am on path of making people's <br />{" "}
            life easy through design
          </p>
          <a href="#">
            <button className="bg-[#ffffff] px-4 py-2 rounded-sm text-[#345FA3] font-normal hover:bg-[#cfcfcf]">
              Explore Me
            </button>
          </a>
        </section>
        <section className="mt-80 text-right flex flex-col gap-7 px-4 md:px-24">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text-sm font-normal leading-6">
            Hi I am Sankalp Agarwal, I am on path of making life of people
            <br />
            easy through design, I am a well trained engineer born and
            <br />
            up in Agra, UP.{" "}
          </p>
          <p className="text-sm font-normal leading-6">
            I discovered design by creating posters of different NGOs, and
            <br />
            become fascinating when I came to know how about a path to
            <br />
            solve real people software problems.
          </p>
          <p className="text-sm font-normal leading-6">
            Creating with users along with growth led approach of design is
            <br />
            my strength an favorite thing
          </p>
          <div className="flex justify-end">
            <button className="bg-[#ffffff] px-4 py-2 rounded-sm text-[#345FA3] font-normal max-w-[185px] hover:bg-[#cfcfcf]">
              My Journey so far
            </button>
          </div>
        </section>
      </section>
      {/* Live Projects */}
      <section className="mt-[-660px] md:mt-[-510px] relative z-10">
        <h2 className="text-xl font-bold px-4 md:px-24 pt-12 bg-white text-black">
          Live Projects
        </h2>
        <div className="flex flex-col gap-7 p-10 bg-white">
          {/* Project 1 */}
          <div className="bg-frame2 flex flex-col md:flex-row justify-between p-4">
            <div className="flex flex-col gap-8 md:w-[50%]">
              <h2 className="text-2xl md:text-3xl font-bold">
                Title & Escrow Made Easy With Title
                <br />
                Clarity Banking Software
              </h2>
              <div className="bg-[#E53A35] max-w-20 h-1"></div>
              <p className="text-xs md:text-sm font-normal">
                Nam massa erat, aliquet a rutrum eu, sagittis ac nibh.
                <br />
                Pellentesque velit dolor, suscipit in ligula.
              </p>
              <button className="bg-[#18460C] hover:bg-[#0e2508] px-4 py-2 rounded-sm text-[#ffffff] font-normal max-w-[185px]">
                View My Work
              </button>
            </div>
            <div className="w-full md:w-[50%] h-[225px] mt-6 md:mt-0 hidden md:block">
              <img
                src="/frame2-img.png"
                alt="Frame 1 image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-frame1 flex flex-col md:flex-row justify-between p-4">
            <div className="flex flex-col gap-8 md:w-[50%]">
              <h2 className="text-2xl md:text-3xl font-bold">
                Grow Business by Increasing your Team
                <br />
                Productivity with Mera Monitor
              </h2>
              <div className="bg-[#E53A35] max-w-20 h-1"></div>
              <p className="text-xs md:text-sm font-normal">
                Nam massa erat, aliquet a rutrum eu, sagittis ac nibh.
                <br />
                Pellentesque velit dolor, suscipit in ligula.
              </p>
              <button className="bg-[#ffffff] hover:bg-[#cfcfcf] px-4 py-2 rounded-sm text-black font-normal max-w-[185px]">
                Contact us
              </button>
            </div>
            <div className="w-full md:w-[400px] h-[200px] mt-6 md:mt-0 hidden md:block">
              <img
                src="/frame1-img.png"
                alt="Frame 2 image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Articles Section */}
      <section className="px-4 md:px-24 pt-20 pb-32 bg-white text-black">
        <h2 className="text-lg md:text-xl font-bold pb-10">
          My Published Articles
        </h2>
        <div className="flex flex-col md:flex-row justify-evenly gap-10">
          {cards.map((card, i) => (
            <Card
              key={i}
              src={card.src}
              date={card.date}
              heading={card.heading}
              author={card.author}
              platform={card.platform}
            />
          ))}
        </div>
      </section>
      {/* Footer */}
      <section className="w-full flex flex-col md:flex-row bg-[#f3f1f1f5] text-black px-8 md:px-20 py-16 mx-auto items-center justify-center">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src={profile}
            alt="Logo"
            className="w-24 h-24 object-cover rounded-full hover:shadow-2xl"
          />
        </div>
        <div className="md:ml-10 text-center md:text-left">
          <p className="text-2xl font-semibold">Let's Connect</p>
          <div className="flex flex-col gap-0.5 mt-2">
            <a href="mailto:Sankalpsunny15@gmail.com" className="text-base">
              <MdEmail className="inline" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/sankalp-agarwal-04a632166/"
              className="text-base"
            >
              <ImLinkedin className="inline" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
