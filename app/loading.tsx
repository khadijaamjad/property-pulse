"use client";

import ClipLoader from "react-spinners/ClipLoader";

interface LoadingProps {
  loading: boolean;
}

const override = {
  display: "block",
  margin: "100px auto"
};

const Loading = ({ loading }: LoadingProps) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Loading;
