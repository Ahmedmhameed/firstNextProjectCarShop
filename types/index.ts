import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyle?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface SearchManufacturerProps {
	selected: string;
	setSelected: (manufacturer: string) => void; //React.Dispatch<React.SetStateAction<string>>
}
export interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps{
  manufacturer : string;
		model : string;
		year: number;
		fuel: string ;
		limit: number;
} 


export interface OptionProps{
  title : string;
  value : string;
}
export interface CustomFilterProps {
	title: string;
	options: OptionProps[];
	setFilterNum?: Dispatch<SetStateAction<number>>;
	setFilterStr?: Dispatch<SetStateAction<string>>;
}
export interface ShowMoreProps {
	isNext: boolean;
	setLimit: Dispatch<SetStateAction<number>>;
}
export interface SearchBarProps {
	setManufacturer: Dispatch<SetStateAction<string>>;
	setModel: Dispatch<SetStateAction<string>>;
}