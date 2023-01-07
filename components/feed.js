import styles from "../pages/index.module.css";

export default function Feed (props) {
  const result = props.result;
  const resultList = [];
  const list = resultList.push(result);
  const feed = function (){

  };
  console.log("list", list);
  console.log("result", result);
  console.log("props", props);

  return (
    <div className={styles.feed}>
    {list}
    </div>
  );
}