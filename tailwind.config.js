/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "service-img": "url('/src/service-bg.svg')",
        news: "url(/images/news.jpg)",
        event1: "url(/images/event1.jpg)",
        event2: "url(/images/event2.jpg)",
        event3: "url(/images/event3.jpg)",
        map: "url(/images/map.jpg)",
        bgBio: "url(/images/bg-bio.jpg)",
        serviceBg: "url(/images/serviceBg.jpg)",
        servicesBg: "url(/images/servicesBg.jpg)",
        subHeaderBg: "url(/images/hero_inner_page.jpg)",
      },
      screens: {
        xxs: "300px",
        xs: "480px",
        xxl: "1500px",
      },
      colors: {
        darkblue: "#0106a0",
        lightblue: "#0058ea",
        faintblue: "#2e3192",
        green: "#54c4cf",
      },
      fontFamily: {
      },
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["cupcake"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "dark", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      themeRoot: ":root", // The element that receives theme color CSS variables
    },
  },
};