// 자바, 파이썬, C와 같은 전통적인 프로그래밍 언어에서는 반복문을 사욯할 수 있는 배열을 선언할 때, 선언단계부터 몇개의 데이터를 처리할지 사전 정의
int arr[5] = [1,2,3,4,5,6,7]; // 에러남
int arr[20] = [1,2,3]; // 에러나지는 않지만 컴퓨터가 조금 느려짐을 감안, 시간 경과

// 해결방법 : 참조타입
// heap : 메모리공간
// 배열 안에 있는 첫번째 인덱스 값만 알고있어도 두번째, 세번째 인덱스 값은 알아서 해당 주소를 통해서 찾아오는 특징
// 배열의 첫번째 값이 어떤 주소를 참조하고 있는지만 알아도 나머지 값을 한 번에 불러 올 수 있다.
// 장점 : 읽어오는데 굉장히 효율적인 자료구조
// 장점 : 이미 자료구조의 형식, 사이즈를 가지고 태어나기 때문에 해당 배열의 첫번째 혹은 마지막번째에 순차적으로 값을 추가하는데 효율적
// 단점 : 최초에 배열 데이터를 생성하는 시점에서 배열 안에 입력되어야 하는 데이터의 총개수가 미정인 경우
// 단점 : 값이 추가되었을 때, 해당 값이 개발자가 원하는 정확한 위치에 추가 혹은 삭제해야하는 경우

// 자료구조를 이야기할 때에는 배열 & 연결리스트

// 연결리스트 자료구조 : 산발적으로 흩어져있는 데이터를 필요에 따라서 하나의 연결된 리스트의 자료구조로 만들어주는 장범

// 연결 리스트의 경우 : 값을 찾아서 불러오는데 배열 대비 상대적인 시간이 많이 걸림

// 만약 여러분들이 어떤 프로젝트 & 제품을 만드는데 있어서 데이터의 입출력 및 편집이 빈번하게 일어나야하는 상황 => 연결리스트 훨씬 효율적인 자료구조
// ex : sns(crud)

// 만약 컴포넌트가 마운트가 되는 시점에 서버로부터 전달받은 자료의 수정, 편집이 거의 일어나지 않는 정적인 형태의 프로젝트 및 제품이라면 배열
// ex : 넷플릭스(불러오기만 함)

// 배열이라는 자료구조가 사용할 수 있는 다양한 메서드 함수 & 속성

// 연결리스트 역시 사용할 수 있는 다양한 함수 혹은 속성 구현

// 추상자료형 : 연결리스트의 자료구조가 사용할 수 있는 기능을 담고 있는 함수 및 속성

// 연결리스트 & 추상자료형의 형태로 구현

// 1. 연결리스트를 활용해서 UI로 모든 데이터를 출력하는 추상 자료형
// printAll()

// 2. 연결리스트를 활용해서 UI에 출력중인 모든 데이터를 제거하는 추상자료형
// clear()

// 3. 연결리스트를 활용해서 특정 인덱스 값을 삽입하는 추상자료형
// insertAt(index, data)

// 4. 연결리스트를 활용해서 특정 인덱스값을 제거하는 추상자료형
// deleteAt(index)

// 5. 연결리스트를 활용해서 마지막 인덱스값을 제거하는 추상자료형
// deleteLast()

// 6. 연결리스트를 활용해서 마지막 인덱스 값을 추가하는 추상자료형
// insertLast()

// 7. 연결리스트를 활용해서 특정 인덱스 값을 읽어오는 추상자료형
// getNodeAt(index)