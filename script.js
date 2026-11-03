/* 학습용 설정: 실제 매장이 생기면 전화번호와 각 주문 서비스 URL을 수정하세요. */
const STORE_PHONE = "0311234567";
const ORDER_LINKS = {
  naver: "https://new.smartplace.naver.com/introduction/solution-market/order?utm_source=chatgpt.com",       // 예: "https://m.place.naver.com/restaurant/매장ID/order"
  baemin: "https://www.baemin.com/?utm_source=chatgpt.com",      // 예: 실제 배달의민족 매장 주문 URL
  yogiyo: "https://www.yogiyo.co.kr/?utm_source=chatgpt.com"       // 예: 실제 요기요 매장 주문 URL
};
const toast=document.getElementById("toast");
function showToast(message){if(!toast)return;toast.textContent=message;toast.classList.add("show");window.setTimeout(()=>toast.classList.remove("show"),3000)}
document.querySelectorAll(".external-order").forEach(link=>link.addEventListener("click",event=>{event.preventDefault();const service=link.dataset.service;const key=service==="네이버 주문"?"naver":service==="배달의민족"?"baemin":"yogiyo";const url=ORDER_LINKS[key];if(url){window.open(url,"_blank","noopener,noreferrer")}else{showToast(`${service} 링크가 아직 설정되지 않았어요. script.js의 ORDER_LINKS에 매장 URL을 입력하세요.`)}}));
const picks=[...document.querySelectorAll(".pick")],selected=[];const pickResult=document.getElementById("pick-result");function renderPicks(){picks.forEach(p=>p.setAttribute("aria-pressed",String(selected.includes(p.dataset.food))));if(selected.length===3){pickResult.hidden=false;pickResult.textContent=`나의 분식 BEST 3: ${selected.join(" · ")}`}else{pickResult.hidden=true}}
picks.forEach(p=>p.addEventListener("click",()=>{const food=p.dataset.food;if(selected.includes(food))selected.splice(selected.indexOf(food),1);else if(selected.length<3)selected.push(food);else showToast("세 가지까지 선택할 수 있어요.");renderPicks()}));
const nav=document.getElementById("main-nav"),toggle=document.querySelector(".menu-toggle");if(toggle){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open))});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")))}
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
