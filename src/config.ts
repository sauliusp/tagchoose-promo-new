export const UPDATE_TYPE = {
  ANNOUNCEMENT: 'Announcement',
  RELEASE: 'Release',
  TECHNICAL: 'Technical'
} as const;

export type UpdateType = typeof UPDATE_TYPE[keyof typeof UPDATE_TYPE];

export const SITE = {
  name: '#TagChoose',
  title: "#TagChoose - The Smart Bookmark Manager",
  description: "The smart way to organize your digital life with an AI-powered bookmark manager. Ditch your folders and find your focus.",
  logoUrl: '/logo.png',
  gwsLink: "https://chromewebstore.google.com/detail/tagchoose-bookmark-manage/hlfgdfpeekcelanebbfchnnneijhophh",
  author: {
    name: 'Saulius',
    email: 'saulius.developer@gmail.com',
  },
  userProfiles: [
    'Researchers', 'Developers', 'Students', 'Product Managers',
    'Writers', 'Designers', 'Content Creators', 'Productivity Enthusiasts',
  ],
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
      "downloadUrl": SITE.gwsLink,
      "publisher": {
        "@type": "Organization",
        "name": "#TagChoose",
        "logo": {
          "@type": "ImageObject",
          "url": new URL(SITE.logoUrl, import.meta.env.SITE).href
        }
      }
    }
  },
  features: {
    title: 'Features - #TagChoose',
    description: 'Explore the powerful features of #TagChoose, the smart bookmark manager that uses local AI and a tag-based system to help you find anything.',
    schema: {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "WebPage",
      "name": "Features - #TagChoose",
      "description": "A detailed overview of the core features of the #TagChoose Chrome Extension.",
      "publisher": {
        "@type": "Organization",
        "name": "#TagChoose",
        "logo": {
          "@type": "ImageObject",
          "url": new URL(SITE.logoUrl, import.meta.env.SITE).href
        }
      }
    }
  },
  manifesto: {
    title: 'The Manifesto - #TagChoose',
    description: 'My beliefs on information overload, privacy, and building a bookmark manager that works like your brain, not a filing cabinet.',
    schema: {
      "@context": "[https://schema.org](https://schema.org)",
      "@type": "WebPage",
      "name": "The Manifesto - #TagChoose",
      "description": "The story and guiding principles behind the creation of #TagChoose.",
      "publisher": {
        "@type": "Organization",
        "name": "#TagChoose",
        "logo": {
          "@type": "ImageObject",
          "url": new URL(SITE.logoUrl, import.meta.env.SITE).href
        }
      }
    }
  },
  updates: {
    title: 'Latest Updates - #TagChoose',
    description: 'The latest news, release notes, and technical updates for the #TagChoose smart bookmark manager.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Latest Updates - #TagChoose",
      "description": "The latest news, release notes, and technical updates for the #TagChoose smart bookmark manager.",
      "publisher": {
        "@type": "Organization",
        "name": "#TagChoose",
        "logo": {
          "@type": "ImageObject",
          "url": new URL(SITE.logoUrl, import.meta.env.SITE).href
        }
      }
    }
  }
};

// Define the types for our content blocks
type ContentBlock =
  | { type: 'heading'; level: 2 | 3; textHtml: string }
  | { type: 'paragraph'; textHtml: string }
  | { type: 'list'; items: readonly string[] }
  | { type: 'callout'; kind: 'info' | 'warning'; textHtml: string }
  | { type: 'changelog'; items: readonly { type: 'improvement' | 'fix'; textHtml: string }[] };

// Updated Update type definitions
export type BaseUpdate = {
  slug: string;
  date: string;
  title: string;
  titleHtml: string;
  summary: string;
  schema: object;
  content: readonly ContentBlock[];
};

export type AnnouncementUpdate = BaseUpdate & { type: 'Announcement' };
export type ReleaseUpdate = BaseUpdate & { type: 'Release'; version: string };
export type TechnicalUpdate = BaseUpdate & { type: 'Technical'; issueStatus?: 'Resolved' | 'Investigating' };

