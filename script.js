const navToggle=document.getElementById('navToggle'); const menu=document.getElementById('menu');
if(navToggle&&menu){ navToggle.addEventListener('click',()=>{ const open=menu.classList.toggle('open'); navToggle.setAttribute('aria-expanded', open); }); }
const root=document.documentElement; const btn=document.getElementById('themeToggle'); const saved=localStorage.getItem('theme'); if(saved==='light') root.classList.add('light');
btn?.addEventListener('click',()=>{ root.classList.toggle('light'); localStorage.setItem('theme', root.classList.contains('light')?'light':'dark'); });
document.getElementById('year')?.append(new Date().getFullYear());