class Student {
  // 필드 : 인스턴스 객체의 키 값
  // private name;
  // protected age;
  // public grade;

  // 생성자 함수 : 필드에 매칭될 값을 찾아오는 역할
  constructor(
    private name: string,
    protected age: number,
    public grade: number
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드 함수
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}`);
  }
}

const studentB = new Student("David", 20, 2);
console.log(studentB);
console.log(studentB.introduce());

// class는 하나의 타입이여서 extends 할 수 있음
class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name: string, age: number, grade: number, favoriteSkill: string) {
    super(name, age, grade); //중요
    this.favoriteSkill = favoriteSkill;
  }

  func() {
    //this.name;// private여서 해당 Student 클래스에서만 사용 되므로 안됨
    this.age;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 합니다!`);
  }
}

const studentC = new StudentDeveloper("Ronaldo", 40, 2, "TS");
console.log(studentC.introduce());
console.log(studentC.programming());

// 접근제어자 3개
// public : 모든 범위에서 접근할 수 있도록(default)
// private : 클래스 내부에서만 접근 가능
// protected : 클래스 내부 & 상속받은 파생 클래스 접근
