import styles from "./Scroll.module.scss";

const Scroll = () => {
  const handleScroll = (event: { target: any; deltaY: any }) => {
    const container = event.target;
    const scrollAmount = event.deltaY;
    container.scrollTo({
      top: 0,
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.scroll}>
      <div className={styles.scroll__container} onWheel={handleScroll}>
        <div className={styles.scroll__item}>CONTENT 1</div>
        <div className={styles.scroll__item}>CONTENT 2</div>
        <div className={styles.scroll__item}>CONTENT 3</div>
      </div>
    </div>
  );
};

export default Scroll;
