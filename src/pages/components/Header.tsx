import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div
      style={{
        margin: "0px 30px 30px 30px",
        background: "white",
        height: "100vh",
      }}
    >
      <div>Patient List</div>
      <div
        style={{
          border: "1px solid black",
          width: "300px",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          style={{
            border: "none",
            outline: "none",
          }}
          placeholder="Search table"
        />
        <Image
          style={{
            marginLeft: "70px",
          }}
          src="/search.png"
          width={15}
          height={15}
          alt=""
        />
      </div>
      <div>
        <button
          style={{
            background: "#54BAB9",
            color: "white",
            width: "150px",
          }}
        >
          {
            <Image
              style={{
                marginRight: "5px",
              }}
              src="/add.png"
              width={10}
              height={10}
              alt=""
            />
          }
          Add new patient
        </button>
      </div>
    </div>
  );
};
export default Header;
