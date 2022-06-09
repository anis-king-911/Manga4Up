let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}


import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
  getDatabase, ref, onValue,
  query, limitToLast
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import {
  getStorage, ref as cloud, listAll, getDownloadURL
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyAwI_lwV52VuKJYjeSID811WEv5u2AF70w",
  authDomain: "manga4up-vercel.firebaseapp.com",
  databaseURL: "https://manga4up-vercel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "manga4up-vercel",
  storageBucket: "manga4up-vercel.appspot.com",
  messagingSenderId: "1063989292418",
  appId: "1:1063989292418:web:427fb5e5422fc4858bf39b"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);

const WindowURL = window.location.href.split('/').pop();
const loadMore = document.querySelector('.loadMore');
const search = document.querySelector('.gallery .Search input');
const PageTitle = document.querySelector('.gallery .heading h3');
const PostsContainer = document.querySelector('.gallery .box-container');
let path = 'Manga4Up', size = 20, d = 6;



function MainPage() {
  const database_ref = ref(database, `${path}/`)
  const database_limit = query(database_ref, limitToLast(d))

  onValue(database_limit, (snapshot)=> {
    snapshot.forEach((snap)=> {
      const key = snap.key;
      const data = snap.val()['Volume Data'];

      PostsContainer.innerHTML = POST(key, data) + PostsContainer.innerHTML;
    })
  })
}
function GetAllData(size) {
  const database_ref = ref(database, `${path}/`)
  const database_limit = query(database_ref, limitToLast(size))

  onValue(database_limit, (snapshot)=> {
    PostsContainer.innerHTML = '';

    snapshot.forEach((snap)=> {
      const key = snap.key;
      const data = snap.val()['Volume Data'];

      PostsContainer.innerHTML = POST(key, data) + PostsContainer.innerHTML;
    })
  })
}
function GetAllList() {
  const storageRef = cloud(storage, `${path}/`);
  PostsContainer.innerHTML = '';

  listAll(storageRef).then((res)=> {
    res.prefixes.forEach((folder)=> {

      listAll(folder).then((res2)=> {

        let lastCover = res2.items[res2.items.length - 1]
        let fullPath = res2.items[res2.items.length - 1].fullPath
        let VolumeCount = res2.items.length
        let ref = fullPath.split('/')[1]

        getDownloadURL(lastCover).then((downloadURL)=> {
          PostsContainer.innerHTML += ITEM(ref, downloadURL, VolumeCount);
        })
      }).catch((error)=> {console.log(error)})

    })
  }).catch((error)=> {console.log(error)})
}
function GetOneManga(name) {
  const database_ref = ref(database, `${path}/`)

  onValue(database_ref, (snapshot)=> {
    PostsContainer.innerHTML = '';
    PageTitle.textContent = name.replaceAll('_', ' ')
    
    snapshot.forEach((snap)=> {
      const key = snap.key;
      const data = snap.val()['Volume Data'];
      
      if(data['Manga Title'] === name.replaceAll('_', ' ')) {
        PostsContainer.innerHTML = POST(key, data) + PostsContainer.innerHTML;
      }
    })
  })
}

const POST = (key, data)=> {
  let div = `
  <div class="post" id="${key}">
    <img loading="lazy" src="${data['Volume Cover']}" alt="${data['Manga Title']}/ ${data['Volume Number']}"/>
    <div class="content">
      <a href="./manga.html#/${data['Manga Title'].replaceAll(' ', '_')}" >
        ${data['Manga Title']}:: ${data['Volume Number']}
      </a>
      ${data['File Size']} ::حجم الملف <br />
      ${data['Chapters Count'].To} <= ${data['Chapters Count'].From} ::عدد الفصول <br />
      ${ReversTime(key)}
      <div class="btns">
        ${
          data['Download Links'].map((link, index)=> 
          `
            <a href="${link}" target="_blank">
              <button> رابط التحميل ${index+1} </button>
            </a>
          `
          ).join('')
        }
      </div>
    </div>
  </div>
  `;

  return div;
}
const ITEM = (title, src, n)=> {
  let div =
  `
    <div class="post">
      <img loading="lazy" src="${src}" alt="${title}"/>
      <div class="content">
        <a href="./manga.html#/${title.replaceAll(' ', '_')}" >${title}</a>
        عدد المجلدات ${n}
      </div>
    </div>
  `;

  return div;
}

function ReversTime(arg) {
  const one = Number(arg);
  const two = new Date(one);

  const day = two.getDate();
  const month = two.getMonth()+1
  const year = two.getFullYear();

  const FullDate = `${day}/${month}/${year}`;

  return FullDate;
}
function FilterSearch() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.querySelector('.Search input');
  filter = input.value.toUpperCase();
  ul = document.querySelector(".gallery .box-container");
  li = ul.querySelectorAll('.post');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



window.onload = ()=> {
  if(WindowURL === '' || WindowURL === 'index.html') {
    MainPage();
  } else if(WindowURL === 'recent.html') {
    GetAllData(size);

    loadMore.addEventListener('click', ()=> {
      size = size+d;

      GetAllData(size)
    });
  } else if(WindowURL === 'list.html') {
    GetAllList()
    
    search.addEventListener('keyup', () => {
      FilterSearch();
    })
  } else {
    GetOneManga(WindowURL)
  }
}
