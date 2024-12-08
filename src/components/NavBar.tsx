import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from "@nextui-org/react";
import SigmaIcon from '../icons/SigmaIcon';
import { useNavigate, NavLink } from 'react-router';
import { ChevronDown } from 'lucide-react';

const NavItems: {
  text: string,
  link: `/${string}`
  isDrpDown: boolean,
  DrpContent: {
    keyName: string,
    desc: string,
    link: `/${string}`
  }[]
}[] = [
    {
      text: "Home",
      link: '/',
      isDrpDown: false,
      DrpContent: []
    },
    {
      text: "Classes",
      link: '/',
      isDrpDown: true,
      DrpContent: [
        {
          keyName: 'Grade 11 (AL)',
          desc: 'Advanced Level Past Papers & Edu Materials',
          link: '/grade-11-edu-materials'
        },
        {
          keyName: 'Grade 10 (OL)',
          desc: 'Ordinary Level Past Papers & Edu Materials',
          link: '/grade-10-edu-materials'
        },
        {
          keyName: 'Grade 09',
          desc: 'Past Papers & Edu Materials',
          link: '/grade-09-edu-materials'
        },
        {
          keyName: 'Grade 08',
          desc: 'Past Papers & Edu Materials',
          link: '/grade-08-edu-materials'
        },
        {
          keyName: 'Grade 07',
          desc: 'Past Papers & Edu Materials',
          link: '/grade-07-edu-materials'
        },
        {
          keyName: 'Grade 06',
          desc: 'Past Papers & Edu Materials',
          link: '/grade-06-edu-materials'
        }
      ]
    },
    {
      text: "E-Library",
      link: '/e-library',
      isDrpDown: false,
      DrpContent: []
    },
    {
      text: "News",
      link: '/news',
      isDrpDown: false,
      DrpContent: []
    },
    {
      text: "Account",
      link: '/account',
      isDrpDown: false,
      DrpContent: []
    },
    {
      text: "Log Out",
      link: '/',
      isDrpDown: false,
      DrpContent: []
    }
  ]

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Navigate = useNavigate()

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered>
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
          NavItems.map(({ text, link, isDrpDown, DrpContent }, index) => {
            if (index === NavItems.length - 1) { return };
            {
              if (isDrpDown) {
                return (
                  <Dropdown key={index}>
                    <NavbarItem>
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          variant='flat' 
                          className='bg-background text-foreground text-base font-light'
                          endContent={<ChevronDown strokeWidth={0.75} />}
                        >
                          {text}
                        </Button>
                      </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu>
                      {
                        DrpContent.map(({ desc, keyName, link }, index) => {
                          return (
                            <DropdownItem
                              key={index}
                              description={desc}
                              onPress={() => Navigate(link)}
                            >
                              {keyName}
                            </DropdownItem>
                          )
                        })
                      }
                    </DropdownMenu>
                  </Dropdown>
                )
              }
              return (
                <NavbarItem key={link}>
                  <NavLink to={link} color="foreground"
                    className={({ isActive }) =>
                      isActive
                        ? "text-base cursor-pointer text-primary font-light"
                        : "text-base cursor-pointer font-light"
                    }
                  >
                    {text}
                  </NavLink>
                </NavbarItem>
              )
            }
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
              onClick={() => {
                Navigate(link);
                setIsMenuOpen((prev) => !prev)
              }}
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
