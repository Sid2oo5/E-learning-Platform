import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-90">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & description */}
        <div>
          <h1 className="text-white text-xl font-bold flex items-center gap-2">
            <span className="text-blue-500">A</span> Aceternity UI
          </h1>
          <p className="mt-4 text-gray-400">
            A product by{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Aceternity
            </a>
          </p>
          <p className="text-gray-400 mt-1">
            Building in public at{" "}
            <a href="#" className="text-blue-500 hover:underline">
              @mannupaaji
            </a>
          </p>
        </div>

        {/* Section 1 */}
        <div>
          <h2 className="text-white font-semibold mb-4">Products</h2>
          <ul className="space-y-2">
            {[
              "Pricing",
              "Components",
              "Templates",
              "Categories",
              "Blog",
              "Box Shadows",
              "Showcase",
              "Playground",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-white font-semibold mb-4">Resources</h2>
          <ul className="space-y-2">
            {["Aceternity UI Pro", "Aceternity", "Sponsor", "Affiliate"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-white font-semibold mb-4">Social</h2>
          <ul className="space-y-2">
            {["Twitter", "Discord"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
