import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <Link href={"./"}>
        <Image src={"/techvoice.svg"} width={120} height={180} alt="logo" />
      </Link>
   
        <section className="top-nav">
          <input id="menu-toggle" type="checkbox" />

          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link href={"/mentorship"} className="header-nav-link">
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/sayhello"} className="header-nav-link">
                Subscribe to Newsletter
              </Link>
            </li>
          </ul>
        </section>
    </header>
  );
}
