import { Link } from "@heroui/link";
import { button } from "@heroui/theme";

import { text } from "@/config/primitives";
import { siteHref } from "@/config/site";

export default function IndexPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-16">
      <div className="text-center text-balance max-w-prose">
        <div>
          <h1>
            <span className={text({ size: "lg", bold: true })}>
              Ace your&nbsp;
            </span>
            <span className={text({ size: "lg", bold: true, color: "violet" })}>
              confidence&nbsp;
            </span>
          </h1>
        </div>
      </div>
      <Link
        className={button({ color: "primary", variant: "shadow" })}
        href={siteHref.test}
      >
        Start now
      </Link>
    </section>
  );
}
