import data from "../Data/data.js";
import { useState } from "react";
import Profile from "./Profile.jsx";
import { faker } from "@faker-js/faker";
import FormBill from "./FormBill.jsx";
import { version } from "react";
const BillSplit = () => {
  const [Input, setInput] = useState(0);
  const [NewFriend, setNewFriend] = useState(data);
  const [SelectId, setSelectId] = useState(null);
  const [SelectName, setSelectName] = useState(null);
  /// For Form
  const [Bill, setBill] = useState(null);
  const [PaidByUser, setPaidByUser] = useState("");
  const [WhoIsPaying, setWhoIsPaying] = useState("user");
  const FriendShare = Bill ? Bill - PaidByUser : "";
  const PickInfo = (id, name) => {
    setSelectId(id !== SelectId ? id : null);
    setSelectName(name !== SelectName ? name : null);
  };
  const add = () => {
    setNewFriend((e) => [
      ...e,
      {
        id: crypto.randomUUID(),
        name: Input,
        image: faker.image.avatar(),
        phone: faker.helpers.replaceSymbols("(+##)-###-###-####"),
        balance: 0,
      },
    ]);
  };
  const HandleSplitBill = () => {
    if (!Bill || !PaidByUser) return;

    let value = WhoIsPaying === "user" ? -(Bill - PaidByUser) : FriendShare;
    setNewFriend((e) =>
      e.map((e) =>
        e.id === SelectId ? { ...e, balance: e.balance + value } : e
      )
    );
  };
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center p-3">
        {/* Profile Section */}
        <div className="w-full max-w-lg ">
          <Profile
            PickInfo={(id, name, balance) => PickInfo(id, name, balance)}
            key={NewFriend.id}
            Selected={SelectId}
            data={NewFriend}
            setInputValue={(e) => setInput(e)}
            add={() => add()}
          />
        </div>

        {/* Bill Form Section */}
        {SelectId && (
          <div className="w-full max-w-lg md:ml-0 mt-4 md:mt-0">
            <FormBill
              name={SelectName}
              BillInput={Bill}
              SetBill={(e) => setBill(e)}
              SetPayByUser={(e) => setPaidByUser(e)}
              SelectPay={PaidByUser}
              WhoPays={(e) => setWhoIsPaying(e)}
              WhoIsPaying={WhoIsPaying}
              FriendShare={FriendShare}
              HandleSplitBill={() => HandleSplitBill()}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default BillSplit;
