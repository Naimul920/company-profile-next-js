import Image from "next/image";
import { SocialLinks } from "../feedback/social-link";

import imageOne from "@/assets/img/home-4/experts-01.png";
import imageTwo from "@/assets/img/home-4/experts-02.png";
import imageThree from "@/assets/img/home-4/experts-03.png";
import imageFour from "@/assets/img/home-4/experts-04.png";

const members = [
  { name: "Mateo Daniel", role: "Founder, CTO", image: imageOne },
  { name: "Elias Josiah", role: "Co-Founder, CEO", image: imageTwo },
  { name: "Miles Jaxon", role: "Head of HR & Manager", image: imageThree },
  { name: "Silas Nicholas", role: "Software Engineer", image: imageFour },
];

export default function TeamMembers() {
  return (
    <section className="bg-[#050505] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Team Members</h1>
          <p className="text-sm text-gray-400">
            Services are professional offerings provided by businesses to meet
            specific needs or solve problems for their customers. Services can
            range from your budget.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index:number) => (
            <div
              key={index}
              className={`group ${index % 2 === 0 ? "mt-5" : "mt-0"}`}
            >
              <div className="relative overflow-hidden rounded-md bg-black">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={450}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Social overlay using your SocialLinks component */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-linear-to-t from-black/90 via-black/60 to-transparent px-6 py-4 flex flex-row items-center justify-center">
                    <SocialLinks
                      classNameDiv="mt-0 gap-2"
                      classNameButton="w-2 h-2 border-none hover:bg-transparent hover:text-brand"
                    />
                  </div>
                </div>
              </div>

              {/* Text */}
              <h2 className="mt-4 text-lg font-semibold text-white">
                {member.name}
              </h2>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
