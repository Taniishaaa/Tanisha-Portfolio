(function(){var d=document.documentElement,t=null;try{t=localStorage.getItem('theme')}catch(e){}
if(!t)t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
d.setAttribute('data-theme',t);d.classList.add('js')})();
