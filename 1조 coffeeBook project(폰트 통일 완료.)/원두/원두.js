// 첫번째 radar차트_브라질 원두 맛 //
new Chart(document.getElementById("coffeeTaste1"), {
  type: 'radar',
  data: {
    labels: ["신맛", "향미", "바디", "단맛", "쓴맛"],
    datasets: [
      {
        label: "맛",  
        fill: true,
        backgroundColor: "#FFE400", //선 바탕:옐로우
        borderColor: "#2F9D27", //선: 그린
        pointBorderColor: "#fff", //점 테두리: 화이트
        pointBackgroundColor: "#000087", //점: 네이비
        data: [10,35,35,30,25]
      }
    ]
  },
  options: {
    responsive: false,
    title: {
      display: true,
    }
  }
});

// 두번째 radar차트_에티오피아 원두 맛 //
new Chart(document.getElementById("coffeeTaste2"), {
  type: 'radar',
  data: {
    labels: ["신맛", "향미", "바디", "단맛", "쓴맛"],
    datasets: [
      {
        label: "맛",  
        fill: true,

        backgroundColor: "#00B4DB", //선 바탕: 스카이블루
        borderColor: "#FFE400", //선: 옐로우
        pointBorderColor: "#fff", //점 테두리: 화이트
        pointBackgroundColor: "#ED0000", //점: 레드

        data: [40,35,25,30,10],
      }
    ]
  },
  options: {
    scale: {
      ticks:{
        backdropColor:"#E3E7CB" //숫자바탕색: rgba(227, 231, 203, 0.815)
      }
    },
    responsive: false,
    title: {
      display: true,
    }
  }
});

// 세번째 radar차트_케냐 원두 맛 //
new Chart(document.getElementById("coffeeTaste3"), {
  type: 'radar',
  data: {
    labels: ["신맛", "향미", "바디", "단맛", "쓴맛"],
    datasets: [
      {
        label: "맛",  
        fill: true,
        
        backgroundColor: "#006F00", //선 바탕: 그린
        borderColor: "#C90000", //선: 레드
        pointBorderColor: "#fff", //점 테두리: 화이트
        pointBackgroundColor: "#000000", //점: 블랙
        data: [20,45,45,35,35]
        
      }
    ]
  },
  options: {
    scale: {
      ticks:{
        backdropColor:"#CCB397" //숫자바탕색: rgb(204, 179, 151)
      }
    },
    responsive: false,
    title: {
      display: true,
    }
  }
});
