import TodoItems from "./TodoItems";
import styles from "./todoList.module.css";

export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItems key={item} item={item} />
      ))}
    </div>
  );
}
