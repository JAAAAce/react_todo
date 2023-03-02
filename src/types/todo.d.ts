interface ITodoItem {
  id: string;
  complete: boolean;
  editing: boolean;
}

interface ITodoItemContent {
  content: string;
}
/* .d.ts확장자는 import하지 않아도 파일 전역에서 해당 타입 사용 가능 */
