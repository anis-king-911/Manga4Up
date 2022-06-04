/**
 * change the database ? done
 * with the storage !! done
 * add free link 
 * add search methode done
 */

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
  getDatabase, ref, onValue,
  query, orderByKey, limitToLast
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

const WindowURL = window.location.href.split("/").slice(-1).pop();
const container = document.querySelector('.PostsContainer') || document.querySelector('.ListContainer') || document.querySelector('.VolumesContainer');
const loadMore = document.querySelector('.loadMore button');
const search = document.querySelector('.search input');
let path = 'Manga4Up', size = 20, d = 8;

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
  input = document.querySelector('.search input');
  filter = input.value.toUpperCase();
  ul = document.querySelector(".ListContainer");
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



async function GetAllData(size) {
  const databaseRef = await ref(database, `${path}`)
  const databaseOrder = await query(databaseRef, orderByKey())
  const databaseChild = await query(databaseOrder, limitToLast(size))
  
  onValue(databaseChild, (snapshot)=> {
    container.innerHTML = '';
    
    snapshot.forEach((snap)=> {
      const key = snap.key
      const value = snap.val()
      const data = value['Volume Data']
      console.log(data)
      
      container.innerHTML = post(data, key) + container.innerHTML;
    })
    
  })
}
async function GetDataList() {
  const storageRef = cloud(storage, `${path}/`);
  container.innerHTML = '';

  listAll(storageRef).then((res)=> {
    res.prefixes.forEach((folder)=> {

      listAll(folder).then((res2)=> {

        let lastCover = res2.items[res2.items.length - 1]
        let fullPath = res2.items[res2.items.length - 1].fullPath
        let VolumeCount = res2.items.length
        let ref = fullPath.split('/')[1]

        getDownloadURL(lastCover).then((downloadURL)=> {
          container.innerHTML += list(ref, downloadURL, VolumeCount);
        })
      }).catch((error)=> {console.log(error)})

    })
  }).catch((error)=> {console.log(error)})
}
async function GetOneManga(name) {
  const databaseRef = ref(database, `${path}`);

  onValue(databaseRef, (snapshot)=> {
    container.innerHTML = '';

    snapshot.forEach((snap)=> {
      const key = snap.key;
      const value = snap.val();
      const data = value['Volume Data'];

      if(data['Manga Title'] === name.replaceAll('_', ' ')) {
        container.innerHTML = post(data, key) + container.innerHTML;
      }
    })
  })
}

const post = (arg, id)=> {
  let div =
  `
    <div class="post" id="${id}">
      <img loading="lazy" src="${arg['Volume Cover']}" alt="${arg['Manga Title']}/ ${arg['Volume Number']}"/>
      <div class="content">
        <a href="./manga.html#/${arg['Manga Title'].replaceAll(' ', '_')}" >
          ${arg['Manga Title']}:: ${arg['Volume Number']}
        </a>
        ${arg['File Size']} ::حجم الملف <br />
        ${arg['Chapters Count'].From} => ${arg['Chapters Count'].To} عدد الفصول <br />
        ${ReversTime(id)}
        <div class="btns">
          ${
            arg['Download Links'].map((link, index)=> 
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
const list = (title, src, n)=> {
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


window.onload = ()=> {
  if(WindowURL === '' || WindowURL === 'index.html') {
    GetAllData(size)

    loadMore.addEventListener('click', ()=> {
      size = size+d;

      GetAllData(size)
    })
  } else if(WindowURL === 'list.html') {
    GetDataList()

    search.addEventListener('keyup', ()=> {
      FilterSearch();
    })
  } else {
    GetOneManga(WindowURL)
  }
}
