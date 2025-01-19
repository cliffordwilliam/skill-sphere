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
          className="rounded-full"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        {/* text */}
        <span className="font-semibold">Skill Sphere</span>
      </div>
    </>
  );
}
