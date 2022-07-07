window.onscroll = () =>{
  if(window.scrollY > 80){
    document.querySelector('header .header-2').classList.add('active');
  }else{
    document.querySelector('header .header-2').classList.remove('active');
  }
}

window.onload = () =>{
  if(window.scrollY > 80){
    document.querySelector('header .header-2').classList.add('active');
  }else{
    document.querySelector('header .header-2').classList.remove('active');
  }

  fadeOut();
}

function SearchFilter() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.querySelector(".SearchBox");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".BooksListContainer");
  li = ul.querySelectorAll("article");
  for (i = 0; i < li.length; i++) {
      a = li[i].querySelectorAll("article .Content h3")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function loader(){
  document.querySelector('.loading').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

import Routes from "./modules/Routes.js";
const SearchForm = document.querySelector('.SearchForm');
const SearchBtn = document.querySelector('.SearchBtn');
const SearchBox = document.querySelector('.SearchBox');
const loadMore = document.querySelector('.loadMore');
const loading = document.querySelector('.loading');

let WindowREF = window.location.href.split('/').pop();
let WindowPATH = window.location.pathname;
let size = 30, d = 6, blog_size = 3;
let PathNames = [
  '/Page/List/index.html',
  '/Page/Recent/index.html',
  '/Page/Manga/index.html',
  '/Page/Blog/index.html',
  '/Page/Blogs/index.html',
  '/Page/Contact/index.html',
  ];

function LoadPage() {
  console.log(`ref => {${WindowREF}} path => {${WindowPATH}}`);
  
  setTimeout(()=> {
    
    PathNames.map((path)=> {
      if(WindowPATH === path) {
        window.location.assign('./');
      }
    })
    
    if(WindowPATH === '/Page/Blog/' && WindowREF === ''
    || WindowPATH === '/Page/Manga/' && WindowREF === '') {
      window.location.assign('../List/');
    }
    
    if (WindowPATH === '/' || WindowPATH === '/index.html') {
      Routes.GetMainPage(d, blog_size)
    } else if (WindowPATH === '/Page/List/') {
      Routes.GetAllList()

      /* OPEN SEARCH INPUT */

      SearchBtn.onclick = () =>{
        SearchForm.classList.toggle('active');
      }
      SearchForm.addEventListener('submit', (event)=> {
        event.preventDefault();
      });
      window.onscroll = ()=> {
        SearchForm.classList.remove('active');
      }

      /* DO THE SEARCH */

      SearchBox.addEventListener('keyup', ()=> {
        SearchFilter();
      })
    } else if (WindowPATH === '/Page/Recent/') {
      Routes.GetRecentData(size)

      loadMore.addEventListener('click', ()=> {
        size=size+d;
  
        Routes.GetRecentData(size)
      })
    } else if(WindowPATH === '/Page/Manga/') {
      Routes.GetOneManga(WindowREF)
    } else if(WindowPATH === '/Page/Blogs/') {
      Routes.GetAllBlogs()
    } else if(WindowPATH === '/Page/Blog/') {
      Routes.GetOneBlog(WindowREF)
    }
  }, 600)
}

LoadPage();
//window.addEventListener('load', ()=> {})