import React from 'react';
import { Helmet } from 'react-helmet';

// Social + canonical tags only. The page's own <Helmet> must keep a literal
// <title> and <meta name="description">, because the llms.txt build step reads
// those two tags straight out of the page file's source.
const Seo = ({ title, description, image, url, siteName = 'Beyond Horizon', locale = 'en_IN', type = 'website' }) => {
    const defaultOrigin = typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost')
        ? window.location.origin
        : 'https://beyondhorizon.co.in';

    const canonical = url || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://beyondhorizon.co.in/');
    const imageUrl = image
        ? (image.startsWith('http') ? image : defaultOrigin + (image.startsWith('/') ? image : '/' + image))
        : 'https://beyondhorizon.co.in/og-image.jpg';

    return (
        <Helmet>
            <link rel="canonical" href={canonical} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={locale} />
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            {imageUrl && <meta property="og:image:secure_url" content={imageUrl} />}
            {imageUrl && <meta property="og:image:type" content="image/jpeg" />}
            {imageUrl && <meta property="og:image:width" content="1200" />}
            {imageUrl && <meta property="og:image:height" content="630" />}
            {title && <meta property="og:image:alt" content={title} />}
            <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {imageUrl && <meta name="twitter:image" content={imageUrl} />}
            {title && <meta name="twitter:image:alt" content={title} />}
        </Helmet>
    );
}

export default Seo;

export { Seo };
