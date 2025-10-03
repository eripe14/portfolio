import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import {GoogleAnalytics} from "@next/third-parties/google";
import Script from "next/script";
import GtagPageview from "@/components/analytics/GtagPageview";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Karol Dronia - Full-Stack Developer',
    description: 'Professional full-stack developer with 5+ years experience. Specialized in React, Node.js, Minecraft plugins, Discord bots, and web applications.',
    keywords: 'full-stack developer, React developer, Node.js, Minecraft plugins, Discord bots, web developer, eripe14',
    authors: [{name: 'Karol Dronia'}],
    openGraph: {
        title: 'Karol Dronia - Full-Stack Developer',
        description: 'Professional developer specializing in web apps, Minecraft plugins, and Discord bots',
        url: 'https://kdronia.pl',
        siteName: 'Karol Dronia Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Karol Dronia',
        alternateName: 'eripe14',
        url: 'https://kdronia.pl',
        jobTitle: 'Full-Stack Developer',
        description: 'Professional full-stack developer with 5+ years experience',
        knowsAbout: ['React', 'Node.js', 'TypeScript', 'Minecraft Plugins', 'Discord Bots', 'Java'],
        sameAs: [
            'https://github.com/eripe14'
        ]
    };

    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <html lang="en">
        <head>
            {GA_ID && (
                <>
                    {/* Consent Mode v2 */}
                    <Script id="consent-default" strategy="beforeInteractive">
                        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent','default',{
                  ad_storage:'denied',
                  ad_user_data:'denied',
                  ad_personalization:'denied',
                  analytics_storage:'denied'
                });
                gtag('set','ads_data_redaction', true);
              `}
                    </Script>

                    {/* gtag loader */}
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="afterInteractive"
                    />

                    {/* inicjalizacja GA4 */}
                    <Script id="ga-init" strategy="afterInteractive">
                        {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
                    </Script>
                </>
            )}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />

            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
            <link rel="dns-prefetch" href="https://www.googletagmanager.com"/>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {GA_ID && <GtagPageview id={GA_ID}/>}
        {children}
        {GA_ID && <GoogleAnalytics gaId={GA_ID}/>}
        </body>
        </html>
    );
}