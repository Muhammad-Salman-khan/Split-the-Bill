import AddFriend from "./AddFriend.jsx";
const Profile = ({ id, data, setInputValue, add, PickInfo, Selected }) => {
  return (
    <div className="container w-fit  p-4 bg-neutral-950 rounded-2xl shadow-lg">
      <div className="flex flex-col divide-y divide-neutral-800">
        <AddFriend setInputValue={setInputValue} add={add} />
        <ul className="divide-y divide-neutral-800">
          {data.map(({ id, name, image, balance, phone }) => (
            <li
              key={id}
              className={`${
                Selected === id
                  ? "bg-gray-700 border-2 border-white"
                  : " hover:bg-neutral-900/70"
              } flex items-center justify-between p-4 rounded-xl transition`}
            >
              <div className={"flex items-center space-x-4"}>
                <img
                  src={image}
                  alt={`${name}'s profile`}
                  className="w-12 h-12 rounded-full border border-neutral-700 object-cover"
                />

                {/* Info */}
                <div className="flex flex-col w-[12rem]">
                  <p className="text-base font-semibold text-white truncate">
                    {name}
                  </p>
                  <p className="text-xs text-neutral-400">📱 {phone}</p>
                  {balance > 0 ? (
                    <p className="text-sm text-red-400 font-medium">
                      you owe {name} ${balance}
                    </p>
                  ) : balance < 0 ? (
                    <p className="text-sm text-green-400 font-medium">
                      {name} owes you ${Math.abs(balance)}
                    </p>
                  ) : (
                    <p className="text-sm text-white font-medium">
                      you and {name} are even
                    </p>
                  )}
                </div>
              </div>
              <button
                key={id}
                onClick={() => {
                  PickInfo(id, name, balance);
                }}
                className={`${
                  Selected === id
                    ? "bg-red-500 text-white hover:bg-red-400"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                } px-4 py-2 rounded-lg  text-sm font-semibold  transition`}
              >
                {Selected === id ? "Close" : "Open"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
