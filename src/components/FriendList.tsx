import React from "react";
import Friend from "./Friend";

interface FriendData {
  id: string;
  name: string;
  image: string;
  balance: number;
}

interface FriendsListProps {
  friends: FriendData[];
  onSelection: (friend: FriendData) => void;
  selectedFriend: FriendData | null;
}

const FriendsList: React.FC<FriendsListProps> = ({
  friends,
  onSelection,
  selectedFriend,
}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
