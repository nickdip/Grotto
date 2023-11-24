import Image from "next/image";

export const Logo = () => (
  <div className="flex flex-shrink-0 items-center py-2">
    <Image
      className="block my-2 lg:hidden"
      src="/groto-logo.png"
      alt="groto-logo"
      width={50}
      height={55}
    />
    <Image
      className="hidden my-2 lg:block"
      src="/groto-logo.png"
      alt="groto-logo"
      width={50}
      height={55}
    />
  </div>
);
