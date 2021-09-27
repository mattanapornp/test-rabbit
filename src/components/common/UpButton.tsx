import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import styles from './UpButton.module.scss';
import screenSize from 'lib/constants/screenSize';

interface UpButtonProps {
  questionOrder: Array<string>;
}

const UpButton = ({ questionOrder }: UpButtonProps) => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const updateDisplay = () => {
    if (window.scrollY > 200 && window.innerWidth <= screenSize.SMALL) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const offset = (el) => {
    const rect = el?.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect?.top + scrollTop, left: rect?.left + scrollLeft };
  };

  const scrollUp = (e) => {
    e.preventDefault();

    // nearest upper Question
    const userCurrentPosition = window.scrollY;
    const progressBarSize = 65;

    const upperQuestion = questionOrder.reduce(
      (previous, qn) =>
        offset(document.getElementById(qn)).top < userCurrentPosition
          ? qn
          : previous,
      ''
    );

    const upperQnBlock = document.getElementById(upperQuestion);
    // Navigate user to previous question
    setTimeout(() => {
      window.scrollTo({
        top: offset(upperQnBlock).top - progressBarSize,
        behavior: 'smooth',
      });
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDisplay);
    window.addEventListener('scroll', updateDisplay);
    return () => {
      window.removeEventListener('resize', updateDisplay);
      window.removeEventListener('scroll', updateDisplay);
    };
  }, []);

  return (
    <button
      className={`${styles.wrapper} ${show ? 'visible' : 'invisible'}`}
      onClick={scrollUp}
      type="button"
    >
      <div
        className={`${styles.upbtn} btn d-flex flex-column align-items-center justify-content-center`}
      >
        <img src="/images/icons/up-chevron.svg" alt="up" />
        <div className={`${styles.text}`}>{t('common:up_button_label')}</div>
      </div>
    </button>
  );
};

export default UpButton;
