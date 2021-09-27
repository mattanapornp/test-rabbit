import React from 'react';

interface LimitationTextProps {
  text: string;
  lang: string;
}

const LimitationText = ({ lang, text }: LimitationTextProps): JSX.Element => {
  if (lang === 'en') {
    return (
      <span
        style={{
          color: '#005098',
          fontSize: '1rem',
        }}
      >
        {text}
      </span>
    );
  }
  return <></>;
};

export default LimitationText;
