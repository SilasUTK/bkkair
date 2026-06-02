import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "", onClick, variant = "default" }) {
  const onDarkBackground = variant === "footer" || variant === "navbar";
  const logoSrc = "/images/logo/logo.png";
  const sizeClass = onDarkBackground
    ? "h-11 w-[138px] sm:h-12 sm:w-[150px] md:w-[164px]"
    : "h-12 w-[150px] sm:h-[52px] sm:w-[163px] md:w-[176px]";

  const content = (
    <span className={`relative block shrink-0 overflow-hidden rounded-lg bg-transparent ${sizeClass}`}>
      <Image
        src={logoSrc}
        alt="BKK AIR"
        fill
        sizes="(max-width: 640px) 132px, (max-width: 768px) 148px, 176px"
        className="object-contain"
        priority={variant !== "footer"}
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
