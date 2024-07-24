import React, { useState } from "react";
import Button from "./Button";
import MftData from "../MftData.jsx";
export default function FormAddFriend({ onAddFriend, reactCourseMembers }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [mft, setMft] = React.useState(false);
  const handleTuggle = () => {
    setMft((tuggle) => !tuggle);
  };

  function handleSubmit(e) {
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
  }
  const customAddFriend = (
    <React.Fragment>
      {" "}
      <label htmlFor="">👫&nbsp;Friend&nbsp;name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
    </React.Fragment>
  );

  return (
    <form id="" className="form-add-friend" onSubmit={handleSubmit}>
      {!mft && customAddFriend}
      {mft && <MftData setImage={setImage} setName={setName} />}
      {/* ******************MFT tuggle****************** */}
      <input
        id="checkbox_toggle"
        type="checkbox"
        className="check"
        checked={mft}
        onChange={handleTuggle}
      />
      <div className="checkbox">
        <label className="slide" htmlFor="checkbox_toggle">
          <label className="toggle" htmlFor="checkbox_toggle"></label>
          <label className="text" htmlFor="checkbox_toggle">
            Custom
          </label>
          <label className="text" htmlFor="checkbox_toggle">
            MFT😎
          </label>
        </label>
      </div>
      {/* ******************MFT tuggle****************** */}

      <Button>Add</Button>
    </form>
  );
}
