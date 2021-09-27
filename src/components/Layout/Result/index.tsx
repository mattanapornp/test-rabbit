import React from 'react';
import { useTranslation } from 'next-i18next';
import { Box, Button, Container } from '@chakra-ui/react';
import Image from 'next/image';

import useMediaQuery from 'hooks/useMediaQuery';
import { rem } from 'lib/util';
import asset from 'utils/asset';

interface Props {
  image: string;
  title: string;
  // eslint-disable-next-line react/require-default-props
  subTitle?: string;
  buttonLabel: string;
  handleClick: () => void;
}

const Result = ({
  image,
  title,
  buttonLabel,
  subTitle = '',
  handleClick,
}: Props) => {
  const [isMobile] = useMediaQuery();
  const { i18n } = useTranslation();

  return (
    <Container
      textAlign="center"
      d="flex"
      alignItems="center"
      flexDir="column"
      maxWidth={isMobile ? '650px' : '100%'}
    >
      <Box
        w={isMobile ? '321px' : '321px'}
        h={isMobile ? '280px' : '280px'}
        d="flex"
        alignItems="center"
        position="relative"
        mt="100px"
        mb="53px"
      >
        <Image src={asset(image)} layout="fill" />
      </Box>
      <Box
        as="h3"
        color="#f78f1e"
        fontWeight="700"
        fontSize={rem(22)}
        lineHeight={rem(33)}
        w={{ base: '100%', sm: '90%' }}
      >
        {title}
      </Box>
      {subTitle && (
        <Box
          as="p"
          mt="20px"
          w="100%"
          dangerouslySetInnerHTML={{ __html: subTitle }}
          fontSize={isMobile && i18n.language === 'en' ? '0.9rem' : '1rem'}
          color="#4f4b66"
        />
      )}
      <Button
        colorScheme="blue"
        w={!isMobile ? '343px' : '95%'}
        py={13}
        lineHeight={rem(24)}
        my={30}
        h={50}
        background="#005098"
        onClick={handleClick}
        borderRadius="10px"
        mx={isMobile ? 'auto' : 0}
        _hover={{
          bg: '#003d74',
        }}
      >
        {buttonLabel}
      </Button>
    </Container>
  );
};

export default Result;
