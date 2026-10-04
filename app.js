(function(){
const $=id=>document.getElementById(id);
let idx=0, answers=[], current=null;
const keys=Object.keys(STANDS);

function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s.id===id));window.scrollTo(0,0)}

function render(){
  const q=QUESTIONS[idx]; current=answers[idx]??null;
  $('counter').textContent=(idx+1)+' / '+QUESTIONS.length;
  $('fill').style.width=(idx/QUESTIONS.length*100)+'%';
  $('bar').setAttribute('aria-valuenow',idx);
  $('qtext').textContent=q.q;
  $('opts').innerHTML='';
  q.o.forEach((o,i)=>{
    const b=document.createElement('button');
    b.type='button';b.className='opt';b.style.animationDelay=(i*70)+'ms';
    b.setAttribute('aria-pressed',current===i);
    b.innerHTML='<b aria-hidden="true">'+'ABCD'[i]+'</b><span></span>';
    b.querySelector('span').textContent=o[0];
    b.setAttribute('aria-label','Alternativa '+'ABCD'[i]+': '+o[0]);
    b.onclick=()=>pick(i);
    $('opts').appendChild(b);
  });
  $('next').disabled=current===null;
  $('next').textContent=idx===QUESTIONS.length-1?'VER MEU STAND':'PRÓXIMA';
  $('qtext').focus({preventScroll:true});
}
function pick(i){
  current=i;answers[idx]=i;
  [...$('opts').children].forEach((b,j)=>b.setAttribute('aria-pressed',j===i));
  $('next').disabled=false;
}
function next(){
  if(current===null)return;
  if(idx<QUESTIONS.length-1){idx++;render();}
  else{$('fill').style.width='100%';show('loading');setTimeout(()=>showResult(),2600);}
}
function score(){
  const s={};keys.forEach(k=>s[k]=0);
  answers.forEach((a,qi)=>{const o=QUESTIONS[qi].o[a];s[o[1]]+=2;s[o[2]]+=1;});
  // desempate: maior pontuação; depois quem foi principal mais vezes; depois ordem fixa. Sempre há resultado.
  const prim={};keys.forEach(k=>prim[k]=0);
  answers.forEach((a,qi)=>prim[QUESTIONS[qi].o[a][1]]++);
  return keys.slice().sort((a,b)=>s[b]-s[a]||prim[b]-prim[a]||keys.indexOf(a)-keys.indexOf(b));
}
const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let shareText='';
function showResult(){
  const rank=score(),S=STANDS[rank[0]],second=STANDS[rank[1]];
  const stats=STAT_NAMES.map((n,i)=>{
    const g=S.st[i],v=GRADES[g];
    let seg='';for(let k=0;k<5;k++)seg+='<i class="'+(k<v?'on':'')+'" style="animation-delay:'+(k*90+i*60)+'ms"></i>';
    return '<div class="stat"><span>'+esc(n.replace(' de desenvolvimento',''))+'</span><div class="seg" aria-hidden="true">'+seg+'</div><span aria-label="Nota '+g+'">'+g+'</span></div>';
  }).join('');
  $('sheet').innerHTML=
   '<p class="lbl">SEU STAND É</p><h3>“'+esc(S.stand)+'”</h3>'+
   '<p class="lbl">USUÁRIO</p><p><strong>'+esc(S.user)+'</strong></p><hr>'+
   '<p class="lbl">TIPO</p><p>'+esc(S.type)+' (traço secundário: '+esc(second.type.replace(/^O /,'o '))+')</p>'+
   '<p class="lbl">HABILIDADE</p><p><strong>'+esc(S.power)+'</strong></p><p>'+esc(S.how)+'</p><hr>'+
   '<div class="stats" role="list" aria-label="Atributos do Stand">'+stats+'</div><hr>'+
   '<p class="quote">“'+esc(S.quote)+'”</p><hr>'+
   '<p class="lbl">POR QUE ESSE STAND COMBINA COM VOCÊ</p><p>'+esc(S.why)+'</p>'+
   '<p class="lbl">PONTOS FORTES</p><ul>'+S.strengths.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>'+
   '<p class="lbl">FRAQUEZA</p><p>'+esc(S.weak)+'</p>';
  shareText='Meu Stand é '+S.stand+'! Meu poder é: '+S.power+' Qual seria o seu? '+location.href.split('#')[0];
  show('result');
}
function toast(m){$('toast').textContent=m;setTimeout(()=>{$('toast').textContent=''},3000)}
async function copy(){
  try{await navigator.clipboard.writeText(shareText);toast('Mensagem copiada!');}
  catch(e){const t=document.createElement('textarea');t.value=shareText;document.body.appendChild(t);t.select();
    try{document.execCommand('copy');toast('Mensagem copiada!');}catch(_){toast('Não consegui copiar. Selecione e copie manualmente.');}t.remove();}
}
async function share(){
  if(navigator.share){
    try{await navigator.share({title:'Meu Stand',text:shareText});return;}
    catch(e){if(e&&e.name==='AbortError')return;}
  }
  copy();
}
function restart(){idx=0;answers=[];current=null;show('intro');}

$('start').onclick=()=>{idx=0;answers=[];show('quiz');render();};
$('next').onclick=next;$('share').onclick=share;$('copy').onclick=copy;$('again').onclick=restart;
document.addEventListener('keydown',e=>{
  if(!$('quiz').classList.contains('active'))return;
  const n=parseInt(e.key,10);
  if(n>=1&&n<=4)pick(n-1);
});

// partículas leves
const cv=$('fx'),cx=cv.getContext('2d');let P=[];
function size(){cv.width=innerWidth;cv.height=innerHeight;}
size();addEventListener('resize',size);
const cols=['#ff2e88','#ffe14d','#2ee6ff'];
for(let i=0;i<40;i++)P.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*3+1,v:Math.random()*.6+.2,c:cols[i%3]});
if(!matchMedia('(prefers-reduced-motion: reduce)').matches)(function loop(){
  cx.clearRect(0,0,cv.width,cv.height);
  P.forEach(p=>{p.y-=p.v;if(p.y<-5){p.y=cv.height+5;p.x=Math.random()*cv.width;}
    cx.fillStyle=p.c;cx.globalAlpha=.7;cx.fillRect(p.x,p.y,p.r*1.6,p.r*1.6);});
  requestAnimationFrame(loop);
})();
})();
