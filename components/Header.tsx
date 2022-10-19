import Image from "next/image";
import Link from "next/link";
import React from "react";
// import {SearchIcon}
import { SearchIcon } from '@heroicons/react/outline'

const Header = () => {
	return (
		<header className="sticky top-0 z-30 flex w-full items-center justify-center bg-[#E7ECEE] p-4">
			<div className="flex items-center justify-center md:w-1/5">
				<Link href="/">
					<div className="relative h-10 w-5 cursor-pointer opacity-75 hover:opacity-100 ">
						<Image
							src="https://rb.gy/vsvv2o"
							layout="fill"
							objectFit="contain"
						/>
					</div>
				</Link>
			</div>
            <div className="hidden flex-1 justify-center items-center space-x-8 md:flex">
                <a className="headerLink">Product</a>
                <a className="headerLink">Explore</a>
                <a className="headerLink">Support</a>
                <a className="headerLink">Business</a>
            </div>
            <div>
                <SearchIcon className="headerIcon"/>
            </div>
		</header>
	);
};

export default Header;
