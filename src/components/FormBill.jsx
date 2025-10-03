const FormBill = ({
  name,
  WhoIsPaying,
  BillInput,
  SetBill,
  SetPayByUser,
  SelectPay,
  WhoPays,
  FriendShare,
  HandleSplitBill,
}) => {
  return (
    <>
      <div className="space-y-4 p-6 bg-neutral-950 rounded-2xl shadow-lg">
        <h2 className="text-center text-lg font-semibold text-white mb-4">
          Split The Bill With {name}
        </h2>

        {/* Bill Amount */}
        <div className="flex items-center justify-between gap-4 bg-neutral-900/70 px-4 py-3 rounded-xl border border-neutral-700 hover:border-yellow-400 transition">
          <label className="text-neutral-300 text-sm font-medium w-32">
            Bill Amount
          </label>
          <input
            type="number"
            value={BillInput || ""}
            onChange={(e) => SetBill(Number(e.target.value))}
            placeholder="Enter total bill"
            className="flex-1 bg-neutral-800 text-white text-sm px-3 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Your Share */}
        <div className="flex items-center justify-between gap-4 bg-neutral-900/70 px-4 py-3 rounded-xl border border-neutral-700 hover:border-yellow-400 transition">
          <label className="text-neutral-300 text-sm font-medium w-32">
            Your Share
          </label>
          <input
            type="text"
            value={SelectPay || 0}
            onChange={(e) =>
              SetPayByUser(
                Number(e.target.value) > BillInput
                  ? BillInput
                  : Number(e.target.value)
              )
            }
            placeholder="Your Share"
            className="flex-1 bg-neutral-800 text-white text-sm px-3 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Friend's Share */}
        <div className="flex items-center justify-between gap-4 bg-neutral-900/70 px-4 py-3 rounded-xl border border-neutral-700 hover:border-yellow-400 transition">
          <label className="text-neutral-300 text-sm font-medium w-32">
            {name} Share
          </label>
          <input
            disabled={true}
            type="text"
            value={FriendShare}
            placeholder="Friends Share"
            className="flex-1 bg-neutral-800 text-white text-sm px-3 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        {/* Who Pays */}
        <div className="flex items-center justify-between gap-4 bg-neutral-900/70 px-4 py-3 rounded-xl border border-neutral-700 hover:border-yellow-400 transition">
          <label className="text-neutral-300 text-sm font-medium w-32">
            Who's paying
          </label>
          <select
            value={WhoIsPaying}
            onChange={(e) => WhoPays(e.target.value)}
            className="bg-neutral-800 text-white text-sm px-3 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="user">You</option>
            <option value={name}>{name}</option>
          </select>
        </div>

        {/* Submit */}
        <button
          onClick={HandleSplitBill}
          className="w-full px-4 py-2 rounded-lg bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-300 transition"
        >
          Split Bill
        </button>
      </div>
    </>
  );
};

export default FormBill;
