const question = [
    [ // 쉬움 난이도 문제
        {
            num: 1,
            quest: "python에서 print(HelloWorld); 를 실행하면 HellloWorld 가 나온다. ",
            correct:"X",
            hint: "문자를 출력하기 위해서는 \"\" 또는 \'\' 사이에 문자를 넣어야한다. "
        },
        {
            num: 2,
            quest: "python에서 a=int(input()); 를 실행하고 3.14를 입력하면 3 이 나온다. ",
            correct: "O",
            hint: "int는 정수를 의미한다"
        },
        {
            num: 3,
            quest: "python에서 곱하기 기호는 x이다",
            correct: "X",
            hint: "기호는 문자와 혼동되지 않도록 +,-,*,/,% 등을 쓴다"
        },
        {
            num: 4,
            quest: " python에서 36//4=9,36/4=9,36%4=0이고 36//5=7,36/5=7.2,36%5=1 일때 36%7=1이다 ",
            correct: "O",
            hint: "//는 몫을 뜻하고 /는 나누기를 뜻한다"
        },
        {
            num: 5,
            quest: "javascript는 java에서 파생된 언어이다",
            correct: "X",
            hint: "javascript는 프론트엔드 언어이고 java는 백엔드 언어로 종류가 다르다 "
        },
        {
            num: 6,
            quest: "python에서 a=3 이라고 할때 print('a'); 를 출력하면 3이 나온다",
            correct: "X",
            hint: "문자를 출력하기 위해서는 \"\" 또는 \'\' 사이에 문자를 넣어야한다."
        },
        {
            num: 7,
            quest: "13을 이진수로 변환하면 1110이다",
            correct: "X",
            hint: "이진수는 2로 나눈 나머지를 밑에서 부터 차례대로 써서 구한다"
        },
        {
            num: 8,
            quest: "우리가 일상에서 쓰는 수는 십진수이다",
            correct: "O",
            hint: "십진수란 0부터 9까지의 숫자를 이용하여 표현한 수이다"
        },
        {
            num: 9,
            quest: "엔트리는 프로그래밍 언어이다",
            correct: "O",
            hint: "프로그래밍 언어란 기계또는 컴퓨터에게 명령이나 연산을 시킬 목적으로 설계되어 기계와 의사소통을 할수있게 해주는 언어를 뜻한다."
        },
        {
            num: 10,
            quest: "코딩과 프로그래밍은 같은 말이다",
            correct: "X",
            hint: "코딩이란 컴퓨터에 명령을 프로그래밍 언어로 입력하는 과정이며 프로그래밍은 프로그래밍 언어를 사용하여 프로그램을 만드는 일이다"
        }
    ],
    [ // 보통 난이도 문제
        {
            num:1,
            quest: "C언어에서 'stdio'은 표준적 정보 출력을 뜻한다.",
            correct: "X",
            hint: "'stdio'은 약자로서 풀어 쓰면 'Standard Input/Output'이다."
        },
        {
            num:2,
            quest: "C언어에서 'C'는 알파벳에서 'B' 다음으로 오는 'C'를 의미한다.",
            correct: "O",
            hint: "C언어는 개발자 데니스 리치(Dennis Ritchie)의 B언어의 후속 버전이다."
        },
        {   
            num: 3,
            quest: "'Java'는 객체 지향 프로그래밍 언어이다.",
            correct: "O",
            hint: "객체 지향 프로그래밍 언어는 여러 Class들의 집합으로도 볼 수 있는데, Java 역시 그러하다."
        },
        {
            num: 4,
            quest: "아래 코드를 실행하였을 때 오류가 발생하지 않는다.",
            correct: "X",
            hint: "list1의 최대 원소 수는 5개지만, 출력문에서는 list1의 100번째 값을 출력하려 한다.",
            img_path: "./img/quest4.png"
        },
        {
            num: 5,
            quest: "'Pygame'은 Python의 내장(내부) 모듈 중 하나이다.",
            correct: "X",
            hint: "'Pygame' 모듈은 pip install을 통해 다운로드 받아야 한다."
        },
        {
            num: 6,
            quest: "JavaScript는 웹 프로그래밍을 할 때 사용할 수 없다.",
            correct: "X",
            hint: "이 프로그램 역시 JavaScript를 일부 이용해 제작했다."
        }
    ],
    [ // 어려움 난이도 문제
        {
            num: 1,
            quest: "C언어에서 자료형 int형은 5byte를 가진다.",
            correct: "X",
            hint: "1byte당 8bit로 이루어져있고, int형은 32bit이다."
        },
        {
            num:2,
            quest: "자료를 활용하는 방식, 자료구조의 Stack 개념은 프링글스통에 비유할 수 있다.",
            correct: "O",
            hint: "Stack이라는 개념은 순서상으로 먼저 들어온 것이 가장 나중에 나오는 구조를 뜻한다."
        },
        {
            num: 3,
            quest: "C언어의 sizeof() 함수는 주어진 매개변수의 메모리 크기를 반환한다.",
            correct: "O",
            hint: "C언어에서 int형 변수는 4byte의 크기를 가지며, sizeof(int)의 반환값은 '4'이다."
        },
        {   num: 4,
            quest: "인터프리터를 통해 코드를 번역하는 언어는 대표적으로 'Python'이 있다.",
            correct: "O",
            hint: "인터프리터의 대표적인 특징 중 하나는 '코드를 한 줄씩 번역한다'이다. Python 역시 코드를 한 줄씩 번역한다."
        },
    ]
]