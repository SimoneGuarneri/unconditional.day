import { useState } from "react";

export const Card = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="flex ">
      <div
        className={`w-[300px] h-fit ${
          isSelected ? "bg-lightAccentPurple" : "bg-whiter"
        } m-5 rounded-lg border break-inside-avoid-column article pb-6`}
      >
        <a target={"blank"}>
          <h6 className="font-medium text-darkAccentPurple text-md md:text-md -mt-7 border-0 outline-0 shadow-none">
            Lorem Ipsum
          </h6>
          <h5 className="mt-4 text-2xl text-start font-bold tracking-tight text-baseDark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h5>
          <p className="mt-6 mb-6 font-regular  text-baseDark line-clamp-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            culpa fugiat doloremque accusantium, rem unde aliquam vel fuga ad
            corrupti! Reiciendis minima libero, quam tenetur expedita
            voluptatibus veniam, repellat harum quaerat optio cumque excepturi
            aliquam.
          </p>
        </a>
        <button
          className={`${
            isSelected
              ? "bg-contrastOrange hover:bg-orange-600"
              : "bg-accentPurple hover:bg-violet-500"
          }  hover:text-baseWhite text-baseDark text-sm font-regular py-1 px-5 rounded-full float-right -mb-10 -mr-2`}
          onClick={() => setIsSelected(!isSelected)}
        >
          {isSelected ? "Indietro" : "Sicuro?"}
        </button>
      </div>
    </div>
  );
};
