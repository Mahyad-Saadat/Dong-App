import React from "react";
import mahyad from "./mftPhotos/mahyad.jpg";
import mani from "./mftPhotos/mani.jpg";
import mohammad from "./mftPhotos/mohammad.jpg";
import arman from "./mftPhotos/arman.jpg";
import afshin from "./mftPhotos/afshin.jpg";
import profile from "./mftPhotos/profile.png";
export const reactCourseMembers = [
  {
    id: "mft-Mani",
    name: "Mani",
    image: mani,
    balance: 0,
  },
  {
    id: "mft-Mahyad",
    name: "Mahyad",
    image: mahyad,
    balance: 0,
  },
  {
    id: "mft-Mohammad",
    name: "Mohammad",
    image: mohammad,
    balance: 0,
  },
  {
    id: "mft-Arman",
    name: "Arman",
    image: arman,
    balance: 0,
  },
  {
    id: "mft-Mahan",
    name: "Mahan",
    image: profile,
    balance: 0,
  },
  {
    id: "mft-Afshin",
    name: "Afshin",
    image: afshin,
    balance: 0,
  },
  {
    id: "mft-Benyamin",
    name: "Benyamin",
    image: profile,
    balance: 0,
  },
];

export default function MftData({ setName, setImage }) {
  const membersFirstCol = reactCourseMembers.slice(1, 4);
  const membersSecondCol = reactCourseMembers.slice(4, 7);
  const instructor = reactCourseMembers[0];
  function handleSelect(memberName, memberImage) {
    setName(memberName);
    setImage(memberImage);
  }
  return (
    <React.Fragment>
      <div className="radio-input instructor">
        {
          <React.Fragment>
            <input
              value={instructor.id}
              name="Selected friend"
              id={instructor.id}
              type="radio"
              onChange={() => handleSelect(instructor.name, instructor.image)}
            />
            <label htmlFor={instructor.id}>{instructor.name}</label>
          </React.Fragment>
        }
      </div>
      <div className="members-container">
        <div className="radio-input members-first-col">
          {membersFirstCol.map((member) => (
            <React.Fragment>
              <input
                value={member.id}
                name="Selected friend"
                id={member.id}
                type="radio"
                onChange={() => handleSelect(member.name, member.image)}
              />
              <label htmlFor={member.id}>{member.name}</label>
            </React.Fragment>
          ))}
        </div>
        <div className="radio-input members-second-col">
          {membersSecondCol.map((member) => (
            <React.Fragment>
              <input
                value={member.id}
                name="Selected friend"
                id={member.id}
                type="radio"
                onChange={() => handleSelect(member.name, member.image)}
              />
              <label htmlFor={member.id}>{member.name}</label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
