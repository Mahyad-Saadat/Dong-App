import React, { useState } from "react";
import Button from "./Button";

// Define the types for the props
interface FormSplitBillProps {
  selectedFriend: {
    name: string;
  };
  onSplitBill: (amount: number) => void;
}

const FormSplitBill: React.FC<FormSplitBillProps> = ({
  selectedFriend,
  onSplitBill,
}) => {
  const [bill, setBill] = useState<number | string>(""); // State for bill amount
  const [paidByUser, setPaidByUser] = useState<number | string>(""); // State for user's paid amount
  const [whoIsPaying, setWhoIsPaying] = useState<"user" | string>("user"); // State for who is paying

  const paidByFriend = bill ? Number(bill) - Number(paidByUser) : ""; // Calculate the amount paid by the friend

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!bill || !paidByUser) return; // Ensure bill and user's payment are provided
    onSplitBill(
      whoIsPaying === "user" ? Number(paidByFriend) : -Number(paidByUser)
    );
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input
        id="bill"
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="paid-by-user">🧍‍♂️ Your expense </label>
      <input
        id="paid-by-user"
        type="text"
        max={typeof bill === "number" ? bill : undefined} // Set max if bill is a number
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > (typeof bill === "number" ? bill : 0)
              ? paidByUser
              : Number(e.target.value)
          )
        }
      />

      <label htmlFor="paid-by-friend">
        👫 {selectedFriend.name}'s expense{" "}
      </label>
      <input id="paid-by-friend" type="text" disabled value={paidByFriend} />

      <label htmlFor="who-is-paying">🤑 Who is paying the bill </label>
      <select
        name=""
        id="who-is-paying"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value={selectedFriend.name}>{selectedFriend.name}</option>
      </select>

      <Button className="button" type="submit">
        {" "}
        Split bill
      </Button>
    </form>
  );
};

export default FormSplitBill;
