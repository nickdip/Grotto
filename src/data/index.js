export const data = {
  Navbar: [
    { name: "Home", href: "/", isProtected: false, isSelected: true },
    {
      name: "XmasClock",
      href: "/xmasclock",
      isProtected: false,
      isSelected: false,
    },
    {
      name: "Services",
      href: "/services",
      isProtected: false,
      isSelected: false,
    },
  ],
  Footer: {
    name: "Github",
    href: "https://github.com/nickdip/Grotto",
  },
  Landing: {
    heading: {
      first: "GROTTO",
      second: "Providing a more sustainable Christmas",
    },
    intro:
      "Help ensure Santa's home in the North Pole is saved from melting. GROTTO is an application designed by Santa's elves to help children get the perfect, substainable Christmas present.",
  },
  XmasClock: {
    heading: {
      first: "There are only",
      second: "until Christmas!",
    },
    button: "Grotto now",
  },
  SignIn: {
    heading: "Sing in",
    subheading: "to your account",
    button: "Sign in",
    input: {
      first: "Email address",
      second: "Password",
    },
  },
};
