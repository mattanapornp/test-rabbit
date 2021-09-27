import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import { redirectionInterval } from 'lib/constants/config';
import Layout from 'components/Layout';
import Result from 'components/Layout/Result';
import GTMHelper from 'lib/GTMHelper';

export default function Rejection() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const handleRedirectForCash = (route) => {
    if (route.redirectToCash) {
      return 'cash-card';
    }
    return '';
  };

  const handleChangeRoute = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_REDIRECT_URL}/${
        i18n.language === 'en' ? 'en' : handleRedirectForCash(router.query)
      }`
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      // @ts-ignore
      return handleChangeRoute();
    }, redirectionInterval * 1000);

    // trigger once nana status is rejected
    if (localStorage.getItem('nana_status') === 'rejected') {
      const gtmHelper = new GTMHelper();
      gtmHelper.eventCustomMessage('reject_message_visible', {
        question: null,
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
        title={t('rejection_page.title')}
        buttonLabel={t('rejection_page.button_label')}
        subTitle={t('rejection_page.subtitle')}
        image="/images/rejection.png"
        handleClick={handleChangeRoute}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  };
};
