export const siteMeta = {
    title: 'Kaleem Elahi | Front-end Engineer',
    favicon: 'http://kaleemelahi.co/static/kaleem-elahi.62ea94a0.png',
    og: {
        description: "Hello! I'm Kaleem Elahi, a Front-end Engineer based out of Ahmedabad, India.",
        title: "Kaleem Elahi | Front-end Engineer",
        site_name: "Kaleem Elahi | Front-end Engineer",
        type: "website",
        url: "https://kaleemelahi.co",
        image: {
            url: "http://kaleemelahi.co/static/kaleem-elahi.62ea94a0.png",
            alt: "Kaleem Elahi | Front-end Engineer",
            type: "image/jpeg",
            width: "400",
            height: "400",
        },
        description: "Hello! I'm Kaleem Elahi, a Front-end Engineer based out of Ahmedabad, India.",
        locale: {
            main: "en_IN",
            alt: "en_US",
        }
    },
    twitter: {
        card: "summary",
        site: "@kaleem__elahi",
        creator: "@kaleem__elahi"
    },
    author: "Kaleem Elahi",
    copyright: "Kaleem Elahi, Copyright (c) 2019",
    keywords: [
        "Kaleem Elahi",
        "Kaleem Elahi Shaikh",
        "Upforce tech",
        "frontend engineer",
        "fullstack engineer",
        "web engineer",
        "ahmedabad",
        "dsyh",
        "dsyh.in",
        "software engineer",
        "engineer",
        "Front-end Engineer"
    ],
}

export const aboutMe = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Kaleem Elahi",
    "jobTitle": "Front-end Engineer",
    "url": "https://kaleemelahi.co",
    "sameAs": [
        "https://medium.com/@kaleem__elahi",
        "https://github.com/kaleem-elahi",
        "https://www.linkedin.com/in/kaleem-elahi",
        "https://twitter.com/kaleem__elahi",
        "https://www.facebook.com/shaikh9996",
        "https://plus.google.com/+kaleem-elahi"
    ],
    "worksFor": {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://Upforcetech.com/"
    },
    "workLocation": {
        "@type": "City",
        "name": "Ahmedabad"
    },
    "gender": "male",
    "birthDate": "1996-09-09",
    "image": "https://kaleemelahi.co/images/me.jpeg",
}

export const aboutWebsite = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "url": "https://kaleemelahi.co",
    "name": "Kaleem Elahi | Front-end Engineer, Upforcetech.com",
    "author": {
        "@type": "Person",
        "name": "Kaleem Elahi"
    }
}

export const aboutCampVanilla = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Camp Vanilla",
    "logo": "https://cdn-images-1.medium.com/max/184/1*Ibh2GzBpGrbOiXRD9o5-IA@2x.png"
}

export const articleSEO = (author, publisher, articleInfo) => ({
    "@context": "http://schema.org",
    "@type": "Article",
    "headline": articleInfo.heading,
    "description": articleInfo.subHeadings[0],
    "datePublished": articleInfo.publishedDate,
    "author": author,
    "publisher": publisher,
    "image": articleInfo.heroImage,
    "dateModified": articleInfo.publishedDate,
    "mainEntityOfPage": articleInfo.articleLink,
    "url": articleInfo.articleLink,
});