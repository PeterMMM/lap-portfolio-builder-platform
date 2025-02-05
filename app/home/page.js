
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
          backgroundImage: "url('./images/gradient.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          position: 'relative',
        }}
      >
        <br></br>
        <Search />
        <br></br>
       
        <h1 className="text-8xl font-extrabold text-greenone text-left ml-96">
  Find Your <br />
  Creator
</h1>
<br></br>

<Cards/>

<h2 className="text-2xl font-extrabold text-black text-left ml-52">Discover More</h2>
<br></br>
<IllustrationCard/>
<br></br>
<Threeparas/>
<Banner/>
<br></br>
<Grid/>
<br></br>
<Footer/>

    
      </div>
    </>
  );
}
