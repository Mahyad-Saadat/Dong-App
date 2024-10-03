import React from "react";
import Button from "./Button";

interface FriendProps {
  friend: {
    id: string;
    name: string;
    image: string;
    balance: number;
  };
  onSelection: (friend: FriendProps["friend"]) => void;
  selectedFriend: {
    id: string;
  } | null;
}

const Friend: React.FC<FriendProps> = ({
  friend,
  onSelection,
  selectedFriend,
}) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={`${friend.name}'s picture`} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} $
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button
        onClick={() => onSelection(friend)}
        type="button"
        className="button"
      >
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
