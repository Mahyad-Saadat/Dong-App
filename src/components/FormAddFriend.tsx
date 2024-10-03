import React, { useState } from "react";
import Button from "./Button";

interface FormAddFriendProps {
  onAddFriend: (friend: {
    id: string;
    name: string;
    image: string;
    balance: number;
  }) => void;
}

const FormAddFriend: React.FC<FormAddFriendProps> = ({ onAddFriend }) => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name-input">👫&nbsp;Friend&nbsp;name</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image-input">🖼️ Image URL</label>
      <input
        id="image-input"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button className="button" type="submit">
        Add
      </Button>{" "}
    </form>
  );
};

export default FormAddFriend;
