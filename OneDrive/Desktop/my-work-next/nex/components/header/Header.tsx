import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Noto_Serif_Khmer } from "next/font/google";

const noto_serif_khmer = Noto_Serif_Khmer({
  weight: "600",
  subsets: ["khmer"],
});
export default function Header() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold flex items-center">
            <div className="px-5">
              <Image
                className="rounded-full"
                src="/a84ba94803d23d42c20f3b2f8a3a678a.png"
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <Link href="/" legacyBehavior>
              <a className="text-gray-800 hover:text-gray-600">Real Estate</a>
            </Link>
          </div>
          <nav className="space-x-4">
            <Link href="/" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800">Home</a>
            </Link>
            <Link href="/buy" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800">Buy</a>
            </Link>
            <Link href="/rent" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800">Rent</a>
            </Link>
            <Link href="/sell" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800">Sell</a>
            </Link>
          </nav>
          <div className="flex justify-center items-center">
            <form className="max-w-sm mx-auto">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900"
              ></label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="US">English</option>
                <option value="CA" className={noto_serif_khmer.className}>
                  ខ្មែរ
                </option>
              </select>
            </form>
            <div className="px-5 ">
              <Image
                src="/profile.png"
                alt="profile"
                width={50}
                height={50}
                className="rounded-full object-cover"
              ></Image>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
