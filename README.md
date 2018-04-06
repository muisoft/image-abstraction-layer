 <h1 class="header">
                Image Search Abstraction Layer
            </h1>
            
 <blockquote>
    User stories:
    <ul>1) I can get the image URLs, alt text and page urls for a set of images relating to a given search string.</ul>
    <ul>2) I can paginate through the responses by adding a ?offset=2 parameter to the URL.</ul>
    <ul>3) I can get a list of the most recently submitted search strings.</ul>
</blockquote>
<h3>Example usage:</h3>
<code>https://image-absraction-muideen.glitch.me/api/search/rats</code>
<h3>Example output:</h3>
<pre>
  <code>
    [
      {
        "alt":"Rat | Animal Wildlife",
        "contentUrl":"http://3.bp.blogspot.com/-dGFs7_yd9n8/TmRLwqdVFyI/AAAAAAAAA2g/n5cql6PbQcU/s1600/rat_2.jpg",
        "hostPageUrl":"http://animal-wildlife.blogspot.com/2011/09/rat.html"
      },
      {
        "alt":"Pictures of Rats -- Animal Photos!",
        "contentUrl":"http://farm2.static.flickr.com/1332/1091960123_5bf912ca27_b.jpg",
        "hostPageUrl":"http://animalphotos.info/a/topics/animals/mammals/rodents/rats/"
      },
      {
        "alt":"Cute Rat Pictures by Jessica Florence",
        "contentUrl":"http://amazingcentral.com/wp-content/uploads/2011/01/adorable-rat-pictures-7.jpg",
        "hostPageUrl":"http://amazingcentral.com/cute-rat-pictures-by-jessica-florence/"
      },
      {
         "alt":"Rat Control NYC – Rat Control NJ – Rat Exterminator NYC",
         "contentUrl":"https://pestcontrolnjnyc.com/wp-content/uploads/2015/06/rat-exterminator-nyc.jpg",
         "hostPageUrl":"https://pestcontrolnjnyc.com/rat-exterminator/"
      }
    ]
</code>
</pre>
<h3>Example usage:</h3>
<code>https://image-absraction-muideen.glitch.me/api/latest</code>
<h3>Example output:</h3>
<pre><code>
  [
    {
      "when":1523050530,
      "query":"rats"
    },
    {
      "when":1523052797,
      "query":"cats"
    },
    {
      "when":1523052866,
      "query":"lizard"
    }
  ]
</code></pre>




You can view the live demo here: https://image-abstraction-muideen.glitch.me/
