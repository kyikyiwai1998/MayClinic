"use client";
import React from "react";
import Image from "next/image";
const TopBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        background: "#54BAB9",
        alignItems: "center",
      }}
    >
      <div>
        <Image
          style={{
            marginLeft: "20px",
          }}
          src="/Logo_2.png"
          width={50}
          height={50}
          alt=""
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "20px",
        }}
      >
        <Image
          style={{
            marginRight: "20px",
          }}
          src="/Notifications.png"
          width={30}
          height={30}
          alt=""
        />
        <Image
          style={{
            marginRight: "20px",
          }}
          src="/user_image.png"
          width={45}
          height={45}
          alt=""
        />
        <p>
          Lisa<br></br> Operator
        </p>
      </div>
    </div>
  );
};
export default TopBar;
