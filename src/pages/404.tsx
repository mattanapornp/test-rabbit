import React from 'react';
import { Box, Button, Container } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import useMediaQuery from 'hooks/useMediaQuery';
import Layout from 'components/Layout';
import asset from 'utils/asset';
import { rem } from 'lib/util';

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const [isMobile] = useMediaQuery();
  const router = useRouter();

  const handleChangeRoute = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_REDIRECT_URL}/${
        i18n.language === 'en' ? 'en' : ''
      }`
    );
  };

  return (
    <Layout>
      <Container
        textAlign="center"
        d="flex"
        alignItems="center"
        flexDir="column"
        maxWidth={isMobile ? '650px' : '100%'}
        overflow="hidden"
      >
        <Box
          w="424px"
          h="316px"
          d="flex"
          alignItems="center"
          position="relative"
          mt={isMobile ? '150px' : '185px'}
          mb="30px"
        >
          <Image
            src={asset('images/notfound.png')}
            layout="fill"
            alt="Not Found"
          />
        </Box>
        <Box
          as="h3"
          color="#005098"
          fontWeight="700"
          fontSize={rem(22)}
          lineHeight={rem(33)}
          w={{ base: '100%', sm: '70%' }}
        >
          {t('not_found_page.title')}
        </Box>
        <Box as="p" mt="20px" mb="30px" w={{ base: '100%', sm: '70%' }}>
          {t('not_found_page.subtitle')}
        </Box>
        <Button
          colorScheme="blue"
          py={13}
          lineHeight={rem(24)}
          mb={30}
          h={50}
          background="#005098"
          onClick={handleChangeRoute}
          borderRadius="10px"
          _hover={{
            bg: '#003D74',
          }}
        >
          {t('not_found_page.button_label')}
        </Button>
      </Container>
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
