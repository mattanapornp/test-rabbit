import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import SiteConfigRoot from '../../../../siteConfig';
import Result from 'components/Layout/Result';
import { redirectionInterval } from 'lib/constants/config';
import GTMHelper from 'lib/GTMHelper';
import Layout from 'components/Layout';

export default function ThankYou() {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { platform } = router.query;

  const handleChangeRoute = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_REDIRECT_URL}/${
        i18n.language === 'en' ? 'en' : ''
      }`
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      // @ts-ignore
      return handleChangeRoute();
    }, redirectionInterval * 1000);

    // trigger once nana status is qualified
    if (localStorage.getItem('nana_status') === 'qualified') {
      const gtmHelper = new GTMHelper();

      gtmHelper.eventSuccessMsg(`${platform}`, { question: null });
      gtmHelper.eventCustomMessage('thankyou-message-visible', {
        question: null,
        [`Facebook-Lead-Event`]: null,
        lead_id: null,
      });
    }

    localStorage.removeItem('nana_status');
    // clean the timeout once component was umount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout>
      <Result
        title={t('thank_you_page.title')}
        subTitle={t('thank_you_page.subtitle')}
        buttonLabel={t('thank_you_page.button_label')}
        image="/images/thankyou.png"
        handleClick={handleChangeRoute}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(SiteConfigRoot).map((key) => {
      return { params: { platform: key } };
    }),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  };
};
