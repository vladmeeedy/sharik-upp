import React from 'react'
import { useTranslation } from 'react-i18next';

const ContractOfer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <h1 className="content__title">{t('contract.title')}</h1>
      <div className="container--contract-ofer">
      <p>{t('contract.section1')}</p>
        <p>{t('contract.section2')}</p>
        <p>{t('contract.section3')}</p>
        <h3>{t('contract.section4Title')}</h3>
        <p>{t('contract.section4')}</p>
        <h3>{t('contract.section5Title')}</h3>
        <p>{t('contract.section5_1')}</p>
        <p>{t('contract.section5_2')}</p>
        <p>{t('contract.section5_3')}</p>
        <h3>{t('contract.section6Title')}</h3>
        <p>{t('contract.section6')}</p>
        <h3>{t('contract.section7Title')}</h3>
        <p>{t('contract.section7_1')}</p>
        <p>{t('contract.section7_2')}</p>
        <p>{t('contract.section7_3')}</p>
        <h3>{t('contract.section8Title')}</h3>
        <p>{t('contract.section8_1')}</p>
        <p>{t('contract.section8_2')}</p>
        <p>{t('contract.section8_3')}</p>
        <h3>{t('contract.section9Title')}</h3>
        <p>{t('contract.section9_1')}</p>
        <p>{t('contract.section9_2')}</p>
        <p>{t('contract.section9_3')}</p>
        <h3>{t('contract.section10Title')}</h3>
        <p>{t('contract.section10')}</p>
        <h3>{t('contract.section11Title')}</h3>
        <p>{t('contract.section11_1')}</p>
        <p>{t('contract.section11_2')}</p>
        <p>{t('contract.section11_3')}</p>
        <h3>{t('contract.section12Title')}</h3>
        <p>{t('contract.section12_1')}</p>
        <p>{t('contract.section12_2')}</p>
        <p>{t('contract.section12_3')}</p>
      </div>
    </div>
  )
}

export default ContractOfer
