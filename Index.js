input = document.getElementById('input');
submitBtn = document.getElementById('checkLinksBtn');
linksContainer = document.getElementById("links")




function splitHTMLWithTagsAndContent(html) {
    // Regular expression to split HTML elements
    blogHTML = [];
  const regex = /(<[^>]+>)([^<]*)/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    blogHTML.push(match[0]);
    }
    return blogHTML;
    
}
let checkLinks = function () {
  let html = input.value;
  blogHTML = splitHTMLWithTagsAndContent(html);
    links = [];
    blogHTML.forEach(element => {
        if (element.includes("<a")) {
            links.push(element)
        }
    });
    links.forEach((e) => {
        if(e.includes('_blank')){
            linksContainer.innerHTML += `<li>${e}- True</li>`;
        } else {
            linksContainer.innerHTML += `<li>${e}- False</li>`
            }
    })
    console.log(links)
}


submitBtn.addEventListener("click", checkLinks);