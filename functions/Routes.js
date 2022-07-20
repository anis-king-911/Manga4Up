import {database, ref, child, onValue, query, orderByChild, limitToLast} from '/functions/Firebase.js';
import {push, set} from '/functions/Firebase.js';
import {path, pathList, blog, order, orderList} from '/functions/Firebase.js';
import {HOME_BOOK, LIST_BOOK, RECENT_BOOK, HOME_BLOG, LIST_BLOG, CONTENT_BLOG} from '/functions/Components.js';

import Toast from "/modules/Notification.js"

const PageTitle = document.querySelector('section h1 span');
const BooksContainer = document.querySelector('.BooksContainer');
const RecentBooksContainer = document.querySelector('.RecentBooksContainer');
const BooksListContainer = document.querySelector('.BooksListContainer');
const BlogsContainer = document.querySelector('.BlogsContainer');
const BlogContainer = document.querySelector('.BlogContainer');

export default class Routes {
  
  /* RETRIEVING DATA */
  
  static GetMainPage(vn, bn) {
    // Main DataBase
    const databaseRef = ref(database, pathList);
    //const databaseOrder = query(databaseRef, orderByChild(order));
    const databaseLimit = query(databaseRef, limitToLast(vn));
    
    onValue(databaseLimit, (snapshot)=> {
      BooksContainer.innerHTML = ''
      snapshot.forEach((snap)=> {
        const key = snap.key;
        const data = snap.val();
        
        BooksContainer.innerHTML = HOME_BOOK(data) + BooksContainer.innerHTML;
      })
    })
    
    // Blogs DataBase
    const databaseBlogRef = ref(database, blog);
    const databaseBlogLimit = query(databaseBlogRef, limitToLast(bn));
    
    onValue(databaseBlogLimit, (snapshot)=> {
      BlogsContainer.innerHTML = ''
      snapshot.forEach((snap)=> {
        const key = snap.key;
        const data = snap.val();
        
        BlogsContainer.innerHTML = HOME_BLOG(key, data) + BlogsContainer.innerHTML;
      })
    })
    
  }
  static GetAllList() {
    const databaseRef = ref(database, pathList);
    const databaseOrder = query(databaseRef, orderByChild(orderList));

    onValue(databaseOrder, (snapshot)=> {
      BooksListContainer.innerHTML = '';
      console.log(snapshot.size + ' Available Manga')
      
      snapshot.forEach((snap)=> {
        const key = snap.key;
        const data = snap.val();

        BooksListContainer.innerHTML += LIST_BOOK(data);
      })
    })
  }
  static GetRecentData(n) {
    const databaseRef = ref(database, path);
    const databaseOrder = query(databaseRef, orderByChild(order));
    const databaseLimit = query(databaseOrder, limitToLast(n));
    
    onValue(databaseLimit, (snapshot)=> {
      RecentBooksContainer.innerHTML = '';
      console.log(snapshot.size)
      snapshot.forEach((snap)=> {
        const key = snap.key;
        const val = snap.val();
        const data = val['Volume Data'];
        
        RecentBooksContainer.innerHTML = RECENT_BOOK(data) + RecentBooksContainer.innerHTML;
      })
    })
  }
  static GetOneManga(name) {
    console.log(`Manga ${name.replaceAll('_', ' ')} Page`)
    
    const databaseRef = ref(database, path);
    const databaseOrder = query(databaseRef, orderByChild(order));
    
    onValue(databaseOrder, (snapshot)=> {
      RecentBooksContainer.innerHTML = ''
      snapshot.forEach((snap)=> {
        const key = snap.key;
        const val = snap.val();
        const data = val['Volume Data'];
        
        if(name.replaceAll('_', ' ') === data['Manga Title']) {
          RecentBooksContainer.innerHTML = RECENT_BOOK(data) + RecentBooksContainer.innerHTML;
        }
        
      })
    })
    
    PageTitle.textContent = name.replaceAll('_', ' ');
    document.querySelector('title').textContent = `Manga4Up | ${name.replaceAll('_', ' ')}`;
  }
  static GetAllBlogs() {
    const databaseBlogRef = ref(database, blog);
    
    onValue(databaseBlogRef, (snapshot)=> {
      BlogsContainer.innerHTML = ''
      if(snapshot.exists()) {
        snapshot.forEach((snap)=> {
          const key = snap.key;
          const data = snap.val();
          
          BlogsContainer.innerHTML = LIST_BLOG(key, data) + BlogsContainer.innerHTML;
        })
      } else {
        console.log('no blogs')
      }
    })
  }
  static GetOneBlog(key) {
    const databaseBlogRef = ref(database, blog);
    const databaseBlogChild = child(databaseBlogRef, `${key}/`);
    
    onValue(databaseBlogChild, (snapshot)=> {
      BlogContainer.innerHTML = ''

      const key = snapshot.key;
      const data = snapshot.val();
      
      BlogContainer.innerHTML = CONTENT_BLOG(data);
      PageTitle.textContent = data.Title;
    })
  }
  static SubmitContactForm(arg, form) {
    const databaseRef = ref(database, 'Contacts/');
    const databasePush = push(databaseRef);

    set(databasePush, {
      Email: arg.email,
      UserName: arg.username,
      Message: arg.content,
      Time: arg.date
    }).then(()=> {
      const toast = new Toast({
        text: "Message Sent Successfully",
        position: "top-center",
        pauseOnHover: true,
        pauseOnFocusLoss: true,
        autoClose: 6000
      })
      
      form.reset();
    }).catch((error)=> {
      console.log(error)
    })
  }
}

window.Routes = Routes;
