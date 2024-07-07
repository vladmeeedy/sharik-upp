import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3 } from 'react-icons/tb';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1 className="content__title">{t('aboutUs')}</h1>
      <div className="container--about">
        <p>{t('companyDescription')}</p>
        <p>
          <TbHexagonNumber1 />
          {t('aboutUsParagraph1')}
        </p>
        <p>
          <TbHexagonNumber2 />
          {t('aboutUsParagraph2')}
        </p>
        <p>
          <TbHexagonNumber3 />
          {t('aboutUsParagraph3')}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
