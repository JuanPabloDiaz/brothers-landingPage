import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import backgroundImg from "../assets/img/banner-background1440.png";
import heroImage from "../assets/img/1-hero535.png";
import { Link } from "react-scroll";
import { useScrollPosition } from "../hooks";

const navigation = [
  { name: "Home", section: "home" },
  { name: "Services", section: "services" },
  { name: "About", section: "about" },
  { name: "Values", section: "company" },
  { name: "Clients", section: "testimonials" },
  { name: "Portfolio", section: "projects" },
  { name: "Expertise", section: "team" },
  // { name: "Contact", section: "footer" },
];
function classNamesNavBarScroll(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollPosition = useScrollPosition();
  // console.log(scrollPosition);

  return (
    <div
      className="md:h-screen"
      name="home"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Tutorial To Change NavBar On Scroll https://www.youtube.com/watch?v=UvWMlNZuQTc&t=237s */}
      <header
        className={classNamesNavBarScroll(
          scrollPosition > 0
            ? "md:h-auto md:-translate-y-6 md:bg-[#132577] md:shadow"
            : "md:h-none md:translate-y-0 md:bg-none md:shadow-none",
          "md:transition-shadow-xl md:transition-color absolute inset-x-0 top-0 z-40 duration-500 md:fixed md:h-20 md:-translate-y-6 md:shadow-black lg:h-24",
        )}
      >
        <nav
          className="flex items-center justify-end p-12 md:px-10 lg:px-20"
          aria-label="Global"
        >
          {/* Hamburger menu icon: */}
          {/* Set to hidden since its not functional yet. it taking the entire screen and wont close after click. (To show change hidden to flex in small screens. Also need to change the md to lg on the classNamesNavBarScroll ^^ */}
          <div
            className={classNamesNavBarScroll(
              scrollPosition > 0 ? "bg-[#132577]" : "bg-none",
              "transition-color fixed hidden rounded-full p-2 duration-1000 lg:hidden",
            )}
          >
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Table & Desktop Navigation: */}
          <div className="hidden md:flex md:justify-end md:gap-x-8 lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.section}
                smooth={true}
                key={item.name}
                duration={500}
                className="cursor-pointer text-sm font-semibold leading-6 text-white hover:text-gray-400 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            {/* X to Close menu icon: */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white  hover:text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.section}
                      smooth={true}
                      key={item.name}
                      duration={500}
                      className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-zinc-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="max-w-8xl mx-auto py-32 sm:py-48 lg:py-56">
          <div>
            <div className="flex justify-around ">
              <div className="max-w-3xl text-left">
                <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                  Software solution providers that help brands thrive and stand
                  out
                </h1>
                <p className="mt-12 text-lg leading-8 text-slate-300">
                  Revolutionize your customer experience with our AI chatbot,
                  offering natural language understanding, personalized
                  recommendations, and seamless purchasing. Our experts will
                  elevate your customer interactions.
                </p>
                <div className="justify-left mt-10 flex items-center gap-x-6">
                  <a
                    href="https://litslink.com/technologies"
                    className="hover:bg-white-500 mt-32 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#92989f] hover:text-[#132577] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    EXPLORE MORE
                  </a>
                </div>
              </div>
              <img
                className="hidden h-auto w-auto max-w-lg object-cover md:flex md:h-96 md:w-96"
                src={heroImage}
                alt="Graphic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
