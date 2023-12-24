import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography variant="h4" color="blue-gray" className="font-semibold">
        &copy; 2023 toto9
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
        <li>
          <Typography
          variant="h5"
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-red-700 focus:text-red-700"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            variant="h5"
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-red-700 focus:text-red-700"
          >
            License
          </Typography>
        </li>
       
        <li>
          <Typography
            variant="h5"
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-red-700 focus:text-red-700"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}