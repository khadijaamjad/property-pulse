"use client";

import ClipLoader from "react-spinners/ClipLoader";

interface SpinnerProps {
  loading: boolean;
}

const override = {
  display: "block",
  margin: "100px auto"
};

const Spinner = ({ loading }: SpinnerProps) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Spinner Spinner"
    />
  );
};

export default Spinner;
