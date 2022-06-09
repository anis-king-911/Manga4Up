const fieldset = document.querySelector('fieldset');
const form = document.querySelector('form');
const select = document.querySelector('select');
const pro = document.querySelector('progress');


let list2 = {
  '': '',
  'Ao No Exorcist': 'running',
  'Boruto NNG' : 'running',
  'Fairy Tail 100 Years Quest' : 'running',
  'Jujutsu Kaisen' : 'running',
  'One Punch Man' : 'running',
  'Pumpkin Night' : 'running',
  'Kimetsu No Yaiba' : 'finished',
  'Nanatsu no Taizai' : 'finished',
  'The Promised Neverland' : 'finished',
  'Tokyo Ghoul' : 'finished',
  'Attack On Titans' : 'finished',
  'Dragon Ball Super' : 'running',
  'Dr: Stone' : 'finished',
  'Black Clover' : 'running',
  'Boku No Hero Academia' : 'running',
  'Kuzumi-kun, Cant You Read the Room' : 'finished',
  //'Burn The Witch' : ' finished',
  //'I Sold My Life For Ten Thousand Yen Per Year' : 'finished',
  //'Mairimashita, Senpai' : 'finished',
  //'Samurai 8 Hachimaruden': 'finished',
};

Object.entries(list2).map(( [name, state] )=> {
  select.innerHTML += `<option value="${name}">${name}</option>`
})


form.cover.addEventListener('change', ()=> {
  console.log({
    time: Date.now(),
    title: form.title.value,
    number: form.number.value,
    links: [form.link1.value, form.link2.value],
    cover: form.cover.files[0],
    size: form.size.value,
    count: {from: form.from.value, to: form.to.value}
  })
})

form.addEventListener('submit', (event)=> {
  event.preventDefault();

  let data = {
    time: Date.now(),
    title: form.title.value,
    number: form.number.value,
    links: [form.link1.value, form.link2.value],
    cover: form.cover.files[0],
    size: form.size.value,
    count: {from: form.from.value, to: form.to.value}
  }
  /*
  if(data.title !== ''
  && data.number !== ''
  && data.count.from !== ''
  && data.count.to !== ''
  && data.size !== ''
  && data.links[data.links.length - 1] === ''
  && data.cover !== undefined
  ) {
  */
    Upload(data);
  
    setTimeout(()=> {
      form.reset();
      fieldset.disabled = true
    }, 600)
  /*
  } else {
    try {
      if(data.title === '') throw 'need title';
      if(data.number === '') throw 'need number';
      if(data.count.from === '' || data.count.to === '') throw 'need count';
      if(data.size === '') throw 'need file size';
      if(data.links[data.links.length - 1] === '') throw 'need links';
      if(data.cover === undefined) throw 'need cover';
      
    } catch(error) {
      console.error(error)
    }
    
  }
  */
})



import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
  getDatabase, ref, set, child
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import {
  getStorage, ref as cloud, uploadBytesResumable as UploadFile, getDownloadURL
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



const WindowURL = window.location.href.split('/').pop();
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
let path = 'Manga4Up';


function Upload(arg) {
  const storage_ref = cloud(storage, `${path}/${arg.title}/${arg.cover.name}`);
  const upload_task = UploadFile(storage_ref, arg.cover);

  upload_task.on('state_changed', (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

      switch (snapshot.state) {
        case `paused`:
          console.log(`Upload is paused`);
          break;
        case `running`:
          console.log(`Upload is running ${progress}%`);
          pro.value = progress;
          break;
      }
    }, (error) => {
      console.log(error)
    }, () => {
      getDownloadURL(upload_task.snapshot.ref).then((downloadURL) => {
        const database_ref = ref(database, `${path}/`)
        const database_child = child(database_ref, `${arg.time}/`)
        const database_upload = child(database_child, 'Volume Data/')

        set(database_upload, {
          'Manga Title': arg.title,
          'Volume Number': arg.number,
          'Volume Cover': downloadURL,
          'Download Links': arg.links,
          'File Size': `${arg.size} Mb`,
          'Chapters Count': {
            From: arg.count.from,
            To: arg.count.to
          }
        })
        .then(()=> {
          console.log('done')
          fieldset.disabled = false;
          pro.value = 0;
        })
        .catch((error)=> {console.log(error)})
      });
    }
  );
}
