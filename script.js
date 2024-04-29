let search = function () {
  alert('해당 내용을 검색합니다.');
};

//카드==============================================================================================================================
// 컨테이너 요소 가져오기
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

  // // 내용 생성
  let overview = document.createElement('p');
  overview.textContent = api[i].overview;
  card.appendChild(overview);

  // 카드를 컨테이너에 추가
  container.appendChild(card);
}
