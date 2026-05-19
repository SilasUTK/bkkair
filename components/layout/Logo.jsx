import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "", onClick, variant = "default" }) {
  const isFooter = variant === "footer";
  const logoSrc = isFooter ? "/assets/logo/logo-white.png" : "/assets/logo/logo.png";
  const sizeClass = isFooter
    ? "h-10 w-[148px] sm:h-11 sm:w-[164px] md:w-[176px]"
    : "h-9 w-[132px] sm:h-10 sm:w-[148px] md:h-11 md:w-[164px]";

  const content = (
    <span className={`relative block shrink-0 ${sizeClass}`}>
      <Image
        src={logoSrc}
        alt="BKK AIR"
        fill
        sizes="(max-width: 640px) 132px, (max-width: 768px) 148px, 176px"
        className="object-contain"
        priority={!isFooter}
      />
    </span>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`inline-flex items-center rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${className}`}
        aria-label="BKK AIR home"
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 ${className}`}
      aria-label="BKK AIR home"
    >
      {content}
    </Link>
  );
}
