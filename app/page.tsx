import { CustomFilter, Hero, SearchBar, CarCard } from "@/components";
import { fetchCar } from "@/utils";
import Image from "next/image";

export default async function Home() {
	const cars = await fetchCar();

	const isEmpty = !Array.isArray(cars) || cars.length == 0;

	return (
		<main className="overflow-hidden">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className="home__text-container">
					<h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
					<p>Explore The Cars You Might Like</p>
					<div className="home__filters">
						<SearchBar />
						<div className="home__filter-container">
							<CustomFilter title="fuel" />
							<CustomFilter title="year" />
						</div>
					</div>
					{!isEmpty ? (
						<section className="home__cars-wrapper">
							{cars.map((c) => (
								<CarCard key={c.id} car={c} />
							))}
						</section>
					) : (
						<div className="home__error-container">
							<h2 className="text-black text-xl font-bold">Oops , no Result</h2>
							<p>{cars?.massage}</p>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
