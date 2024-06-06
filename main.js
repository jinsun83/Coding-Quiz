const main = document.querySelector("#main")
const mediumQuiz = document.querySelector("#quiz")
const result = document.querySelector("#result")
var hintCount = 3
var questionNum = 1
var correctCount = 0
var difficult = 1
const questCount = [10, 6, 4]
var nowQuestion

// 배열 랜덤 셔플 함수
function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
      // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
      let randomPosition = Math.floor(Math.random() * (index + 1));
  
      // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
      let temporary = array[index];
      array[index] = array[randomPosition];
      array[randomPosition] = temporary;
    }
}
// 출처: https://7942yongdae.tistory.com/96 [개발자 일지:티스토리]

// 결과 화면으로 전환
function ShowResult() {
    // 타이머 중지
    clearInterval(timerID)

    // 화면 전환
    mediumQuiz.style.display = "none"
    result.style.display = "block"

    // 결과 화면 레이아웃 설정
    result.classList.add("d-flex", "flex-column", "d-flex", "align-items-center")
    document.querySelector(".result-container").classList.add("d-flex", "flex-column", "d-flex", "align-items-center")

    // 화면 텍스트 변경
    document.querySelector(".difficult-result").innerHTML = difficult
    document.querySelector(".correct-count").innerHTML = correctCount
    document.querySelector(".quiz-count").innerHTML = questCount[difficult - 1]
    
    // 경과 시간 표시
    // 초
    if (second < 10) { document.querySelector(".result-second").innerHTML = "0" + second }
    else { document.querySelector(".result-second").innerHTML = second }

    // 분
    if (minute < 10) { document.querySelector(".result-minute").innerHTML = "0" + minute }
    else { document.querySelector(".result-minute").innerHTML = minute }

}

// 화면에 띄워지는 문제 텍스트 변경
function PrintQuestion(callPos) {
    if (callPos === "main") { shuffle(question[difficult - 1]) /* 문제 순서 랜덤 셔플 */ }

    nowQuestion = question[difficult - 1][0] // 현재 문제 저장 변수
    
    // 문제에 이미지가 들어간 경우 이미지는 별개로 처리
    if (nowQuestion.num === 4) {
        var img = document.createElement("img")
        img.src = "./img/quest4.png"
        img.alt = "Code Image"
        img.classList.add("mt-3", "image")
        document.querySelector(".question").appendChild(img)
    }

    // 이미지가 화면에 출력된 이후 화면에서 삭제
    let imageElement = document.querySelector(".image")
    if (imageElement != null && nowQuestion.num !== 4) { imageElement.remove() }

    // 문제 내용 변경
    let questNum = document.querySelector(".question-num") // 문제 번호
    let questDesc = document.querySelector(".question-desc") // 문제 내용
    
    questNum.innerHTML = questionNum
    questDesc.innerHTML = nowQuestion.quest

    // 진행 바 크기 변경
    document.querySelector(".progress-bar").style.width = (100 / questCount[difficult - 1]) * questionNum + "%"
}

// 힌트 표시
function ShowHint() {
    // 힌트 텍스트 표시
    if (document.querySelector(".hint-text") == null) {
        var hint_text = document.createElement("p")
        mediumQuiz.appendChild(hint_text)
        hint_text.classList.add("hint-text", "mt-3")
        hint_text.innerHTML = nowQuestion.hint
        hint_text.style = "text-align: center; font-size: 20px;"
    }
}


// 문제 화면으로 전환
function StartQuiz(diff) {
    let quizTop = document.querySelector("#quiz-top")
    difficult = diff // 난이도 지정

    main.classList.remove("d-flex", "flex-column", "d-flex", "align-items-center")
    main.style.display = "none"
    mediumQuiz.style.display = "block"
    quizTop.classList.add("d-flex", "justify-content-between", "d-flex", "align-items-center")
    document.querySelector(".difficult-quiz").innerHTML = difficult

    // 문제 출력
    PrintQuestion("main")
}

// 힌트 개수 감소
function DecreaseHint() {
    let hintBtn = document.querySelector(".hint")

    if (hintCount > 0 && document.querySelector(".hint-text") == null) {
        hintCount -= 1
        hintBtn.innerHTML = "Hint (" + hintCount + "/3)"
        ShowHint()
    }
}

// 정, 오답 여부 확인
function Answer(btn) {
    let inputAnswer = btn.innerHTML // 선택한 답
    questionNum += 1
    
    // 힌트를 본 적이 있으면(힌트 텍스트가 존재하면) 객체 삭제
    if (document.querySelector(".hint-text") != null) {
        document.querySelector(".hint-text").remove() // 힌트 텍스트 삭제
    }
    
    // 정답
    if (inputAnswer === nowQuestion.correct) { correctCount += 1 }
    
    question[difficult - 1].shift() // 문제 배열의 맨 처음 값 삭제

    // 문제가 아직 남은 경우
    if (questionNum <= questCount[difficult - 1]) { PrintQuestion("quiz") /* 다음 문제로 화면 전환 */ }
    else { ShowResult() } // 모든 문제가 끝난 경우
    
}

// 타이머 작동
const minuteHTML = document.querySelector(".quiz-minute")
const secondHTML = document.querySelector(".quiz-second")
var minute = 0
var second = 0
var timerID

// 경과시간 타이머
timerID = setInterval(() => {
    if (mediumQuiz.style.display === "block") {
        if (second < 59) {
            second += 1
            if (second < 10) { secondHTML.innerHTML = "0" + second } // 10초 미만인 경우 수 앞에 0 붙이기
            else { secondHTML.innerHTML = second} // 10초 이상
        } else if (second >= 59) {
            second = 0
            minute += 1
            if (minute < 10) { minuteHTML.innerHTML = "0" + minute } // 10분 미만인 경우 수 앞에 0 붙이기
            else { minuteHTML.innerHTML = minute} // 10분 이상
            secondHTML.innerHTML = "00" // 초 표시 초기화
        }
    }
}, 1000);