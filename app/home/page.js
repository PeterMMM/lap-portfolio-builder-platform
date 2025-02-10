
import Banner from '@/components/Banner';
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';
import Grid from '@/components/Grid';
import IllustrationCard from '@/components/IllustrationCard';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import Threeparas from '@/components/Threeparas';

import React from 'react';

export default function Page() {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: "url('images/homebackground.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative',

        }}
      >
        <br></br>
        <Search />
        <br></br>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-[#4A7337] text-left ml-4 sm:ml-16 md:ml-32 lg:ml-96">
          Find Your <br />
          Creator
        </h1>
        <br></br>
        <Cards />
        <h2 className=" sm:pl-0 md:pl-14 lg:pl-24  text-2xl font-extrabold text-black text-left mx-20 sm:ml-0 md:ml-24 lg:ml-44 ">Discover More</h2>

        <IllustrationCard />
        <br></br>
        <Threeparas />
        <Banner />
        <br></br>
        <Grid />
        <br></br>
        <Footer />


      </div>
    </>
  );
}
