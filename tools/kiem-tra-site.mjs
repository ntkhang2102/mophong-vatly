// Kiểm thử toàn bộ website: mở trang mục lục, mở lần lượt mọi thẻ, kiểm tra 3D chạy được, có link quay lại, không có lỗi JS.
// Chạy có mạng:   (cd <repo> && python3 -m http.server 8765 &) ; node tools/kiem-tra-site.mjs
// Chạy offline:   node tools/kiem-tra-site.mjs /đường/dẫn/tuyệt/đối/tới/bản-sao-repo
// Cần Playwright (npm i playwright trong một thư mục tạm) và Chromium tại /opt/pw-browsers/chromium.
import { chromium } from 'playwright';
const R=process.argv[2],B=process.argv[3]||'http://localhost:8765';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium',args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const c=await b.newContext(R?{offline:true}:{});const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(p.url().split('/').pop()+': '+e.message));
const base=R?'file://'+R:B;
await p.goto(base+'/index.html');await p.waitForTimeout(400);
const cards=await p.locator('.card').evaluateAll(a=>a.map(x=>[x.querySelector('h3').textContent,x.getAttribute('href')]));
console.log('số thẻ:',cards.length);
for(const [t,h] of cards){await p.goto(base+'/'+h);await p.waitForTimeout(1200);
  const ok=await p.evaluate(()=>!document.getElementById('nogl')||getComputedStyle(document.getElementById('nogl')).display==='none');
  const back=await p.locator('a.back').first().getAttribute('href');
  console.log((ok?'OK ':'LỖI ')+t.padEnd(52)+' → '+h+' | quay lại: '+back)}
console.log('errors',errs);await b.close();
