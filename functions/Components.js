import { parse } from '/modules/Markdown.js';

const HOME_BOOK = (id, arg)=> {
  let div =
  `
<article class="Book" id="${id}">
  <div class="Cover">
    <img src="${arg['Volume Cover']}" alt="" loading="lazy"/>
  </div>
  <div class="Content">
    <div class="Title">${arg['Manga Title']}</div>
    <div class="Info">${arg['Volume Number']} : رقم المجلد</div>
    <div class="Info">${arg['File Size']} : حجم الملف</div>
    
    <a href="/Page/Manga/#/${arg['Manga Title'].replaceAll(' ', '_')}" class="btn">
      صفحة المانجا
    </a>
  </div>
</article>
  `;

  return div;
}
const LIST_BOOK = (arg)=> {
  let div = 
  `
<article>
  <div class="Cover">
    <img src="${arg['Cover']}" alt="">
  </div>
  <div class="Content">
    <h3>${arg['Title']}</h3>
    <div class="Info">Volume Count: <span>${arg['Count']}</span></div>
    <div class="Info">Manga State: <span>${arg['State']}</span></div>
    <a href="/Page/Manga/#/${arg['Title'].replaceAll(' ', '_')}" class="btn float"> صفحة المانجا </a>
  </div>
</article>
  `;

  return div;
}
const RECENT_BOOK = (id, arg)=> {
  let div =
  `
<article class="Book" id="${id}" x-data="{open : false}">
  <div class="Cover">
    <img src="${arg['Volume Cover']}" alt="" loading="lazy"/>
  </div>
  <div class="Content">
  <div class="Title">${arg['Manga Title']}</div>
  <div class="Info">${arg['Volume Number']} : رقم المجلد</div>
  <div class="Info">${arg['File Size']} : حجم الملف</div>
    
    <button type="button" class="btn" @click="open = true">
      Download Links
    </button>
  </div>
  
  <div class="Modal" x-show="open" x-cloak>
    <div class="Content">
      <button type="button" class="btn close" @click="open = false">
      <i class="fa fa-times"></i>
      </button>
      
      <div class="Info"> روابط التحمبل المتاحة لمانجا </div>
      <div class="Title">${arg['Manga Title']}: ${arg['Volume Number']}</div>
      
      <div class="Download">
        ${ arg['Download Links'].map((link, ind)=> 
        `
        <a href="${link}" target="_blank">
          <button type="button" class="btn">
            D Link ${ind+1}
          </button>
        </a>
        `).join('')
        }
      </div>
    </div>
  </div>
</article>
  `;

  return div;
}
const HOME_BLOG = (id, arg)=> {
  let div =
  `
<article>
  <div class="Cover">
      <img src="${arg.Image}" alt="">
  </div>
  <div class="Content">
      <h3>${arg.Title}</h3>
      <p>${String(arg.Content).slice(0, 30)}...</p>
      <a href="/Page/Blog/#/${id}" class="btn">read more</a>
  </div>
</article>
  `;
  
  return div;
} 
const LIST_BLOG = (id, arg)=> {
  let div =
  `
<article>
  <div class="Cover">
      <img src="${arg.Image}" alt="">
  </div>
  <div class="Content">
      <h3>${arg.Title}</h3>
      <p>${String(arg.Content).slice(0, 30)}...</p>
      <a href="/Page/Blog/#/${id}" class="btn">read more</a>
  </div>
</article>
  `;
  
  return div;
}
const CONTENT_BLOG = (arg)=> {
  let div =
  `
<article>
  <div class="Cover">
      <img src="${arg.Image}" alt="">
  </div>
  <div class="Content">
      <p>${String(parse(arg.Content))}...</p>
  </div>
</article>
  `;

  return div;
}

export { HOME_BOOK, LIST_BOOK, RECENT_BOOK, HOME_BLOG, LIST_BLOG, CONTENT_BLOG }
