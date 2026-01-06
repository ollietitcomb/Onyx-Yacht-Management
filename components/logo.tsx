import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="Onyx Yacht Management"
      width={180}
      height={62}
      priority
      className="h-10 w-auto"
    />
  );
}
