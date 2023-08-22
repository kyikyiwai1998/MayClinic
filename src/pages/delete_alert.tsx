import Image from "next/image";
const DeleteAlert = () => {
  return (
    <div
      style={{
        background: "#1ab45d",
        width: "300px",
        color: "#ffff",
        boxShadow: "0 0 2px #888",
        padding: "10px",
        borderRadius: "3px",
        fontSize: "14px",
        fontWeight: "400",
        display: "flex",
        position: "absolute",
        bottom: "10px",
        left: "3px",
      }}
    >
      <div>
        <Image src="/success.png" width={15} height={15} alt="" />
      </div>
      <div>Patient is successfully deleted!</div>
    </div>
  );
};
export default DeleteAlert;
