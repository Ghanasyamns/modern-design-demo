import { CircularProgress } from "@mui/material";
import NavBar from "./NavBar";

export default function Loader() {
  return (
    <div className="flex  justify-center items-center h-[100vh] w-full bg-[--backgrounnd-primary]">
      <CircularProgress color="error" />
    </div>
  );
}
