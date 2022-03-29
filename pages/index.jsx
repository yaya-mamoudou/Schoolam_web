import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {AppLayout, Hero} from '../components'

export default function Home() {
  const { i18n, t } = useTranslation();

  return (
    <AppLayout>
      <Head>
        <title>Schoolam</title>
      </Head>
      <Hero/>
    </AppLayout>
  );
}
