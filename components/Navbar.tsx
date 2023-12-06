import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import Button from "./reusable/Button"

const Navbar = () => {
  return (
    <nav>
          <Link href="/">Meowords</Link>   
          <ul>
              {NAV_LINKS.map((link) => (
                  <Link href={link.href} key={link.key}>
                      {link.label}
                  </Link>
              ))}
          </ul>

          <div>
              <Button
                  type="button"
                  title="Sing in"
              />
          </div>
    </nav>
  )
}

export default Navbar