import Image from "next/image";

export const Logo = () => (
  <div className="flex flex-shrink-0 items-center py-2">
    <Image
      className="block my-2 sm:hidden"
      src="/grotto-logo.png"
      alt="groto-logo"
      width={50}
      height={55}
    />
    <Image
      className="hidden my-2 sm:block mt-5 mr-4"
      src="/grotto-logo.png"
      alt="groto-logo"
      width={65}
      height={55}
    />
  </div>
);
