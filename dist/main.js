(()=>{"use strict";const e=document.querySelector("#content"),t=document.createElement("h1");t.innerText="JavaScript Tetris",t.classList.add("title");const n=document.createElement("footer");n.innerText="Michael Hamilton 2021",n.classList.add("footer"),e.appendChild(t),e.appendChild(function(){const e=document.createElement("h3");return e.classList.add("score"),e.innerText="Total Score: 0",e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("game-board");const t=document.createElement("div");return t.classList.add("outer-board"),t.appendChild(e),t}()),e.appendChild(n)})();