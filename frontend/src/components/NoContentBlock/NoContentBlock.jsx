import css from "./_NoContentBlock.module.scss";

const NoContentBlock = ({ toggleModal }) => {
  return (
    <div className={css.wrapper}>
      There&apos;s no any pet yet. You may{" "}
      <button className={css.button} onClick={() => toggleModal()}>
        add pet
      </button>
    </div>
  );
};

export default NoContentBlock;
