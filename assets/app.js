/* Business Analysis course — shared script.
   Progress tracked by MODULE completion (14), in its OWN localStorage key (ba_*), no clash with the LSS sites. */
(function(){
"use strict";
var PKEY="ba_progress_v1", TKEY="ba_theme", LKEY="ba_last", TOTAL=14;

var MODULES=[
 {n:0, name:"What a Business Analyst really does", weeks:"Week 1", file:"lessons/00-orientation.html",
  d:"The BA role and mindset ('understand before you solve'), and a one-page map of the BABOK body of knowledge."},
 {n:1, name:"Strategy & business context", weeks:"Weeks 2–3", file:"lessons/01-strategy-context.html",
  d:"Read the business before the problem: SWOT, PESTLE, Business Model Canvas, Porter's Five Forces, VMOST."},
 {n:2, name:"Identifying & framing the problem", weeks:"Weeks 4–5", file:"lessons/02-problem-identification.html",
  d:"Separate symptom from root cause, resist jumping to solutions, and write a sharp problem statement."},
 {n:3, name:"Stakeholders: find, analyse, engage", weeks:"Weeks 6–7", file:"lessons/03-stakeholders.html",
  d:"Identify and map stakeholders (power/interest, RACI, personas) and work with resistance."},
 {n:4, name:"Planning the BA work", weeks:"Week 8", file:"lessons/04-planning.html",
  d:"Predictive vs adaptive approaches, the BA plan, governance, estimation and performance."},
 {n:5, name:"Elicitation: getting the real needs out", weeks:"Weeks 9–10", file:"lessons/05-elicitation.html",
  d:"Interviews, workshops, observation, surveys, document analysis — prepare, conduct, confirm."},
 {n:6, name:"Modelling the process & the data", weeks:"Weeks 11–12", file:"lessons/06-process-modelling.html",
  d:"As-is/to-be process maps, BPMN, use cases, journeys, data-flow diagrams and data models."},
 {n:7, name:"Specifying & writing requirements", weeks:"Weeks 13–15", file:"lessons/07-requirements.html",
  d:"Requirement types, good-requirement characteristics, user stories, acceptance criteria, business rules."},
 {n:8, name:"Prioritising & managing requirements", weeks:"Weeks 16–17", file:"lessons/08-prioritisation-rlcm.html",
  d:"MoSCoW, value/effort, Kano; traceability, baselining, change control and the backlog."},
 {n:9, name:"Options, feasibility & the business case", weeks:"Weeks 18–19", file:"lessons/09-business-case.html",
  d:"Options and feasibility, cost-benefit (ROI, payback, NPV), risk, and a persuasive business case."},
 {n:10, name:"Communicating, presenting & sign-off", weeks:"Week 20", file:"lessons/10-communicating-presenting.html",
  d:"Tailor the message, present to a steering committee, run reviews, manage conflict, win approval."},
 {n:11, name:"Supporting delivery & evaluating the solution", weeks:"Weeks 21–22", file:"lessons/11-solution-evaluation.html",
  d:"The BA in build and test, UAT, measuring performance and proving benefits were realised."},
 {n:12, name:"Agile business analysis", weeks:"Week 23", file:"lessons/12-agile-ba.html",
  d:"The BA on Scrum/Kanban teams: Product Owner collaboration, story mapping, backlog refinement."},
 {n:13, name:"Capstone — run a BA engagement end to end", weeks:"Weeks 24+", file:"lessons/13-capstone.html",
  d:"Apply the whole toolkit to one case and produce a portfolio-ready set of deliverables."}
];

function loadSet(){try{var s=localStorage.getItem(PKEY);return new Set(s?JSON.parse(s):[]);}catch(e){return new Set();}}
function saveSet(set){try{localStorage.setItem(PKEY,JSON.stringify(Array.from(set)));}catch(e){}}
var done=loadSet();

function updateBar(){
  var n=done.size, pct=Math.round(n/TOTAL*100);
  var f=document.getElementById("fill"), t=document.getElementById("progTxt");
  if(f) f.style.width=pct+"%";
  if(t) t.textContent=n+" / "+TOTAL+" modules";
}

function reflect(cb){
  var det=cb.closest("details.module"); if(det) det.classList.toggle("m-done",cb.checked);
  var lab=cb.closest(".ep-check"); if(lab) lab.classList.toggle("done",cb.checked);
  var sub=det?det.querySelector(".m-sub"):null;
  if(sub){ var m=MODULES[parseInt(det.getAttribute("data-mod"),10)];
    sub.textContent=cb.checked?"✓ Completed":(m?m.weeks:""); }
}
function syncBoxes(){
  var boxes=document.querySelectorAll(".mod-cb");
  for(var i=0;i<boxes.length;i++){(function(cb){
    var mod=parseInt(cb.getAttribute("data-mod"),10);
    cb.checked=done.has(mod); reflect(cb);
    cb.addEventListener("click",function(e){e.stopPropagation();});
    cb.addEventListener("change",function(){
      if(cb.checked) done.add(mod); else done.delete(mod);
      saveSet(done); updateBar();
      var same=document.querySelectorAll('.mod-cb[data-mod="'+mod+'"]');
      for(var j=0;j<same.length;j++){ same[j].checked=cb.checked; reflect(same[j]); }
    });
  })(boxes[i]);}
}

function renderHub(){
  var root=document.getElementById("curriculum"); if(!root) return;
  var pad=function(n){return (n<10?"0":"")+n;};
  root.innerHTML="";
  MODULES.forEach(function(m){
    var det=document.createElement("details");
    det.className="module"+(done.has(m.n)?" m-done":""); det.setAttribute("data-mod",m.n);
    det.innerHTML=
      '<summary>'+
        '<input type="checkbox" class="cb mod-cb" data-mod="'+m.n+'" id="hub-m'+m.n+'" aria-label="Mark '+m.name+' complete">'+
        '<div class="m-badge">'+pad(m.n)+'</div>'+
        '<div class="m-meta"><h3><a href="'+m.file+'">'+m.name+'</a></h3>'+
          '<div class="m-sub">'+(done.has(m.n)?"✓ Completed":m.weeks)+'</div></div>'+
        '<div class="m-weeks">'+m.weeks+'</div><div class="chev">▶</div>'+
      '</summary>'+
      '<div class="m-body"><p>'+m.d+'</p><a class="read" href="'+m.file+'">Read the module →</a></div>';
    root.appendChild(det);
  });
}

function recordVisit(){
  if(window.BA_PAGE && /^lessons\//.test(window.BA_PAGE.href)){
    try{localStorage.setItem(LKEY,JSON.stringify(window.BA_PAGE));}catch(e){}
  }
}
function renderContinue(){
  var el=document.getElementById("continue"); if(!el) return;
  var last=null; try{var s=localStorage.getItem(LKEY); if(s) last=JSON.parse(s);}catch(e){}
  if(last&&last.href) el.innerHTML='<a class="btn" href="'+last.href+'">▶ Continue: '+last.title+'</a>';
}

function persistChecks(){
  var page=(window.BA_PAGE&&window.BA_PAGE.href)||location.pathname;
  document.querySelectorAll("input[data-persist]").forEach(function(cb,idx){
    var key="ba_chk:"+page+":"+idx;
    try{cb.checked=localStorage.getItem(key)==="1";}catch(e){}
    cb.addEventListener("change",function(){try{localStorage.setItem(key,cb.checked?"1":"0");}catch(e){}});
  });
}

function wireReset(){
  var r=document.getElementById("reset"); if(!r) return;
  r.addEventListener("click",function(){
    done=new Set(); saveSet(done);
    document.querySelectorAll(".mod-cb").forEach(function(cb){cb.checked=false; reflect(cb);});
    renderHub(); syncBoxes(); updateBar();
  });
}

function wireTheme(){
  try{var t=localStorage.getItem(TKEY); if(t) document.documentElement.setAttribute("data-theme",t);}catch(e){}
  var btn=document.getElementById("theme"); if(!btn) return;
  btn.addEventListener("click",function(){
    var cur=document.documentElement.getAttribute("data-theme");
    var dark=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;
    var next=cur?(cur==="dark"?"light":"dark"):(dark?"light":"dark");
    document.documentElement.setAttribute("data-theme",next);
    try{localStorage.setItem(TKEY,next);}catch(e){}
  });
}

function markNav(){
  if(!window.BA_PAGE) return;
  document.querySelectorAll(".nav-menu a").forEach(function(a){
    var href=a.getAttribute("href")||"";
    if(href.replace(/^(\.\.\/)+/,"")===window.BA_PAGE.href) a.setAttribute("aria-current","page");
  });
}

/* audio: duration when ready, "coming soon" when missing (handles pre-attach errors) */
function fmtDur(d){ var m=Math.floor(d/60), s=Math.floor(d%60); return m+":"+(s<10?"0":"")+s; }
function wireAudio(){
  document.querySelectorAll("audio").forEach(function(a){
    var block=a.closest(".audio-block")||a.parentNode, shown=false;
    function soon(){
      if(shown) return; shown=true; a.hidden=true;
      var lab=block.querySelector(".audio-label"); if(lab) lab.hidden=true;
      var chip=document.createElement("span");
      chip.className="audio-soon"; chip.textContent="🎧 Audio coming soon";
      block.appendChild(chip);
    }
    function dur(){
      if(!isFinite(a.duration)||a.duration<=0) return;
      var lab=block.querySelector(".audio-label");
      if(lab && !lab.getAttribute("data-dur")){ lab.setAttribute("data-dur","1"); lab.textContent=lab.textContent+" · "+fmtDur(a.duration); }
    }
    if(a.error || a.networkState===3){ soon(); return; }
    if(a.readyState>=1) dur();
    a.addEventListener("error", soon);
    a.addEventListener("loadedmetadata", dur);
    setTimeout(function(){ if(!shown && a.readyState<1 && (a.error||a.networkState===3)) soon(); }, 4000);
  });
}

function init(){
  wireTheme(); renderHub(); syncBoxes(); updateBar();
  renderContinue(); recordVisit(); persistChecks(); wireReset(); markNav(); wireAudio();
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init); else init();
})();
