import Link from "next/link";
import Section from "./section";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Section className="bg-primary">
      <div className="flex flex-row pt-16 pb-8 justify-center text-secondary gap-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex flex-row items-center justify-center">
            <Image
              src="/logo.png"
              alt="Inquiryon Logo. Sparkle!"
              width={40}
              height={40}
            />
            <h6 className="text-3xl pt-[4px] font-sans-logo hover:text-accent transition-colors">
              Inquiryon
            </h6>
          </Link>
          <div className="flex flex-col items-center justify-center gap-1">
            <p>Copyright ©{currentYear} Inquiryon, LLC</p>
            <a
              href="https://www.andrwyoung.com"
              target="blank"
              className="text-xs text-mid-grey transition-colors hover:text-secondary"
            >
              Website Designed by Andrew Yong
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col gap-2">
          <h6>Quick Links:</h6>
          <Link href="./blog">Blog</Link>
        </div> */}
      </div>
    </Section>
  );
}
