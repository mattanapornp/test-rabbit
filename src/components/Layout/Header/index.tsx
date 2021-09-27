import React from 'react';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';

import PhoneWorkingHours from '../PhoneWorkingHours/PhoneWorkingHours';
import useMediaQuery from 'hooks/useMediaQuery';
import { rem } from 'lib/util';

const LayoutHeader = () => {
  const { t, i18n } = useTranslation('common');
  const [isMobile] = useMediaQuery();

  return (
    <Container
      bg="white"
      position="sticky"
      top={0}
      left={0}
      maxW="100%"
      zIndex={100}
      boxShadow="0px 7px 15px rgba(42, 49, 203, 0.1)"
    >
      <Grid
        templateColumns="repeat(2, auto)"
        justifyContent="space-between"
        alignItems="center"
        minH="60px"
        width={{
          base: '95%',
          lg: '100%',
          md: '100%',
          xl: rem(1140),
        }}
        margin="0 auto"
        py={2}
        px={{
          base: '0',
          md: '10px',
          xl: '15px',
        }}
      >
        <GridItem display="flex" alignItems="center">
          <Link
            href={`${process.env.NEXT_PUBLIC_REDIRECT_URL}/${
              i18n.language === 'en' ? 'en' : ''
            }`}
          >
            <Box
              w={isMobile ? '142px' : '300px'}
              h={isMobile ? '47px' : '48px'}
              d="flex"
              alignItems="center"
              position="relative"
              cursor="pointer"
            >
              <Image
                src={`/images/site-logo-${isMobile ? 'mobile' : 'desktop'}-${
                  i18n.language === 'en' ? 'en' : 'th'
                }.svg`}
                width={isMobile ? '142px' : '300px'}
                height={isMobile ? '47px' : '48px'}
                // layout="fill"
                alt={t('brand_tag_line')}
              />
            </Box>
          </Link>
        </GridItem>
        <GridItem display="flex" alignItems="center">
          <PhoneWorkingHours phone="1438" openingTime={t('opening_hours')} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default LayoutHeader;
