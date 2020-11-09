import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css'

const names = [
  'Fifi',
  'Fanny',
  'Dolly',
  'Bimbo',
  'Lola',
  'Gigi',
  'Lulu',
  'Rita',
  'Kitty',
  'Bella',
  'Didi',
  'Marie',
  'Chantal',
  'Mademoiselle',
  'Dame',
  'Lady',
  'Miss',
  'Princess',
  'Diva',
  'Baby',
  'Femme',
  'Darling',
  'Duchess',
  'Seductress',
  'Vixen',
  'Kitten',
  'Fox',
  'Kitty',
  'Crystal',
  'Diamond',
  'Sapphire',
  'Topaz',
  'Pearl',
  'Amber',
  'Rose',
  'Iris',
  'Magnolia',
  'Lily',
  'Lotus',
  'Lavender',
  'Begonia',
  'Ambrosia',
  'Ebony',
  'Carmine',
  'Scarlet',
  'Rouge',
  'Magenta',
  'Noire',
  'Violet',
  'Azure',
  'Pink',
  'Ruby',
  'Velvet',
  'Fur',
  'Cotton',
  'Martini',
  'Campari',
  'Bourbon',
  'Rum',
  'Vermouth',
  'Spice',
  'Sugar',
  'Bubbles',
  'Candy',
  'Peach',
  'Ginger',
  'Plum',
  'Cherry',
  'Coco ',
  'Honey',
  'Fondue',
  'Cinnamon',
  'Marmalade',
  'Pepper',
  'Brassiere',
  'Stiletto',
  'Bazooka',
  'Bottoms',
  'Top',
  'Biggun',
  'Summer',
  'Spring',
  'Winters',
  'Autumn',
  'Sunshine',
  'Storm',
  'Hurricane',
  'Aurora',
  'Star',
  'Nebula',
  'Blaze',
  'Flame',
  'Mist',
  'Spark ',
  'Celeste',
  'Sky',
  'North',
  'South',
  'East',
  'West',
  'Rocks',
  'River',
  'Rain',
  'Paris',
  'Memphis',
  'Florida',
  'India',
  'Cairo',
  'Dakota',
  'Tease',
  'Amour',
  'Dazzle',
  'Sparkle',
  'Whispers',
  'Valentine',
  'Cha-cha',
  'Melody',
  'Charleston',
  'Oui-Oui',
  'Strong',
  'Little',
  'Big',
  'Foxy',
  'Strange',
  'Crazy',
  'Dirty',
  'Sweet',
  'Royal',
  'Fierce',
  'Sassy',
  'Cool',
  'Deluxe',
  'Kinky',
  'Juicy',
  'Divine',
  'Supreme',
  'Fury',
  'Petite',
  'Jolie',
  'Frou-frou',
]


export default function Home() {
  const [name, setName] = useState<{ first: string; last: string} | null>(null);
  const [selected, setSelected] = useState(false);
  function selectName() {
    const first = names[Math.floor(Math.random() * names.length)];
    const last = names[Math.floor(Math.random() * names.length)];
    setName({ first, last });
    setSelected(true);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Glam Squad Burlesque Name Generator</title>
      </Head>

      <main className={styles.main}>
        <Image src="/logo.png" width={460} height={265} alt="glam squad burlesque" />
        <button className={styles.btn} onClick={selectName}>Who am I?</button>
        {name &&
          <div className={styles.name}>{name.first} {name.last}</div>
        }
      </main>
    </div>
  )
}
