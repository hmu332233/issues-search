import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import algoliasearch from 'algoliasearch/lite';
import { useEffect } from 'react';

const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_ID as string, process.env.NEXT_PUBLIC_ALGOLIA_KEY as string);
const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX as string);

const Home: NextPage = () => {

  useEffect(() => {
    // index.search('t').then(({ hits }) => {
    //   console.log(hits);
    // });
  }, []);


  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default Home
