import Image from "next/image";

const Leader = [
  {
    image: "/leader1.webp",
    name: "Jake Richards",
    position: "Chief Architect",
  },
  {
    image: "/leader2.webp",
    name: "Thompson Smith",
    position: "Head of Design",
  },
  {
    image: "/leader3.webp",
    name: "Jackson Rourke",
    position: "Lead Engineer",
  },
  {
    image: "/leader4.webp",
    name: "Maria Simpson",
    position: "Senior Architect",
  },
];

const Leaders = () => {
  return (
    <section className="w-full flex justify-center mb-40">
      <div className="w-full flex items-start justify-between">
        <h2 className="font-bold text-[72px] leading-16 tracking-[-2px] text-[#1B1D23] max-w-63.75">
          The Leaders
        </h2>
        <div className="grid grid-cols-2 gap-x-7.5 gap-y-15.75">
          {Leader.map((leader, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="relative w-87.5 h-80 overflow-hidden group cursor-pointer">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  height={320}
                  width={350}
                  className="object-cover transition-all duration-300"
                />
                <div
                  className="absolute inset-0 bg-[#000000]
                             opacity-0 group-hover:opacity-50
                             transition-opacity duration-300"
                />

                <div
                  className="absolute inset-0 flex items-center justify-center gap-6
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-300"
                >
                  <Image
                    src="linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform"
                  />
                  <Image
                    src="twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <div>
                <p className="font-bold text-[32px] leading-10 text-[#1B1D23]">
                  {leader.name}
                </p>
                <p className="font-medium text-[18px] leading-6 text-[#1B1D23] opacity-75">
                  {leader.position}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;
