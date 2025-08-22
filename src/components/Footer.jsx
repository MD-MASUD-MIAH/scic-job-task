import Image from "next/image";
function Footer(props) {
  return (
    <div>
      <footer className="bg-[#ff99c8] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <div className="flex items-center justify-start pb-10 gap-4">
                <Image
                  alt="logo"
                  width={40}
                  height={40}
                  className=" "
                  src={
                    "https://i.ibb.co.com/fG0MJdqM/Medical-Logo-Graphics-1-29-580x386-removebg-preview.png"
                  }
                ></Image>
                <p className="font-bold text-xl hidden md:block">HealthNest</p>
              </div>
              <p className="text-sm">
                May Medicine is your trusted source for health and wellness
                solutions. We provide quality products and expert advice to
                support your well-being.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:underline">About Us</li>
                <li className="hover:underline">Products</li>
                <li className="hover:underline">Contact</li>
                <li className="hover:underline">FAQ</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">Email: support@maymedicine.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
              <p className="text-sm">Address: 123 Health St, Wellness City</p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-4 border-t border-white/30 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} May Medicine. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
