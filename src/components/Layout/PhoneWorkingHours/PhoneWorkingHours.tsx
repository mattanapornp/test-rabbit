import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { rem } from 'lib/util';
import useMediaQuery from 'hooks/useMediaQuery';

export interface PhoneWorkingHoursProps {
  phone: string;
  openingTime: string;
  isMobile?: boolean;
}

const PhoneWorkingHours = ({ phone, openingTime }: PhoneWorkingHoursProps) => {
  const [isMobile] = useMediaQuery();

  const boxStyle = {
    width: rem(18),
    height: rem(18),
    display: 'flex',
    alignItems: 'center',
    paddingTop: rem(5),
  };

  return (
    <Link href={`tel:${phone}`} passHref>
      <Box
        as="a"
        d="flex"
        flexDirection="row"
        minWidth={isMobile ? rem(62) : rem(114)}
        border="1px solid #e9edf5"
        borderRadius={rem(20)}
        alignItems="center"
        px={isMobile ? rem(6) : rem(20)}
        cursor="pointer"
        _hover={{
          textDecoration: 'none',
          border: '1px solid #003d74',
          background: '#f2f3fa',
        }}
        width={isMobile ? rem(60) : rem(115)}
        height={isMobile ? rem(30) : rem(36)}
        _active={{
          textDecoration: 'none',
        }}
      >
        <Box
          xs={boxStyle}
          mr={rem(8)}
          display="block"
          mt={isMobile ? rem(5) : ''}
        >
          <Image src="/images/icons/phone-icon.svg" width="18" height="18" />
        </Box>

        <Box
          as="div"
          display="flex"
          flexDirection="column"
          justifyContent="left"
          alignItems="flex-start"
        >
          <Text
            as="h4"
            textColor="rabbitBlue"
            fontSize={isMobile ? rem(12) : rem(18)}
            lineHeight={rem(27)}
            fontWeight="bold"
            fontFamily="Poppins, Kanit"
          >
            {phone}
          </Text>
          {!isMobile && (
            <Box as="div" whiteSpace="nowrap">
              <Text
                textColor="rabbitBlue"
                fontSize={rem(11)}
                lineHeight={rem(16.5)}
                fontFamily="Poppins, Kanit"
                pb={rem(3)}
                mt={rem(-7)}
              >
                {openingTime}
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </Link>
  );
};

export default PhoneWorkingHours;
