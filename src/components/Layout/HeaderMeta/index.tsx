import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { SEO } from 'interfaces/layout/page';

const HeaderMeta = ({ title, description, keywords }: SEO) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          {t(title)} | {i18n.language === 'en' ? 'Rabbit Care' : 'แรบบิท แคร์'}
        </title>
        <meta name="description" content={t(description)} />
        <meta name="keywords" content={keywords} />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <script
          defer
          src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
        />
      </Head>
    </>
  );
};

export default HeaderMeta;
