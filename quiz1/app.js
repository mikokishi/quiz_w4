const quiz = [
    {
      question: 'ゲーム市場、最も売れたゲーム機はどれ？',
      answers: [ 
       'スーパーファミコン', 
       'プレイステーション2',
       'ニンテンドースイッチ', 
       'ニンテンドーDS'
       ],
      correct: 'ニンテンドーDS'
    }, 
    {
      question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
      answers: [ 
      'MOTHER2', 
      'スーパーマリオブラザーズ3', 
      'スーパードンキーコング', 
      '星のカービィ'
      ],
      correct: 'MOTHER2'
    },  {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [ 
     'フリオニール',
     'クラウド', 
     'ティーダ', 
     'セシル'
     ],
    correct: 'セシル'
  },
    {
       question: '全品税込360円で提供している人気居酒屋は？',
        answers: [ 
        '鳥良',
        '鳥貴族', 
        '塚田農場', 
        '世界の山ちゃん'
        ],
        correct: '鳥貴族'
      }
];

const quizLength = quiz.length;
let quizIndex= 0;
let score = 0;

const $button= document.getElementsByTagName(`button`);
const buttonLength= $button.length;

// クイズの問題文と選択肢を定義する
const setupQuiz = () =>{
    document.getElementById(`js-question`).textContent = quiz[quizIndex].question;
    let buttonIndex =0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent= quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
}
setupQuiz();

const clickHandler =(e)=>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert(`正解です！`);
        score++;
    }else{
        window.alert(`不正解です`);
    }
    quizIndex++;

    if(quizIndex<quizLength){
        // 問題がまだある場合
        setupQuiz();
    }else{
        // 問題がない場合
        window.alert('終了です！あなたの正解数は'+score+'/'+quizLength+'です。')

    }

};

//クリックしたら正誤判定 
let handlerIndex =0;
while(handlerIndex<buttonLength){
    $button[handlerIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handlerIndex++;

}

