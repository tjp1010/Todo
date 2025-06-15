import styles from "./todoItems.module.css";

export default function TodoItems({ item }) {
  function handleDelete(item) {
    console.log("delete button clicked for item", item);
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {item}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteBtn}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
