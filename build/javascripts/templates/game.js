!function(){this.JST||(this.JST={}),this.JST["templates/game"]=function(e){e||(e={});var s,i=[],a=e.safe,n=e.escape;return s=e.safe=function(e){if(e&&e.ecoSafe)return e;("undefined"==typeof e||null==e)&&(e="");var s=new String(e);return s.ecoSafe=!0,s},n||(n=e.escape=function(e){return(""+e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){!function(){i.push('<div class="board"></div>\n<div class="hud">\n  <div class="time"></div>\n  <div class="message"></div>\n  <div class="feedback">\n    <img class="win"  src="/images/thumbs-up.jpg" width="130">\n    <img class="lose" src="/images/loser.jpg" width="130">\n  <div>\n</div>\n')}.call(this)}.call(e),e.safe=a,e.escape=n,i.join("")}}.call(this);