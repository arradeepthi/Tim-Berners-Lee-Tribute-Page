function home(){
    let str=`
  <h1 id="title">Tim Berners-Lee</h1>
  <p id="p1">The Man Who Invented WWW</p>
  <div class="border"></div>
  <main id="main">
    <div id="img-div">
      <img id="image" src="https://cybercultural.com/img/v2kehrclOe-956.webp" alt="Tim Berners-Lee">
    <div id="img-caption">British scientist who invented the World Wide Web (WWW) in 1989</div>
    </div>
    <div class="info">
      <h3>About Tim Berners-Lee:</h3>
      <ul>
        <li><pan><span class="year">1955<span class="divide">-</span></span>Born in London, England</span></li>
        <li><span><span class="year">1973-1976<span class="divide">-</span></span>Earned a BA Hons (I) in Physics from Queen's College, Oxford University</span></li>
        <li><span><span class="year">1980<span class="divide">-</span></span>While working at CERN, Berners-Lee first described the concept of a global system based on hypertext</span></li>
        <li><span><span class="year">1989<span class="divide">-</span></span>Berners-Lee proposed the World Wide Web in a paper titled "Information Management: A Proposal" </span></li>
        <li><span><span class="year">1990<span class="divide">-</span></span>Berners-Lee and CERN colleague Robert Cailliau submitted a management proposal for the World Wide Web project</span></li>
        <li><span><span class="year">1991<span class="divide">-</span></span>The world's first website, http://info.cern.ch, was launched</span></li>
        <li><span><span class="year">1993<span class="divide">-</span></span>The Mosaic browser was pre-released</span></li>
        <li><span><span class="year">1994<span class="divide">-</span></span>Berners-Lee founded the World Wide Web Consortium (W3C) at the Massachusetts Institute of Technology</span></li>
        <li><span><span class="year">2001<span class="divide">-</span></span>rners-Lee became a Fellow of the Royal Society </span></li>
        <li><span><span class="year">2004<span class="divide">-</span></span>Berners-Lee was knighted by Queen Elizabeth</span></li>
        <li><span><span class="year">2007<span class="divide">-</span></span>Berners-Lee was awarded the Order of Merit</span></li>
        <li><span><span class="year">2009<span class="divide">-</span></span>Berners-Lee was elected a foreign associate of the National Academy of Sciences </span></li>
        
      </ul>
    </div>
    <div class="border"></div>
    <div class="footer">
    <div id="tribute-info">For more information, check out</div>
<a id="tribute-link" href="https://en.wikipedia.org/wiki/Tim_Berners-Lee" target="_blank">Tim Berners-Lee on Wikipedia</a></div>
  </div>
  </main>`
  document.getElementById("msg").innerHTML=str;
}