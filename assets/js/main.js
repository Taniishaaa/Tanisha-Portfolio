(function(){
var S=window.SITE,$=function(s,r){return(r||document).querySelector(s)};
function h(t,a){var e=document.createElement(t);a=a||{};for(var k in a){if(k==='class')e.className=a[k];else if(a[k]!==false&&a[k]!=null)e.setAttribute(k,a[k])}
[].slice.call(arguments,2).flat(9).forEach(function(c){e.append(c.nodeType?c:document.createTextNode(c))});return e}
var pages=[["index.html","Home"],["projects.html","Projects"],["experience.html","Experience"],["about.html","About"],["contact.html","Contact"]];
var cur=document.body.dataset.page;
function ext(href,txt){return h('a',{href:href,target:'_blank',rel:'noopener noreferrer'},txt)}
function social(){var l=[h('a',{href:'mailto:'+S.email},'Email'),ext(S.github,'GitHub')];if(S.linkedin)l.push(ext(S.linkedin,'LinkedIn'));return l}
/* header */
var nav=h('nav',{class:'nav',id:'nav','aria-label':'Main'},pages.map(function(p){return h('a',{href:p[0],'aria-current':p[0]===cur?'page':false},p[1])}));
var tog=h('button',{class:'icon-btn',type:'button','aria-label':'Toggle light or dark theme'});
function icon(){tog.textContent=document.documentElement.dataset.theme==='light'?'☾':'☀'}icon();
tog.onclick=function(){var t=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}icon()};
nav.append(tog);
var mb=h('button',{class:'icon-btn menu-btn',type:'button','aria-label':'Open menu','aria-expanded':'false','aria-controls':'nav'},'☰');
mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');mb.setAttribute('aria-expanded','false')}});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){nav.classList.remove('open');mb.setAttribute('aria-expanded','false')}});
$('#site-header').replaceWith(h('header',{class:'site-header'},h('div',{class:'wrap bar'},h('a',{class:'brand',href:'index.html'},'Tanisha Gupta'),mb,nav)));
$('#site-footer').replaceWith(h('footer',{class:'site-footer'},h('div',{class:'wrap foot'},h('span',{},'© 2026 '+S.name),h('nav',{'aria-label':'Footer'},pages.map(function(p){return h('a',{href:p[0]},p[1])}),social()))));
/* project cards */
function card(p){var links=[];if(p.live)links.push(ext(p.live,'Live ↗'));if(p.github)links.push(ext(p.github,'GitHub ↗'));
if(!links.length)links.push(h('span',{class:'muted'},'Private build, no public link'));
return h('article',{class:'card reveal','data-cats':p.cats.join(' ')},h('p',{class:'kind'},p.kind),h('h3',{},p.title),h('p',{class:'outcome'},p.outcome),
h('ul',{class:'chips','aria-label':'Technologies'},p.tech.map(function(t){return h('li',{},t)})),h('div',{class:'links'},links),
h('details',{},h('summary',{},'Full details'),h('ul',{},p.details.map(function(d){return h('li',{},d)}))))}
var f=$('#featured');if(f)window.PROJECTS.slice(0,3).forEach(function(p){f.append(card(p))});
var pg=$('#projects');if(pg){window.PROJECTS.forEach(function(p){pg.append(card(p))});
var tabs=$('#tabs');tabs.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
[].forEach.call(tabs.children,function(x){x.setAttribute('aria-selected',x===b)});
[].forEach.call(pg.children,function(c){c.hidden=!(b.dataset.f==='all'||c.dataset.cats.split(' ').indexOf(b.dataset.f)>-1)})})}
/* timeline */
var tl=$('#timeline');if(tl)window.EXPERIENCE.forEach(function(x){
var li=h('li',{class:'tl reveal'},h('p',{class:'dates'},x.dates+(x.place?' · '+x.place:'')),h('h3',{},x.org),h('p',{class:'muted',style:'margin:0 0 8px'},x.role),h('ul',{class:'pts'},x.points.map(function(p){return h('li',{},p)})));
if(x.apps)li.append(h('div',{class:'sub'},h('p',{class:'eyebrow'},'// apps shipped at SBOSS'),h('div',{class:'grid'},x.apps.map(function(a){return h('article',{class:'card'},h('h3',{},a.n),h('p',{class:'outcome'},a.o),h('details',{},h('summary',{},'Full details'),h('ul',{},a.d.map(function(d){return h('li',{},d)}))))}))));
tl.append(li)});
/* contact */
var cl=$('#contact-links');if(cl)cl.append(h('ul',{class:'list'},[h('li',{},'Email: ',h('a',{href:'mailto:'+S.email},S.email)),h('li',{},'GitHub: ',ext(S.github,'github.com/Taniishaaa')),S.linkedin?h('li',{},'LinkedIn: ',ext(S.linkedin,'View profile')):null].filter(Boolean)));
var fm=$('#contact-form');if(fm)fm.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(fm);
location.href='mailto:'+S.email+'?subject='+encodeURIComponent(d.get('subject'))+'&body='+encodeURIComponent(d.get('message')+'\n\n— '+d.get('name')+' ('+d.get('email')+')')});
/* reveal */
var r=document.querySelectorAll('.reveal');
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target)}})},{threshold:.08});r.forEach(function(x){io.observe(x)})}else r.forEach(function(x){x.classList.add('in')});
})();
