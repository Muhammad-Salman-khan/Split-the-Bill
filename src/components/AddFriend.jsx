const AddFriend = ({ setInputValue, add }) => {
  return (
    <div className="flex items-center space-x-3 p-4 bg-neutral-900/80 rounded-xl shadow-md">
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter friend's name"
        className="flex-1 bg-neutral-800 text-white text-sm px-3 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        onClick={() => add()}
        className="px-4 py-2 rounded-lg bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-300 transition"
      >
        Add Friend
      </button>
    </div>
  );
};

export default AddFriend;
