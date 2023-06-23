"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
	const router = useRouter();
	const handleNavigation = () => {
        router.push(updateSearchParams("limit", `${(pageNumber + 1) * 10}`));
    };
	return (
		<div className="w-full flex-center gap-5 mt-10">
			{!isNext ? (
				<CustomButton
					title="Show More"
					containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default ShowMore;
