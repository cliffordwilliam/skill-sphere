import evilRabbit from "@public/evil-rabbit.png";
import Image from "next/image";

export default function Logo() {
  return (
    <>
      {/* logo */}
      <div className="flex flex-row items-center gap-2">
        {/* image */}
        <Image
          src={evilRabbit}
          className="rounded-full size-8"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        {/* text */}
        <span className="text-2xl">Skill Sphere</span>
      </div>
    </>
  );
}
