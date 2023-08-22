import { useState } from "react";
import Image from "next/image";
import { TableDataType1 } from ".";
import style from "../styles/save_modal.module.css";
type AddModalBoxPropsType = {
  handleOnClose: () => void;
  handleOnSave: (newPet: TableDataType1) => void;
  setShowSaveAlert: (save: boolean) => void;
};
const AddModalBox = ({
  handleOnClose,
  handleOnSave,
  setShowSaveAlert,
}: AddModalBoxPropsType) => {
  const [petName, setPetName] = useState<string>(" ");
  const [status, setStatus] = useState("");
  const [pawrent, setPawrent] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [Content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [township, setTownship] = useState("");
  console.log("createForm");
  console.log("petName", petName);
  return (
    <div
      className={style.addmodaldiv}
      style={{
        display: "block",
      }}
    >
      <div className={style.addmodalbox}>
        <div className={style.closeimgdiv}>
          <button onClick={handleOnClose}>
            <Image
              className={style.closebtn}
              src="/close.png"
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>
        <div className={style.h1}>Add new patient</div>
        <div className={style.sub_title}>
          Enter new patient information below
        </div>
        <div className={style.modalbody}>
          <div className={style.row}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                flex: 1,
              }}
            >
              <p>Pet Name</p>
              <input
                type="text"
                value={petName}
                onChange={(e) => {
                  setPetName(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Status</p>
              <select
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option disabled selected>
                  please choose status
                </option>
                <option value="allergy">allergy</option>
                <option value="picky">picky</option>
              </select>
            </div>
          </div>
          <div className={style.row}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <p>Patient</p>
              <input
                type="text"
                value={pawrent}
                onChange={(e) => {
                  setPawrent(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Breed</p>
              <select
                // value={breed}
                onChange={(e) => {
                  setBreed(e.target.value);
                }}
              >
                <option value="choose" disabled selected>
                  please choose breed
                </option>
                <option value="beagle">Beagle</option>
                <option value="spaniel">Spaniel</option>
                <option value="goldenretriever">Golden Retriever</option>
              </select>
            </div>
          </div>
          <div className={style.row}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <p>Gender</p>
              <div
                className="radio"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  onClick={() => setGender("male")}
                  value="male"
                />
                <p>Male</p>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  onClick={() => setGender("female")}
                  value="female"
                />
                <p>Female</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Date of Birth</p>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={style.row}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <p>Content</p>
              <input
                type="text"
                value={Content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Address</p>
              <input
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className={style.row}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <p>City</p>
              <select
                // value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                <option disabled selected>
                  please choose city
                </option>
                <option value="yangon">Yangon</option>
                <option value="mandalay">Mandalay</option>
                <option value="naypyitaw">Naypyitaw</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "20px",
              }}
            >
              <p>Township</p>
              <select
                // value={township}
                onChange={(e) => {
                  setTownship(e.target.value);
                }}
              >
                <option disabled selected>
                  please choose Township
                </option>
                <option value="hlaing">Hlaing</option>
                <option value="mayangone">Mayangone</option>
                <option value="hlaingtharyar">Hlaing Thar Yar</option>
              </select>
            </div>
          </div>
          <div className={style.buttons}>
            <button
              className={style.save}
              onClick={() => {
                const newPet = {
                  id: Math.floor(Math.random() * 1000),
                  petName: petName,
                  status: status,
                  pawrent: pawrent,
                  breed: breed,
                  gender: gender,
                  dateOfBirth: dateOfBirth,
                  contactPhoneNo: Content,
                  address: address,
                  city: city,
                  township: township,
                };
                console.log(newPet);
                handleOnSave(newPet);
                handleOnClose();
                setShowSaveAlert(true);
                setTimeout(() => {
                  setShowSaveAlert(false);
                }, 3000);
              }}
            >
              Save
            </button>
            <button onClick={handleOnClose} className={style.cancle}>
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModalBox;
