gsap.registerPlugin(ScrollTrigger);
let SECTIONS = gsap.utils.toArray("section");
const body = document.querySelector("body");

gsap.to(SECTIONS, {
  xPercent: -100 * ( SECTIONS.length -1 ),
    ease: "none",
    scrollTrigger: {
    trigger: '#container',
    end: ()=> "+=" + document.querySelector("#container").offsetWidth,
    pin: true,
    scrub: 1,
    snap: 1 / (SECTIONS.length -1),
}
});
let tl = gsap.timeline();
let cnt = -4;
function onClick(){
  cnt++;
  if(cnt == -3){    
    tl.to("#chang", { duration: 0.01, ease: 'elastic', opacity: 0});
    const chang = document.querySelector("#chang");
    chang.innerText = "창업 요소";
    tl.to("#chang", { duration: 2, y:-200, opacity: 1});
  }
  if(cnt == -2){
    tl.to("#chang", { duration: 0.01, ease: 'elastic', opacity: 0});
    const chang = document.querySelector("#chang");
    chang.innerText = "창업자";
    tl.to("#chang", { duration: 2, y:-200, opacity: 1});
  }
  if(cnt == -1){
    tl.to("#chang", { duration: 0.01, ease: 'elastic', opacity: 0});
    const chang = document.querySelector("#chang");
    chang.innerText = "창업 자본";
    tl.to("#chang", { duration: 2, y:-200, opacity: 1});
  }
  if(cnt == 0){
    tl.to("#chang", { duration: 0.01, ease: 'elastic', opacity: 0});
    const chang = document.querySelector("#chang");
    chang.innerText = "사업 아이템";
    tl.to("#chang", { duration: 2, y:-200, opacity: 1});
  }
  if(cnt == 1){
    alert("함경남도에서 태어나 광복 이듬해 월남한 뒤 목포에서 미곡 도매상을 하다 6·25 전쟁 때 부산으로 피란을 가 담배를 팔기도 했다. 휴전 후 상경해 서울 용산에서 찐빵 장사로 생계를 꾸렸던 그는 1960년대 후반 무역사업으로 큰 돈을 번 뒤 남산에서 취미로 시작한 배드민턴과 처음 인연을 맺었다. 그는 40년 전인 1977년 동승통상(요넥스코리아의 전신)을 설립해 ＇스완＇이라는 브랜드의 셔틀콕을 제조했다. 고인은 제대로 된 용품 없이는 경기력이 향상될 수 없다는 생각에 라켓, 셔틀콕, 의류 등 개선뿐 아니라 배드민턴 대표팀의 해외 전지훈련을 주선하기도 했다. 1980년대 초반 동승통상은 대한배드민턴협회와 장기 후원 계약을 맺었다. 이를 계기로 재정적인 안정을 확보한 한국 배드민턴은 국제무대에서 비약적으로 성장했다.");}
  else if(cnt == 2){
    alert("1977년 국제대회에서 사용할 수 있을 만큼 좋은 셔틀콕을 만들겠다는 신념으로 창업하였다. 그 당시 우리나라는 국제대회 기준에 맞는 셔틀콕을 만들어 낼 기술이 없었기 때문에, 국가대표 선수들은 제대로 된 훈련을 할 수 없었고, 국제대회에서도 좋은 성적을 거두기 어려웠다. 배드민턴 불모지나 다름없는 환경에서 김덕인 회장은 어렵게 일본에서 셔틀콕 생산 기계를 들여오고, 숙련공을 고용해 직접 훈련을 시켜 품질향상을 위한 각고의 노력으로 마침내 셔틀콕 브랜드 ‘스완’을 탄생시켰고, 이는 우리나라 배드민턴의 혁신이라고 평가받고 있다");
  }
  else if(cnt == 3){
    tl.to(".list1", { duration: 2, x: 200, ease: 'elastic', opacity: 1});
    tl.to(".list1", { duration: 2, x: -200, ease: 'elastic', opacity: 1});
  }
  else if(cnt == 4){
    gsap.to("#i1",{duration: 1, x: 350, ease: 'elastic', opacity: 1});
    gsap.to("#i2",{duration: 1, x: -350, ease: 'elastic', opacity: 1});
    gsap.to("#i3",{duration: 3, y: 670, ease: 'elastic', opacity: 1});
    gsap.to("#i4",{duration: 2, x: -480, ease: 'elastic', opacity: 1});
    gsap.to("#i5",{duration: 2, x: 480, ease: 'elastic', opacity: 1});
  }
  else if(cnt == 5){
    tl.to(".list2", { duration: 2, x: 200, ease: 'elastic', opacity: 1});
    tl.to(".list2", { duration: 2, x: -200, ease: 'elastic', opacity: 1});
  }
  else if(cnt == 6){
    tl.to(".none", { duration: 0.3, y: 200, ease: 'elastic', opacity: 1});
    tl.to(".none", { duration: 2, y: -200, ease: 'elastic', opacity: 1});
  }
  else if(cnt == 7){
    tl.to(".none", { duration: 0.01, ease: 'elastic', opacity: 0});
    const change =document.querySelector(".none");
    change.innerText = "Victor";
    tl.to(".none", { duration: 2, y:-200, opacity: 1});
  }
  else if(cnt == 8){
    tl.to(".none", { duration: 0.01, ease: 'elastic', opacity: 0});
    const change =document.querySelector(".none");
    change.innerText = "Trion";
    tl.to(".none", { duration: 2, y:-200, opacity: 1});
  }
  else if(cnt == 9){
    tl.to(".none", { duration: 0.01, ease: 'elastic', opacity: 0});
    const change =document.querySelector(".none");
    change.innerText = "JOOHONG";
    tl.to(".none", { duration: 2, y:-200, opacity: 1});
  }
  else if(cnt == 10){
    tl.to(".none", { duration: 0.01, opacity: 0});
    const change =document.querySelector(".none");
    change.innerText = "JOOBONG";
    tl.to(".none", { duration: 0.5, y:-200, opacity: 1});
  }
}

body.addEventListener("click", onClick);