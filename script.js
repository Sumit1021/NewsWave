  main('politics');
  function main(content) {
  console.log('clicked....')
  //  alert("Wait....");
    fetch(`https://inshorts.deta.dev/news?category=${content}`)
    .then((x) => x.json())
    .then((response) => {
     news(response);
    });
}
function news(response)
{
  let head = document.getElementById("main-img");
  let mainH1=document.getElementById('main-h1')
  console.log(response);
  mainH1.innerHTML=response.data[4].content;
  head.src = response.data[4].imageUrl;
  let li=document.getElementsByTagName('li')
  console.log(li)
  let container=document.getElementById('container')
  container.innerHTML=""
  for(let i=0;i<response.data.length;i++)
  {
   container.innerHTML+=`<div id="box">
   <img src="${response.data[i].imageUrl}" alt="" id="box-img">
  <h2 id="box-h2">${response.data[i].title}.
  </h2>
  <div id="box-time">${response.data[i].date}</div>
  <p id="box-para">${response.data[i].content}</p>
  <a href="#" onclick="window.open('${response.data[i].readMoreUrl}')" id="link">Read more..</a>
 </div>`
  }

}

function change()
{
  document.body.style.cssText="background:#333;color:#fff;"
  let li=document.getElementsByTagName('li')
  for(let i=0;i<li.length;i++)
  {
    li[i].style.color="#fff"
  }
  let a=document.getElementsByTagName('a')
  for(let i=0;i<a.length;i++)
  {
    a[i].style.color="#306eea"
  }
}

// main('china');
