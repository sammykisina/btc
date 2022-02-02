import { FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SiFacebook, SiTelegram, SiWhatsapp } from "react-icons/si";
import { openLink } from "../../utils/services";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-[#1d1f1f] flex justify-center items-center py-5 h-full text-[#fff]">
      <div className="flex items-center flex-col">
        <div className="flex gap-5 items-center text-lg">
          <div className="text-lg cursor-pointer" onClick={toggleHome}>
            BitStream Circle
          </div>
          <div className="text-lg">&copy; {new Date().getFullYear()}</div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-2 mx-4">
          {/* contact links */}
          <div>
            <div className="border px-2 py-1 rounded-full flex justify-center items-center">
              LET US HELP YOU
            </div>

            {/* links */}
            <div className="mt-2 grid grid-cols-1">
              {/* 1 */}
              <div className="flex justify-start items-center gap-2 ">
                <div className="hoverAnimation p-0 w-10 h-10 flex justify-center items-center">
                  <FaPhoneAlt className="w-7 h-7" />
                </div>
                <span>+254723811947</span>
              </div>

              {/* 2 */}
              <div className="flex items-center gap-2  w-[250px]">
                <div className="hoverAnimation w-10 h-10 flex justify-center items-center ">
                  <HiMail className="w-7 h-7" />
                </div>
                <span>sheila@gmail.com</span>
              </div>

              {/* 3 */}
              <div
                className="flex items-center gap-2 cursor-pointer "
                onClick={() => openLink("https://t.me/donre")}
              >
                <div className="hoverAnimation w-10 h-10 flex justify-center items-center">
                  <FaTelegram className="w-7 h-7" />
                </div>
                <span>Sheila</span>
              </div>
            </div>
          </div>

          {/*social media links  */}
          <div>
            <div className="border px-2 py-1 rounded-full flex justify-center items-center">
              JOIN US ON
            </div>

            <div className="mt-2">
              <div className="w-full flex justify-center">
                <div
                  className="hoverAnimation w-10 h-10 flex justify-center items-center"
                  onClick={() =>
                    openLink(
                      "https://web.facebook.com/Bitstream-circle-107046301856997"
                    )
                  }
                >
                  <SiFacebook />
                </div>

                <div
                  className="hoverAnimation w-10 h-10 flex justify-center items-center"
                  onClick={() => openLink("https://wa.me/254723811947")}
                >
                  <SiWhatsapp />
                </div>

                <div
                  className="hoverAnimation w-10 h-10 flex justify-center items-center"
                  onClick={() => openLink("https://t.me/donre")}
                >
                  <SiTelegram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
