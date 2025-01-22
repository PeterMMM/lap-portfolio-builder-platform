
import Banner from '@/components/Banner';
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';
import Grid from '@/components/grid';
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
          backgroundImage: "url('https://64.media.tumblr.com/ff730b42ff21de76d498eab475818df2/86305901a05ad4f9-c2/s1308x736/60ac25f2d66c468c91157e73a01cfd33f75e8b49.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          position: 'relative',
        }}
      >
        <br></br>
        <Search />
        <br></br>
       
        <h1 className="text-8xl font-extrabold text-white text-left ml-96">
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
