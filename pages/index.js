import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { count_action } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { i18n, t } = useTranslation();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const add = (option) => {
    dispatch(count_action(option));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{state.count}</div>
      <button onClick={() => add(true)}>{t('add')}</button>
      <button onClick={() => add()}>{t('subtract')}</button>
      <button onClick={() => i18n.changeLanguage(i18n.language == 'en' ? 'fr' : 'en')}>
        {t('subtract')}
      </button>
    </div>
  );
}
