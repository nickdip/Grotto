import Image from "next/image";

export default function Santa() {
  return (
    <div className="flex flex-shrink-0 items-center py-2">
      <Image
        className="block my-2 lg:hidden"
        src="/santa.png"
        alt="santa"
        width={50}
        height={55}
      />
      <Image
        className="hidden my-2 lg:block"
        src="/santa.png"
        alt="santa"
        width={50}
        height={55}
      />
    </div>
  );
}
