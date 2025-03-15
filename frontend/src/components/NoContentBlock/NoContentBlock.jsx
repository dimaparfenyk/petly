import css from "./_NoContentBlock.module.scss";

const NoContentBlock = () => {
  return (
    <div className={css.wrapper}>
      There&apos;s no any pet yet. You may add it ;-)
    </div>
  );
};

export default NoContentBlock;
