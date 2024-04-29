//카드==========================================================================================================
let container = document.getElementById('cardContainer');

// 카드 생성
for (let i = 0; i < api.length; i++) {
  // 카드 생성
  let card = document.createElement('div');
  card.className = 'card';

  // 제목 생성
  let title = document.createElement('h2');
  title.textContent = api[i].title;
  card.appendChild(title);

  // 이미지 생성
  let poster = document.createElement('img');
  poster.src = 'https://image.tmdb.org/t/p/w400' + api[i].poster_path;
  card.appendChild(poster);

  //  별점 생성
  let star = document.createElement('p');
  star.textContent = '⭐ ' + api[i].vote_average;
  card.appendChild(star);

  let overview_text = document.createElement('h3');
  overview_text.textContent = 'Overview';
  card.appendChild(overview_text);

  // // 내용 생성
  let overview = document.createElement('p');
  overview.textContent = 'Overview  :  ' + api[i].overview;
  card.appendChild(overview);

  // 카드를 컨테이너에 추가
  container.appendChild(card);
}
//검색 기능=================================================================================================
let search = function () {
  // 입력창과 목록 요소 가져오기
  let input = document.getElementById('search-input');
  let text = input.value.toLowerCase();
  alert('영화제목에 <' + text + '>를 포함한 자료 검색');

  let list = document.getElementById('cardContainer');
  let items = list.getElementsByClassName('card');

  for (let i = 0; i < api.length; i++) {
    let itemText = api[i].title.toLowerCase();
    items[i].style.display = itemText.includes(text) ? '' : 'none';
  }
};
//헤더 리로드===============================================================================================
