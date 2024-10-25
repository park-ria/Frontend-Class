// 서로소 요소인 두개를 합치고 싶을 때 : 서로소 유니온
// 서로소 관계는 A이면서 B일수 없고 B이면서 A일수 없을 때

interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  school: string;
}

// 서로소 유니온 타입
interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "David",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "Peter",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

const gotoSchool = (user: User<Student>) => {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
};
console.log(gotoSchool(studentUser));
