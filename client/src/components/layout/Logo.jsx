export default function Logo({ className = "", onClick, variant = "default" }) {
  const isFooter = variant === "footer";

  const content = (
    <div className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]">
      
      {/* Flat Design Logo Icon */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#2563EB] shadow-lg shadow-blue-500/30 overflow-hidden sm:h-11 sm:w-11">
        {/* Colorful Accent Blob inside Logo */}
        <div className="absolute -right-1.5 -top-1.5 h-5 w-5 rounded-full bg-[#FF5722] transition-transform duration-300 group-hover:scale-150"></div>
        {/* Soft highlight */}
        <div className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-blue-400/40 blur-sm"></div>
        
        <span className="relative z-10 mt-0.5 text-2xl font-black leading-none text-white drop-shadow-sm sm:text-[26px]">
          B
        </span>
      </div>

      {/* Typography */}
      <span className={`bkk-logo-wordmark text-xl font-black tracking-tight sm:text-2xl ${isFooter ? "text-white" : "text-slate-900"}`}>
        BKK
        <span className="text-[#2563EB] transition-colors duration-300 group-hover:text-[#FF5722]">
          AIR
        </span>
        {/* Tiny decorative dot */}
        <span className="ml-0.5 text-[#FF5722]">.</span>
      </span>
    </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex min-h-11 items-center text-left focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 rounded-xl ${className}`}
        aria-label="BKK AIR home"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href="/"
      className={`flex min-h-11 items-center text-left focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 rounded-xl ${className}`}
      aria-label="BKK AIR home"
    >
      {content}
    </a>
  );
}
