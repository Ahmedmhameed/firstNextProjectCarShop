import { Car, FilterProps } from "@/types";

export async function fetchCar(filter: FilterProps) {
	const { manufacturer, year, model, limit, fuel } = filter;

	const headers = {
		"X-RapidAPI-Key": "fb62e59368msh2ebca76fc62d142p1bd00fjsn370ed2e5dadc",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};
	const url = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");
	url.searchParams.append("model", model);
	url.searchParams.append("limit", limit.toString());
	url.searchParams.append("fuel_type", fuel);
	url.searchParams.append("year", year.toString());
	url.searchParams.append("make", manufacturer);
	
	const respond = await fetch(url, {
		headers: headers,
	});
	const result = await respond.json();
	return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age

	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;

	// Calculate total rental rate per day
	const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

	return rentalRatePerDay.toFixed(0);
};

export function generateCardImageURL(car: Car, angle?: string) {
	const url = new URL("https://cdn.imagin.studio/getimage");
	const { make, model, year } = car;

	url.searchParams.append("customer", "hrjavascript-mastery");
	url.searchParams.append("make", make);
	url.searchParams.append("modelFamily", model.split(" ")[0]);
	url.searchParams.append("zoomType", "fullscreen");
	url.searchParams.append("modelYear", `${year}`);
	// url.searchParams.append('zoomLevel', zoomLevel);
	url.searchParams.append("angle", `${angle}`);

	return `${url}`;
}
