import {database, ref, child, onValue, query, orderByChild, limitToLast} from './Firebase.js';
import {push, set} from './Firebase.js';
import {path, pathList, blog, order, orderList, list, uniqueIds} from './Firebase.js';
import {HOME_BOOK, LIST_BOOK, RECENT_BOOK, HOME_BLOG, LIST_BLOG, CONTENT_BLOG} from './Components.js';

const PageTitle = document.querySelector('section h1 span');
const BooksContainer = document.querySelector('.BooksContainer');
const BooksListContainer = document.querySelector('.BooksListContainer');
const BlogsContainer = document.querySelector('.BlogsContainer');
const BlogContainer = document.querySelector('.BlogContainer');

export default class Routes {
  
  /* RETRIEVING DATA */
  
  static GetMainPage(vn, bn) {
    // Main DataBase
    const databaseRef = ref(database, path);
    const databaseOrder = query(databaseRef, orderByChild(order));
    const databaseLimit = query(databaseOrder, limitToLast(vn));
    
    onValue(databaseLimit, (snapshot)=> {
      BooksContainer.innerHTML = ''
      snapshot.forEach((snap)=> {
        const key = snap.key;
        const val = snap.val();
        const data = val['Volume Data'];
        
        BooksContainer.innerHTML = HOME_BOOK(key, data) + BooksContainer.innerHTML;
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
    /*
    const databaseRef = ref(database, path);
  
    onValue(databaseRef, (snapshot)=> {
      list.splice(0, list.length)
      BooksListContainer.innerHTML = ''
      snapshot.forEach((snap)=> {
        
        const value = snap.val();
        const data = value['Volume Data'];
        
        list.push(data)
        
      });
    
      const unique = list.reverse().filter(element => {
        const isDuplicate = uniqueIds.includes(element['Manga Title']);
      
        if (!isDuplicate) {
          uniqueIds.push(element['Manga Title']);
          return true;
        }
      
        return false;
      });
      
      unique.map((manga)=> {
        BooksListContainer.innerHTML = LIST_BOOK(manga) + BooksListContainer.innerHTML;
      })
    });
    */

    const databaseRef = ref(database, pathList);
    const databaseOrder = query(databaseRef, orderByChild(orderList));

    onValue(databaseOrder, (snapshot)=> {
      BooksListContainer.innerHTML = '';

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
      BooksContainer.innerHTML = '';
      snapshot.forEach((snap)=> {
        const key = snap.key;
        const val = snap.val();
        const data = val['Volume Data'];
        
        BooksContainer.innerHTML = RECENT_BOOK(key, data) + BooksContainer.innerHTML;
      })
    })
  }
  static GetOneManga(name) {
    console.log(`Manga ${name.replaceAll('_', ' ')} Page`)
    
    const databaseRef = ref(database, path);
    const databaseOrder = query(databaseRef, orderByChild(order));
    
    onValue(databaseOrder, (snapshot)=> {
      BooksContainer.innerHTML = ''
      snapshot.forEach((snap)=> {
        const key = snap.key;
        const val = snap.val();
        const data = val['Volume Data'];
        
        if(name.replaceAll('_', ' ') === data['Manga Title']) {
          BooksContainer.innerHTML = RECENT_BOOK(key, data) + BooksContainer.innerHTML;
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
      
      BlogContainer.innerHTML = CONTENT_BLOG(data) + BlogContainer.innerHTML;
      PageTitle.textContent = data.Title;
    })
  }
  static SubmitContactForm(arg) {
    const databaseRef = ref(database, 'Contacts/');
    const databasePush = push(databaseRef);

    set(databasePush, {
      Email: arg.email,
      UserName: arg.username,
      Message: arg.content,
      Time: arg.date
    }).then(()=> {
      console.log('done')
    }).catch((error)=> {
      console.log(error)
    })
  }
}

window.Routes = Routes;
