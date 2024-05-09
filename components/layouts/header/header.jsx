"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  NewspaperIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  ClockIcon,
  CalculatorIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

const navListMenuItems = [
  {
    title: "Single Rewind",
    description: "Tìm kiếm day thích hợp để nâng skill.",
    icon: RectangleGroupIcon,
    link: "/single-rewind"
  },
  {
    title: "Double Rewind",
    description: "Tìm kiếm day thích hợp để tích vé.",
    icon: RectangleGroupIcon,
    link: "/double-rewind"
  },
  {
    title: "Thời gian Rewind",
    description: "Mốc thời gian của người chơi khác cung cấp.",
    icon: ClockIcon,
    link: "/time-rewind"
  },
  {
    title: "Nhật ký leo day",
    description: "Thông tin kỹ nâng của các người chơi.",
    icon: NewspaperIcon,
    link: "/push"
  },
  {
    title: "Đội hình phổ biến",
    description: "Đội hình các người chơi khác thường dùng.",
    icon: SquaresPlusIcon,
    link: "/teams"
  },
  {
    title: "World Tree (Comming soon)",
    description: "Đề cử nâng cấp WT được nhiều người dùng.",
    icon: SquaresPlusIcon,
    link: "/world-tree"
  },
  {
    title: "Tính Dame (Comming soon)",
    description: "Find the perfect solution for your needs.",
    icon: CalculatorIcon,
    link: "/calculator"
  },
  {
    title: "Blog (Comming soon)",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    link: "/blogs"
  }
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <Link href={link} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center font-bold gap-2 py-2 pr-4 text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Công cụ
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center font-bold gap-2 py-2 pr-4">
          Trang chủ
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center font-bold gap-2 py-2 pr-4">
          Liên hệ
        </ListItem>
      </Typography>
      <Button size="sm" color="green">
        Đăng nhập
      </Button>
    </List>
  );
}

function MegaMenuDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <nav className="shadow-sm sticky top-0 left-0 right-0 z-50">
      <Navbar className="mx-auto max-w-screen-xl py-2 rounded-none shadow-none lg:px-0">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            _CheckCost
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default MegaMenuDefault;
