import React from 'react';
import { useTranslation } from 'react-i18next';

const Guarantee = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1 className="content__title">{t('guaranteeAndReturn')}</h1>
      <div className="container--guarantee">
        <p>{t('guaranteeParagraph1')}</p>
        <h3>{t('guaranteeCases')}</h3>
        <p>{t('guaranteeParagraph2')}</p>
        <p>{t('guaranteeParagraph3')}</p>
        <p>{t('guaranteeParagraph4')}</p>
        <p>{t('guaranteeParagraph5')}</p>
        <p>{t('guaranteeParagraph6')}</p>
        <h3>{t('refundPolicy')}</h3>
        <p>{t('refundPolicyParagraph1')}</p>
        <h3>{t('returnPolicy')}</h3>
        <p>{t('returnPolicyParagraph1')}</p>
        <h3>{t('financialGuarantees')}</h3>
        <p>{t('financialGuaranteesParagraph1')}</p>
        <p>{t('financialGuaranteesParagraph2')}</p>
        <h3>{t('nonGuaranteeCases')}</h3>
        <p>{t('nonGuaranteeCasesParagraph1')}</p>
        <p>{t('nonGuaranteeCasesParagraph2')}</p>
        <p>{t('nonGuaranteeCasesParagraph3')}</p>
        <p>{t('nonGuaranteeCasesParagraph4')}</p>
        <h2>{t('balloonHandlingRules')}</h2>
        <p>{t('balloonHandlingRulesParagraph1')}</p>
        <p>{t('balloonHandlingRulesParagraph2')}</p>
        <p>{t('balloonHandlingRulesParagraph3')}</p>
        <p>{t('balloonHandlingRulesParagraph4')}</p>
        <p>{t('balloonHandlingRulesParagraph5')}</p>
        <p>{t('balloonHandlingRulesParagraph6')}</p>
        <p>{t('balloonHandlingRulesParagraph7')}</p>
      </div>
    </div>
  );
};

export default Guarantee;