export type Update = AnnouncementUpdate | ReleaseUpdate | TechnicalUpdate;


// The UPDATES array using the content block system
export const UPDATES: Update[] = [
  {
    type: UPDATE_TYPE.ANNOUNCEMENT,
    slug: 'new-promo-website-launch',
    date: '2025-08-05',
    title: 'Announcing the New #TagChoose Promotional Website',
    titleHtml: 'Announcing the New <span class="text-primary">#TagChoose</span> Promotional Website',
    summary: 'The new, official promo website for #TagChoose is now live, featuring detailed information on features, the project\'s philosophy, and all future updates.',
          content: [
        { type: 'paragraph', textHtml: 'Today marks the launch of the new promotional website for #TagChoose. The goal of this site is to provide a clear and detailed overview of the extension\'s features and the philosophy behind its design.' },
        { type: 'heading', level: 3, textHtml: 'Key Sections on the New Site' },
        { type: 'list', items: [
          '<strong><a href="/features" class="underline">Features:</a></strong> A detailed breakdown of all core functionalities, from AI-powered tag suggestions to the "Folders = Tags" paradigm.',
          '<strong><a href="/manifesto" class="underline">Manifesto:</a></strong> The story behind why I built #TagChoose to solve "bookmark anxiety" and the privacy-first principles that guide its development.',
          '<strong>Updates:</strong> This section, where you are now, will be the official source for all future release notes and technical news.'
        ]},
        { type: 'paragraph', textHtml: 'The site is designed to be a comprehensive resource for current and future users. All feedback is welcome—you can reach me directly by clicking my avatar in the footer. Thank you for your support.' }
      ],
    schema: {},
  },
  {
    type: UPDATE_TYPE.ANNOUNCEMENT,
    slug: 'v1-0-0-published',
    date: '2025-07-14',
    title: '#TagChoose v1.0.0 is Now Live! 🎉',
    titleHtml: '<span class="text-primary">#TagChoose v1.0.0</span> is Now Live! 🎉',
    summary: 'The latest version, featuring a completely rebuilt AI system, has been approved and is now live on the Chrome Web Store for all users.',
    content: [
      { type: 'paragraph', textHtml: "I'm thrilled to announce that #TagChoose v1.0.0 has been approved and is now live on the Chrome Web Store!" },
      { type: 'paragraph', textHtml: "This new version represents a complete migration to Chrome's native AI LanguageModel API, resolving recent compatibility issues and dramatically improving performance. Existing users should receive the update automatically within the next 24-48 hours." },
      { type: 'callout', kind: 'info', textHtml: `You can get the latest version now from the <a href="${SITE.gwsLink}" target="_blank" rel="noopener noreferrer" class="font-bold underline">Chrome Web Store page</a>.`},
    ] as const,
    schema: {}, // Will be auto-generated by the .map() below
  },
  {
    type: UPDATE_TYPE.RELEASE,
    slug: 'v1-0-0-release-notes',
    date: '2025-07-12',
    title: 'Version 1.0.0 Release Notes',
    titleHtml: 'Version <span class="text-primary">1.0.0</span> Release Notes',
    version: 'v1.0.0',  
    summary: 'A complete rebuild of the AI system for better performance, reliability, and compatibility with the latest versions of Chrome.',
    content: [
      { type: 'paragraph', textHtml: 'This version is a complete rebuild of the AI system for better performance and reliability, and it resolves all recent Chrome compatibility issues.' },
      { type: 'changelog', items: [
        { type: 'improvement', textHtml: 'Completely rebuilt AI system for better performance and reliability.' },
        { type: 'improvement', textHtml: 'Added progress tracking when downloading AI models.' },
        { type: 'improvement', textHtml: 'Improved error messages and user feedback.' },
        { type: 'improvement', textHtml: 'Enhanced bookmark categorization accuracy.' },
        { type: 'fix', textHtml: 'Fixed issues with AI suggestions not appearing.' },
        { type: 'fix', textHtml: 'More stable performance across different Chrome versions.' },
      ]},
    ] as const,
    schema: {},
  },
  {
    type: UPDATE_TYPE.TECHNICAL,
    slug: 'chrome-compatibility-issue-resolved',
    date: '2025-07-10',
    title: 'Technical Update: Chrome Compatibility Issue Resolved',
    titleHtml: 'Technical Update: <span class="text-primary">Chrome Compatibility Issue</span> Resolved',
    issueStatus: 'Resolved',
    summary: 'An explanation of the "AI features not supported" error and how it has been fixed in the v1.0.0 release.',
    content: [
      { type: 'paragraph', textHtml: 'Over the past week, some users running the latest versions of Chrome encountered an error message: "AI features are not supported in your browser." I want to be transparent about what happened and how it\'s been fixed.' },
      { type: 'heading', level: 3, textHtml: 'The Issue' },
      { type: 'paragraph', textHtml: 'After a recent Chrome update, users began seeing the error message, preventing the use of AI features.' },
      { type: 'heading', level: 3, textHtml: 'Root Cause' },
      { type: 'paragraph', textHtml: "The issue was caused by Chrome's official transition from an experimental \"Origin Trial\" AI API to the new, stable LanguageModel API." },
      { type: 'heading', level: 3, textHtml: 'The Solution' },
      { type: 'paragraph', textHtml: "I have completed a full migration of #TagChoose to use Chrome's new native AI API. This not only resolves the error but also improves performance and reliability. This fix is included in the v1.0.0 release." },
    ] as const,
    schema: {},
  },
  {
    type: UPDATE_TYPE.RELEASE,
    slug: 'v0-9-2-release-notes',
    date: '2025-05-05',
    title: 'Version 0.9.2 Release Notes',
    titleHtml: 'Version <span class="text-primary">0.9.2</span> Release Notes',
    version: 'v0.9.2',
    summary: 'A quality-of-life update with UI improvements and bug fixes.',
    content: [
      { type: 'changelog', items: [
        { type: 'improvement', textHtml: 'Improved footer layout with refined donation button placement.' },
        { type: 'improvement', textHtml: 'Simplified extension name and updated URLs.' },
        { type: 'improvement', textHtml: 'Added tooltips for better user feedback.' },
        { type: 'fix', textHtml: 'Removed redundant browser update alert.' },
      ]},
    ] as const,
    schema: {},
  },
  {
    type: UPDATE_TYPE.ANNOUNCEMENT,
    slug: 'published-to-chrome-web-store',
    date: '2025-04-01',
    title: '#TagChoose is Officially Published!',
    titleHtml: '<span class="text-primary">#TagChoose</span> is Officially Published!',
    summary: 'The very first version of #TagChoose is now available for download on the Google Chrome Web Store.',
    content: [
        { type: 'paragraph', textHtml: 'The first version of #TagChoose is now live and available for everyone to install. I built this to solve my own bookmarking anxiety, and I hope it helps you too!' },
        { type: 'callout', kind: 'info', textHtml: `You can find it on the <a href="${SITE.gwsLink}" target="_blank" rel="noopener noreferrer" class="font-bold underline">Chrome Web Store</a>.`}
    ] as const,
    schema: {},
  },
].map(update => {
  const baseSchema = {
    "@context": "https://schema.org",
    "headline": update.title,
    "datePublished": update.date,
    "dateModified": update.date,
    "author": { "@type": "Person", "name": SITE.author.name, "url": new URL('/manifesto', import.meta.env.SITE).href },
    "publisher": { "@type": "Organization", "name": SITE.name, "logo": { "@type": "ImageObject", "url": new URL(SITE.logoUrl, import.meta.env.SITE).href } },
    "description": update.summary,
  };

  if (update.type === 'Release' || update.type === 'Technical') {
    update.schema = { ...baseSchema, "@type": "TechArticle" };
  } else {
    update.schema = { ...baseSchema, "@type": "BlogPosting" };
  }
  return update;
});