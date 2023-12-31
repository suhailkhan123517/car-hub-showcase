"use client";
import Image from "next/image";
import { CustomButton } from ".";

function Hero() {
  const handleScroll = () => {};

  return (
    <>
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            Find, Book, or rent a car - Quickly and easily!
          </h1>
          <p className="hero__subtitle">
            Streamline your car rental experience width our effortless Booking
            process.
          </p>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            btnType="button"
            rightIcon=""
            handleClick={() => {
              handleScroll;
            }}
            isDisabled={false}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
