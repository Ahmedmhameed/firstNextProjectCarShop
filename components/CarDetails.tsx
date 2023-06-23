import { Car } from "@/types";
import React from "react";
interface CarDetailsProps {
  car: Car;
  isOpen: boolean;
  closeModel: () => void;
}
const CarDetails = ({ car, isOpen, closeModel }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
