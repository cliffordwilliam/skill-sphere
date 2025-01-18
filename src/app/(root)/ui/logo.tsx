import Image from "next/image";

export default function Logo() {
  return (
    <>
      {/* logo */}
      <div className="flex flex-row items-center gap-2">
        {/* image */}
        <Image
          src="/evil-rabbit.png"
          width={32}
          height={32}
          className="rounded-full"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        {/* text */}
        <span className="font-semibold">Skill Sphere</span>
      </div>
    </>
  );
}
