import React from 'react';
import Pakcopy from './Pics/Pakcopy.png';


function BottomHalf(){

  return (
    <div className='bottomHalf'>
      <h1>The Fungible by</h1>
      <h1>Pak</h1>
      <p>Each purchase of “The Fungible” is an open edition unit that goes towards redemption of specific NFT’s. Delivery of the NFTs will be made at the end of the 3-day event, based on the total amount of units purchased. 
For example:</p>

<p>If you purchased 37 Open Edition units, you will receive 5 NFTs:</p>

<ul>"Twenty Cubes"
<br></br>
"Ten Cubes"
<br></br>
"Five Cubes"
<br></br>
"A Cube"
<br></br>
"A Cube"</ul>

<p>If you purchased 178 Open Edition units, you will receive 7 NFTs:</p>

<ul>"Hundred Cubes"
<br></br>
"Fifty Cubes"
<br></br>
"Twenty Cubes"
<br></br>
"Five Cubes"
<br></br>
"A Cube"
<br></br>
"A Cube"
<br></br>
"A Cube"</ul>

<h1 class="bottomTitle">Who is Pak</h1>
<img class="pakCopy" src={Pakcopy} type="image/png" />
<p class="pakDisc">Pak is an omniscient designer/developer/wizard, 
  one of the leads of the design scene as the founder of 
  Undream and one of the prominent social media figures as the 
  creator of Archillect, the synthetic curator. 
  Pak is currently at uncharted space experimenting 
  with new forms of creation and communication, discovering, 
  learning and teaching along the journey.</p>
    </div>
  );
}

export default BottomHalf;
