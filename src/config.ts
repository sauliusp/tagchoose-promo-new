type BaseUpdate = {
  slug: string; // This will be the URL for the post, e.g., /updates/v1-0-0-published
  date: string; // In YYYY-MM-DD format
  title: string;
  summary: string;
  schema: object; // To hold the JSON-LD schema
};

export type AnnouncementUpdate = BaseUpdate & {
  type: 'Announcement';
  body: string;
  ctaLink?: string;
  ctaText?: string;
};

export type ReleaseUpdate = BaseUpdate & {
  type: 'Release';
  version: string;
  changelog: {
    new?: string[];
    improvements?: string[];
    fixes?: string[];
  };
};

export type TechnicalUpdate = BaseUpdate & {
  type: 'Technical';
  body: string;
  issueStatus?: 'Resolved' | 'Investigating' | 'Monitoring';
};

export type Update = AnnouncementUpdate | ReleaseUpdate | TechnicalUpdate;

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
  }
};

// Now, let's create the UPDATES array with all your content
export const UPDATES: Update[] = [
  {
    type: 'Announcement',
    slug: 'v1-0-0-published',
    date: '2025-07-14',
    title: '#TagChoose v1.0.0 is Now Live! 🎉',
    summary: 'The latest version, featuring a completely rebuilt AI system, has been approved and is now live on the Chrome Web Store for all users.',
    body: `
      <p>I'm thrilled to announce that #TagChoose v1.0.0 has been approved and is now live on the Chrome Web Store!</p>
      <p>This new version represents a complete migration to Chrome’s native AI LanguageModel API, resolving recent compatibility issues and dramatically improving performance. Existing users should receive the update automatically within the next 24-48 hours.</p>
      <p>Thank you for your patience and support! You can get the latest version now from the store.</p>
    `,
    ctaLink: SITE.gwsLink,
    ctaText: 'Get v1.0.0 on the Chrome Store',
    schema: { /* Schema for Announcement Post */ }
  },
  {
    type: 'Release',
    slug: 'v1-0-0-release-notes',
    date: '2025-07-12',
    title: 'Version 1.0.0 Release Notes',
    version: 'v1.0.0',
    summary: 'A complete rebuild of the AI system for better performance, reliability, and compatibility with the latest versions of Chrome.',
    changelog: {
      improvements: [
        'Completely rebuilt AI system for better performance and reliability',
        'Added progress tracking when downloading AI models',
        'Improved error messages and user feedback',
        'Enhanced bookmark categorization accuracy',
      ],
      fixes: [
        'Fixed issues with AI suggestions not appearing',
        'More stable performance across different Chrome versions',
        'Better handling of different AI availability states',
      ]
    },
    schema: { /* Schema for Release Post */ }
  },
  {
    type: 'Technical',
    slug: 'chrome-compatibility-issue-resolved',
    date: '2025-07-10',
    title: 'Technical Update: Chrome Compatibility Issue Resolved',
    summary: 'An explanation of the "AI features not supported" error and how it has been fixed in the upcoming v1.0.0 release.',
    body: `
      <p>Over the past week, some users running the latest versions of Chrome encountered an error message: "AI features are not supported in your browser." I want to be transparent about what happened and how it's been fixed.</p>
      <h3>The Issue</h3>
      <p>After a recent Chrome update, users began seeing the error message, preventing the use of AI features.</p>
      <h3>Root Cause</h3>
      <p>The issue was caused by Chrome’s official transition from an experimental "Origin Trial" AI API to the new, stable LanguageModel API.</p>
      <h3>The Solution</h3>
      <p>I have completed a full migration of #TagChoose to use Chrome’s new native AI API. This not only resolves the error but also improves performance and reliability. This fix is included in the v1.0.0 release.</p>
    `,
    issueStatus: 'Resolved',
    schema: { /* Schema for Technical Post */ }
  },
  // ... Add other posts here in reverse chronological order
  {
    type: 'Release',
    slug: 'v0-9-2-release-notes',
    date: '2025-05-05',
    title: 'Version 0.9.2 Release Notes',
    version: 'v0.9.2',
    summary: 'A quality-of-life update with UI improvements and bug fixes.',
    changelog: {
      improvements: [
        'Improved footer layout with refined donation button placement',
        'Simplified extension name and updated URLs',
        'Added tooltips for better user feedback',
      ],
      fixes: [
        'Removed redundant browser update alert',
      ]
    },
    schema: { /* Schema for Release Post */ }
  },
  {
    type: 'Announcement',
    slug: 'published-to-chrome-web-store',
    date: '2025-04-01',
    title: '#TagChoose is Officially Published!',
    summary: 'The very first version of #TagChoose is now available for download on the Google Chrome Web Store.',
    body: '<p>The first version of #TagChoose is now live and available for everyone to install. I built this to solve my own bookmarking anxiety, and I hope it helps you too!</p>',
    ctaLink: SITE.gwsLink,
    ctaText: 'View on the Chrome Store',
    schema: { /* Schema for Announcement Post */ }
  },
].map(update => {
  // Automatically generate the correct schema for each update
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