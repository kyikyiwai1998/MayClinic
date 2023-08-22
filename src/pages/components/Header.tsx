import React from "react";
import Image from "next/image";
type HeaderPropsType = {
  handleOnClick: () => void;
};
const Header = ({ handleOnClick }: HeaderPropsType) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        marginRight: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            color: "#54BAB9",
            marginTop: "10px",
            fontWeight: "500px",
          }}
        >
          Patient List
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              border: "1px solid lightGray",
              width: "250px",
              alignItems: "center",
              borderRadius: "10px",
              padding: "3px",
              cursor: "pointer",
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
                marginLeft: "50px",
              }}
              src="/search.png"
              width={15}
              height={15}
              alt=""
            />
          </div>
          <div>
            <button
              onClick={handleOnClick}
              style={{
                background: "#54BAB9",
                color: "white",
                width: "150px",
                padding: "6px 10px",
                borderColor: "white",
                borderRadius: "10px",
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "250px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <div>
              <select
                style={{
                  borderColor: "lightgray",
                  borderStyle: "groove",
                  padding: "5px 15px",
                  borderRadius: "10px",
                }}
              >
                <option>Status All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              <select
                style={{
                  borderColor: "lightgray",
                  padding: "5px 15px",
                  borderRadius: "10px",
                }}
              >
                <option>Breed All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p>Row per pages:</p>
            <div>
              <select
                style={{
                  borderColor: "lightgray",
                  padding: "5px 10px",
                  borderRadius: "10px",
                }}
              >
                <option>10</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
