import Image from "next/image";
const UpdateAlert = () => {
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
        <Image
          style={{
            marginRight: "2px",
          }}
          src="/success.png"
          width={20}
          height={20}
          alt=""
        />
      </div>
      <div>Patient is successfully created!</div>
    </div>
  );
};
export default UpdateAlert;
