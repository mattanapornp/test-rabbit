import React, { useEffect } from 'react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import SiteConfigRoot from '../../../../siteConfig';
import Layout from 'components/Layout';
import usePlatFormData from 'hooks/usePlatFormData';
import LoadingSpinner from 'components/common/LoadingSpinner';
import QuestionFlowForm from 'components/Questions/QuestionFlowForm';
import HeaderMeta from 'components/Layout/HeaderMeta';
import GTMHelper from 'lib/GTMHelper';
import { getDeviceType } from 'lib/util';

interface Props {
  siteConfig: {
    title: string;
    description: string;
    keywords: string;
  };
  platform: string;
}

/**
 * Question flow form for leasing and loan platform
 */

export default function Home(props: Props) {
  const { siteConfig } = props;
  const router = useRouter();
  const { platform } = router.query;

  function handleApiError() {
    router.push('/error');
  }

  useEffect(() => {
    const gtmHelper = new GTMHelper();
    // trigger once nana status is qualified
    gtmHelper.eventPageLoadMessage('question_flow', {
      section: platform,
      device: getDeviceType(),
    });

    gtmHelper.eventCustomMessage('question_start', {
      section: platform,
    });

    // removed nana_status from local storage everytime user had revisited to question flow page
    localStorage.removeItem('nana_status');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { config: platFormConfig, isLoading } = usePlatFormData(
    platform,
    handleApiError
  );

  return (
    <Layout>
      <HeaderMeta {...siteConfig} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <QuestionFlowForm data={platFormConfig} platform={platform} />
      )}
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

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  // @ts-ignore
  const siteConfig = SiteConfigRoot[params.platform];

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'motor'])),
      locale,
      params,
      siteConfig,
    },
  };
};
