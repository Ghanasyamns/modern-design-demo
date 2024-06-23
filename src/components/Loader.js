import { CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[100vh] w-full">
      <CircularProgress color="error" />
    </div>
  );
}
