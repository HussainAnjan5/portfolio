import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
TITLE: "Hussain",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Muhammad Hussain",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}
// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Service Page
export const SERVICE: Page = {
  TITLE: "Services",
  DESCRIPTION: "Things I can help you with: Web Development, Backend APIs, and Software Solutions.",
}

// Contact Page
export const CONTACT: Page = {
  TITLE: "Contact",
  DESCRIPTION: "Get in touch with me for collaborations or opportunities.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Services", 
    HREF: "/services", 
  },
  { 
    TEXT: "Contact", 
    HREF: "/contact", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "muhammad.hussain.cs8@gmail.com", 
    HREF: "mailto:muhammad.hussain.cs8@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "HussainAnjan5",
    HREF: "https://github.com/hussainanjan5" 
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Muhammad Hussain",
    HREF: "https://www.linkedin.com/in/muhammad-hussain-78b625254", 
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "HussainAnjan",
    HREF: "https://x.com/HussainAnjan?t=O52c0gbSdQwjgKlrwBT3xg&s=09", 
  },

]
export const SERVICES = {
  TITLE: "Services",
  DESCRIPTION: "Professional web development services tailored to your needs. From frontend to full-stack solutions.",
} as const;
