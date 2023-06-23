"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import {useRouter} from "next/navigation";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <>
      <button type="submit" className={`-ml-3 z-10 ${otherClasses} `}>
        <Image src={"/magnifying-glass.svg"} alt="magnifying glass" width={40} height={40} className="object-contain" />
      </button>
    </>
  );
};

const SearchBar = () => {

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (manufacturer === "" && model === ""){
      return alert("Please Fill in the Search bar");
    }
    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (manufacturer: string, model: string) =>{
    const SearchParams = new URLSearchParams(window.location.search);
    if (model){
      SearchParams.set("model", model);
    }else{
      SearchParams.delete("model");
    }
    if (manufacturer){
      SearchParams.set("manufacturer", manufacturer);
    }else{
      SearchParams.delete("manufacturer");
    }
    
    const newPath = `${window.location.pathname}?${SearchParams.toString()}#discover`
    router.push(newPath);
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image src="/model-icon.png" alt="car model" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" />
        <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" className="searchbar__input" />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <SearchButton otherClasses={"max-sm:hidden"} />

    </form>
  );
};

export default SearchBar;
