import Image from "next/image";
import style from "../../styles/table.module.css";

type TableDataType = {
  id: number;
  petName: string;
  status: string;
};

interface TableDataType1 extends TableDataType {
  pawrent: string;
  gender: "Male" | "Female";
  breed: string;
  dateOfBirth: string;
  contactPhoneNo: string | number;
  address?: string;
}
const Table = () => {
  const tableData: TableDataType1[] = [
    {
      id: 1,
      petName: "Milo",
      status: "allergy",
      pawrent: "The Nu San",
      breed: "Beagle",
      gender: "Female",
      dateOfBirth: "1.5.2021",
      contactPhoneNo: 9797122499,
      //   address: "Yangon",
    },
  ];
  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Pet Name</th>
            <th>Status</th>
            <th>Pawrent</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Contact Phone No.</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val: TableDataType1, index: number) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{val.petName}</td>
                <td>{val.status}</td>
                <td>{val.pawrent}</td>
                <td>{val.breed}</td>
                <td>{val.gender}</td>
                <td>{val.dateOfBirth}</td>
                <td>{val.contactPhoneNo}</td>
                <td>{val.address}</td>
                <td>
                  <div className={style.more}>
                    <Image
                      style={{
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                      }}
                      src="/more.png"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <div>
                      <button>
                        {
                          <Image
                            src="/edit.png"
                            width={10}
                            height={10}
                            alt=""
                          />
                        }
                        Edit
                      </button>
                      <button>
                        {
                          <Image
                            src="/delete.png"
                            width={10}
                            height={10}
                            alt=""
                          />
                        }
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
