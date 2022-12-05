import React from "react";

const ScreenSnippet = ({ name, source }) => {
  return (
    <>
      <h4 class="text-zinc-200 font-bold text-2xl mt-4 text-center uppercase">
        {name}
      </h4>
      <div class="flex justify-center">
        <img class="w-11/12 mt-2" src={source} alt={name} />
      </div>
    </>
  );
};

export default ScreenSnippet;
