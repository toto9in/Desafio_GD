import { Header } from "../components/header";
import { BookingCard } from "../components/teste";

export const Restaurant = () => {
  return (
    <div className="pt-28 bg-gray-200 w-full flex flex-col justify-center items-center h-screen">
        <Header />
        <BookingCard/>
      <h1>Restaurant</h1>
    </div>
  );
};
