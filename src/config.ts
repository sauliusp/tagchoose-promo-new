// src/config.ts

export const UPDATE_TYPE = {
  ANNOUNCEMENT: 'Announcement',
  RELEASE: 'Release',
  TECHNICAL: 'Technical'
} as const;

export type UpdateType = typeof UPDATE_TYPE[keyof typeof UPDATE_TYPE];

// --- HELPERS for URL construction ---
// For relative paths within the site
const createPath = (path: string) => `${import.meta.env.BASE_URL}${path}`.replace(/\/+/g, '/');
// For full, absolute URLs for SEO
export const absoluteUrl = (path: string) => new URL(path, import.meta.env.SITE).href;

export const SITE = {
  name: '#TagChoose',
  title: "#TagChoose - The Smart Bookmark Manager",
  description: "The smart way to organize your digital life with an AI-powered bookmark manager. Ditch your folders and find your focus.",
  logoUrl: createPath('/logo.png'),
  faviconUrl: createPath('/favicon.png'),
  homeUrl: createPath('/'),
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
    name: 'Home',
    href: createPath('/'),
    title: SITE.title,
    description: SITE.description,
    schema: {
      "@context": "https://schema.org",
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
          "url": absoluteUrl(SITE.logoUrl)
        }
      }
    }
  },
  features: {
    name: 'Features',
    href: createPath('/features'),
    title: 'Features - #TagChoose',
    description: 'Explore the powerful features of #TagChoose, the smart bookmark manager that uses local AI and a tag-based system to help you find anything.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Features - #TagChoose",
      "description": "A detailed overview of the core features of the #TagChoose Chrome Extension.",
      "url": absoluteUrl('/features'),
      "publisher": {
        "@type": "Organization",
        "name": "#TagChoose",
        "logo": {
          "@type": "ImageObject",
          "url": absoluteUrl(SITE.logoUrl)
        }
      }
    }
  },
  manifesto: {
    name: 'The Manifesto',
    href: createPath('/manifesto'),
    title: 'The Manifesto - #TagChoose',
    description: 'My beliefs on information overload, privacy, and building a bookmark manager that works like your brain, not a filing cabinet.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "The Manifesto - #TagChoose",
      "description": "The story and guiding principles behind the creation of #TagChoose.",
      "url": absoluteUrl('/manifesto'),
      "publisher": {
        "@type": "Organization",
        "name": "#TagChoose",
        "logo": {
          "@type": "ImageObject",
          "url": absoluteUrl(SITE.logoUrl)
        }
      }
    }
  },
  updates: {
    name: 'Updates',
    href: createPath('/updates'),
    title: 'Latest Updates - #TagChoose',
    description: 'The latest news, release notes, and technical updates for the #TagChoose smart bookmark manager.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Latest Updates - #TagChoose",
      "description": "The latest news, release notes, and technical updates for the #TagChoose smart bookmark manager.",
      "url": absoluteUrl('/updates'),
      "publisher": {
        "@type": "Organization",
        "name": "#TagChoose",
        "logo": {
          "@type": "ImageObject",
          "url": absoluteUrl(SITE.logoUrl)
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
    type: UPDATE_TYPE.TECHNICAL,
    slug: 'explaining-the-ai-not-available-message',
    date: '2025-08-10',
    title: 'Explaining the "AI features are not available" Message',
    titleHtml: 'Explaining the <span class="text-primary">"AI features are not available"</span> Message',
    issueStatus: 'Resolved' as const,
    summary: 'A detailed guide for when you see "AI features are not available on this browser or device," exploring the specific system requirements from Google.',
    content: [
      { type: 'paragraph', textHtml: 'If you see the message <strong>"AI features are not available on this browser or device,"</strong> it means your system does not currently meet the specific requirements set by Google to run the on-device AI model. Since #TagChoose is 100% private, it relies entirely on your computer\'s capabilities to function.' },
      { type: 'heading', level: 3, textHtml: 'A Checklist of Official Requirements' },
      { type: 'paragraph', textHtml: 'This message appears when one or more of the following conditions are not met:' },
      { type: 'list', items: [
        '<strong>Operating System:</strong> Must be <strong>Windows 10+, macOS 13+ (Ventura or newer), or Linux</strong>. ChromeOS, Android, and iOS are not yet supported by the Gemini Nano APIs.',
        '<strong>Chrome Version:</strong> Must be version 138 or higher. You can check yours at <code class="bg-white/10 p-1 rounded">chrome://settings/help</code>.',
        '<strong>Storage:</strong> You need <strong>at least 22 GB of free space</strong> on the drive that contains your Chrome profile. This is to ensure there is enough room for the model and other browser resources.',
        '<strong>GPU (Graphics Card):</strong> Your system must have <strong>strictly more than 4 GB of VRAM</strong> (video memory). Modern on-device AI relies heavily on the GPU for processing.'
      ]},
      { type: 'callout', kind: 'info', textHtml: 'These are official requirements from Google. For the most up-to-date information, you can always refer to the <a href="https://developer.chrome.com/docs/extensions/ai/prompt-api#system_requirements" target="_blank" rel="noopener noreferrer" class="font-bold underline">Official Chrome AI System Requirements</a>.' },
      { type: 'paragraph', textHtml: 'In the meantime, the core functionality of #TagChoose remains active. You can still save any webpage and add tags manually by selecting from your existing folder list.' },
    ] as const,
    schema: {},
},
{
    type: UPDATE_TYPE.TECHNICAL,
    slug: 'understanding-initial-ai-model-download',
    date: '2025-08-09',
    title: 'The One-Time AI Model Setup',
    titleHtml: 'Tech Deep-Dive: The One-Time <span class="text-primary">AI Model Setup</span>',
    issueStatus: 'Resolved' as const,
    summary: 'An insightful look at the one-time, automatic download of the local AI model, why it\'s necessary for your privacy, and what affects its size.',
    content: [
      { type: 'paragraph', textHtml: 'When you first use #TagChoose, you may notice a short delay before AI-powered tag suggestions are available. This is a normal, one-time setup process performed by Google Chrome to download the local AI model (Gemini Nano) to your computer. This process is the key to how we keep your data 100% private.' },
      { type: 'heading', level: 3, textHtml: 'The Download Process Explained' },
      { type: 'paragraph', textHtml: 'To keep your Browse data private, #TagChoose uses an AI model that runs 100% locally on your machine. For this to work, Chrome must first download the model file. This is handled automatically by the browser and requires an <strong>unmetered network connection</strong>.' },
      { type: 'list', items: [
          'A <strong>metered connection</strong> is a data-limited internet connection, like a cellular hotspot. The download will pause on these networks.',
          '<strong>Unmetered connections</strong>, like most Wi-Fi and ethernet, allow the download to proceed.',
      ]},
      { type: 'heading', level: 3, textHtml: 'About the Model Size' },
      { type: 'paragraph', textHtml: 'While your system needs 22 GB of free space, the Gemini Nano model itself is significantly smaller. Its exact size can vary as Google pushes updates, but it is highly optimized for on-device use.'},
      { type: 'callout', kind: 'info', textHtml: '<strong>For advanced users:</strong> You can see the exact size of the current model on your machine by visiting <code class="bg-white/10 p-1 rounded">chrome://on-device-internals</code> in your address bar and checking the "Model status" section.' },
      { type: 'paragraph', textHtml: 'The AI features will be available as soon as this one-time download is complete. In the meantime, manual tagging will work perfectly. For a full technical overview, you can read the <a href="https://developer.chrome.com/docs/extensions/ai/prompt-api" target="_blank" rel="noopener noreferrer" class="font-bold underline">official Chrome Prompt API documentation</a>.' },
    ] as const,
    schema: {},
},
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
    ] as const,
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
    schema: {},
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
    issueStatus: 'Resolved' as const,
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
    "author": { "@type": "Person", "name": SITE.author.name, "url": absoluteUrl('/manifesto') },
    "publisher": {
      "@type": "Organization",
      "name": SITE.name,
      "logo": {
        "@type": "ImageObject",
        "url": absoluteUrl(SITE.logoUrl)
      }
    },
    "description": update.summary,
  };

  if (update.type === UPDATE_TYPE.RELEASE || update.type === UPDATE_TYPE.TECHNICAL) {
    update.schema = { ...baseSchema, "@type": "TechArticle" };
  } else {
    update.schema = { ...baseSchema, "@type": "BlogPosting" };
  }
  return update;
});

// Helper function to get main navigation (excluding home page)
export const getMainNavigation = () => {
  const { index, ...mainPages } = PAGES;
  return Object.values(mainPages);
};

// Helper function to create update URLs
export const createUpdateUrl = (slug: string) => createPath(`/updates/${slug}`);