import Image from "next/image";
import style from "../styles/delete_modal.module.css";
type DeleteModalPropStype = {
  handleOnClose: () => void;
  deleteFunction: () => void;
  setShowDeleteAlert: (del: boolean) => void;
};
const DeleteModal = ({
  handleOnClose,
  deleteFunction,
  setShowDeleteAlert,
}: DeleteModalPropStype) => {
  return (
    <div
      className={style.delete_modal_div}
      style={{
        display: "block",
      }}
    >
      <div className={style.delete_modal}>
        <div className={style.closeimgdiv}>
          <button onClick={handleOnClose}>
            <Image
              style={{
                margin: "0",
                padding: "0",
              }}
              src="/clear-button.png"
              width={15}
              height={15}
              alt=""
            />
          </button>
        </div>
        <div className={style.h2}>
          <h2>Confirmation</h2>
        </div>
        <div className={style.p}>
          Are you sure you want to delete this patient?
        </div>
        <div className={style.btngp}>
          <button
            className={style.delete}
            onClick={() => {
              deleteFunction();
              setShowDeleteAlert(true);
              setTimeout(() => {
                setShowDeleteAlert(false);
              }, 3000);
              handleOnClose();
            }}
          >
            Delete
          </button>
          <button className={style.cancle} onClick={handleOnClose}>
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
