"use client";

import { CustomFilter, Hero, SearchBar, CarCard, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCar } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(false);
	//Search State

	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");

	//Filter State
	const [fuel, setFuel] = useState("");
	const [year, setYear] = useState(2020);
	
	//pagination State
	const [limit, setLimit] = useState(10);

	const getCars = async () => {
		setLoading(true);
		try {
			const allCars = await fetchCar({
				manufacturer: manufacturer || "",
				year: year || 2022,
				fuel: fuel || "",
				limit: limit || 10,
				model: model || "",
			});
			setCars(allCars);
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getCars();
	}, [manufacturer, model, fuel, year, limit]);
	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
					<p>Explore The Cars You Might Like</p>
					<div className="home__filters">
						<SearchBar setManufacturer={setManufacturer} setModel={setModel}/>
						<div className="home__filter-container">
							<CustomFilter title="fuel" options={fuels} setFilterStr={setFuel} />
							<CustomFilter title="year" options={yearsOfProduction} setFilterNum={setYear} />
						</div>
					</div>
					{cars.length > 0 ? (
						<>
							<section className="home__cars-wrapper">
								{cars.map((c) => (
									<CarCard  car={c} />
								))}
							</section>
							{loading && <div className="mt-16 w-full flex-center">
								<Image src={"/car-logo.svg"} alt="loader" width={50} height={50} className="object-contain" />
								</div>}
							<ShowMore
								isNext={limit > cars.length}
								setLimit={setLimit}
							/>
						</>
					) : (
						<div className="home__error-container">
							<h2 className="text-black text-xl font-bold">Oops , no Result</h2>
							
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
