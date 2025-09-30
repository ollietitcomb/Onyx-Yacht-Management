export function Logo() {
  return (
    <div className="flex flex-col">
      <span className="font-serif text-2xl font-bold tracking-wider text-ink">
        ONYX
      </span>
      <div className="h-0.5 w-full bg-gold"></div>
    </div>
  );
}

// Image logo version - swap if you want to use logo.svg instead
// import Image from 'next/image';
// export function Logo() {
//   return (
//     <Image
//       src="/logo.svg"
//       alt="Onyx Yacht Management"
//       width={150}
//       height={50}
//       priority
//       className="h-auto w-auto"
//     />
//   );
// }
