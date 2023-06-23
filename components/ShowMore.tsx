"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";
const ShowMore = ({ isNext, setLimit }: ShowMoreProps) => {
	const router = useRouter();

	return (
		<div className="w-full flex-center gap-5 mt-10">
			{!isNext ? (
				<CustomButton
					title="Show More"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={() => setLimit((pre: number) => pre + 10)}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default ShowMore;
