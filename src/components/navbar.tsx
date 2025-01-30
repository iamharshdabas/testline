import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";

import { ThemeSwitch } from "@/components/theme-switch";
import { text } from "@/config/primitives";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className={text({ size: "xs", wide: true, class: "font-mono" })}>
              {siteConfig.name}.
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
