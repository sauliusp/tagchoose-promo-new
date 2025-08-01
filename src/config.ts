export const SITE = {
  title: "#TagChoose - The Smart Bookmark Manager",
  description: "The smart way to organize your digital life. Save webpages with AI-powered suggestions. Ditch your folders and find your focus.",
  logoUrl: '/logo.png',
  gwsLink: "https://chromewebstore.google.com/detail/tagchoose-bookmark-manage/hlfgdfpeekcelanebbfchnnneijhophh",
  author: {
   email: 'saulius.devefdasfadsloper@gmail.com',
   name: 'Saulius' 
  }
};

export const PAGES = {
  index: {
    title: SITE.title,
    description: SITE.description,
    schema: {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "SoftwareApplication",
      "name": "TagChoose - The Smart Bookmark Manager",
      "applicationCategory": "BrowserExtension",
      "operatingSystem": "ChromeOS, Windows, macOS, Linux",
      "description": SITE.description,
      "offers": {
        "@type": "Offer",
        "price": "0"
      },
      "downloadUrl": SITE.gwsLink
    }
  },
  features: {
    title: 'Features - #TagChoose',
    description: 'Explore the powerful features of #TagChoose, the smart bookmark manager that uses local AI and a tag-based system to help you find anything.',
    schema: {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "WebPage",
      "name": "Features - #TagChoose",
      "description": "A detailed overview of the core features of the #TagChoose Chrome Extension, including local AI, multi-folder saving, and keyboard-first UX."
    }
  },
  manifesto: {
    title: 'The Manifesto - #TagChoose',
    description: 'My beliefs on information overload, privacy, and building a bookmark manager that works like your brain, not a filing cabinet.',
    schema: {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "WebPage",
      "name": "The Manifesto - #TagChoose",
      "description": "The story and guiding principles behind the creation of #TagChoose, a privacy-first, AI-powered bookmarking tool."
    }
  }
};