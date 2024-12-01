import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import SigmaIcon from '../icons/SigmaIcon';
import { useNavigate, NavLink } from 'react-router';

const NavItems:{
  text: string,
  link: `/${string}`
}[] = [
  {
    text: "Home",
    link: '/'
  },
  {
    text: "E-Library",
    link: '/e-library'
  },
  {
    text: "News",
    link: '/news'
  },
  {
    text: "Account",
    link: '/account'
  },
  {
    text: "Log Out",
    link: '/'
  }
]

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Navigate = useNavigate()

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand onClick={() => Navigate('/')} className='max-w-fit cursor-pointer'>
          <SigmaIcon size={45} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-x-8" justify="center">
        {
          NavItems.map(({ text, link }, index) => {
            if (index === NavItems.length - 1) { return };
            return (
              <NavbarItem key={link}>
                <NavLink to={link} color="foreground"
                className={({ isActive }) =>
                  isActive
                ? "text-base cursor-pointer text-primary"
                : "text-base cursor-pointer"
                }
                >
                  {text}
                </NavLink>
              </NavbarItem>
            )
          })
        }
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {NavItems.map(({ text, link }, index) => (
          <NavbarMenuItem key={`${text}-${index}`}>
            <Link
              color={
                index === NavItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full cursor-pointer"
              onClick={() => {Navigate(link);setIsMenuOpen(false)}}
              size="lg"
            >
              {text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar
