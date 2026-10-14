const intro=document.getElementById("intro");
const site=document.getElementById("site");
const enter=document.getElementById("enterBtn");
const skip=document.getElementById("skipBtn");
const soundToggle=document.getElementById("soundToggle");
const menu=document.getElementById("menuBtn");
const nav=document.getElementById("nav");

let audioCtx=null, soundOn=true;

function bell(){
  if(!soundOn)return;
  try{
    audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();
    const now=audioCtx.currentTime;
    [261.63,392,523.25].forEach((freq,i)=>{
      const o=audioCtx.createOscillator(), g=audioCtx.createGain();
      o.type="sine"; o.frequency.value=freq;
      g.gain.setValueAtTime(.0001,now+i*.08);
      g.gain.exponentialRampToValueAtTime(.13,now+i*.08+.02);
      g.gain.exponentialRampToValueAtTime(.0001,now+i*.08+2.4);
      o.connect(g).connect(audioCtx.destination);o.start(now+i*.08);o.stop(now+i*.08+2.5);
    });
  }catch(e){}
}
function enterExperience(){
  bell();
  intro.classList.add("hide");
  site.classList.add("ready");
  document.body.classList.remove("locked");
  setTimeout(()=>intro.remove(),1600);
}
enter.addEventListener("click",enterExperience);
skip.addEventListener("click",enterExperience);
soundToggle.addEventListener("click",()=>{
  soundOn=!soundOn;
  soundToggle.textContent=soundOn?"🔊":"🔇";
  if(soundOn)bell();
});
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const lightBtn=document.getElementById("lightBtn");
const stage=document.querySelector(".big-diya-real");
const wish=document.getElementById("wish");
lightBtn.addEventListener("click",()=>{
 stage.classList.add("lit");
 bell();
 wish.textContent="May your home be filled with light, peace and prosperity. ✦";
 lightBtn.textContent="DIYA IS LIT ✦";
});

window.addEventListener("scroll",()=>{
 const y=window.scrollY;
 document.documentElement.style.setProperty("--scroll",y);
 document.querySelector(".hero-idol")?.style.setProperty("transform",`translateY(${y*.045}px)`);
 document.querySelector(".hero-bg")?.style.setProperty("transform",`translateY(${y*.08}px) scale(1.05)`);
});

setTimeout(()=>{
 if(!intro.classList.contains("hide")){
   document.querySelector(".om").style.opacity="1";
 }
},500);
