import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoContent = styled.span<{ checked: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 생략전 최대로 보여줄 줄 수 */
  -webkit-box-orient: vertical; /* 세로 방향으로 줄 수 제한 */
  cursor: text;
  text-decoration: ${props => (props.checked ? 'line-through' : 'initial')};
  color: ${props => (props.checked ? '#aaa' : '#222')};
`;

/* 투두는 여러 개가 되어야 함 > TodoItem 또한 상위 컴포넌트에서 주는 데이터를 가지고 투두를 만들어야 함 > prop으로 투두를 받아올 수 있게!  */
export default function TodoItem({ todo }: { todo: ITodoItem }) {
  return (
    <Box>
      <Checkbox checked={todo.completed} />
      <Block marginLeft="10px" />
      <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
    </Box>
  );
}
