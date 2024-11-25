function CTAButton({ text, href }: { text: string; href: string }) {
  return (
    <a
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md px-4 font-medium bg-dark text-light dark:bg-light dark:text-dark"
      href={href}
    >
      <span className="text-sm lg:text-base font-medium">{text}</span>
      <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="size-5"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z" />
        </svg>
      </div>
    </a>
  );
}

export default CTAButton;
