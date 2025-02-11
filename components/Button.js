import React from "react";

export default function Button(props) {
  const { text } = props;
  return (
    <button
      className={
        "bg-[#537156] text-white rounded-[12px] overflow-hidden duration-200 hover:opacity-60 border-2 border-[#537156]"
      }
    >
      <p className={"px-6 whitespace-nowrap py-2 "}>{text}</p>
    </button>
  );
}
