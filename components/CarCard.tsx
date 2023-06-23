"use client";
import { useState } from "react";
import Image from "next/image";
import { Car } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import CarDetails from "./CarDetails";
interface CarCardProps {
  car: Car;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h1 className="car-card__content-title">
          {make} {model}
        </h1>
      </div>
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="Car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative w-full flex mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray ">
          <div className=" flex flex-col justify-center items-center gap-2 ">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission == "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2 ">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2 ">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-16 rounded-full bg-primary-blue "
            textStyle="text-white landing-[17px] text-[14px] text-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
