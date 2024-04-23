import { useState } from 'react';

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeLoading = (boolean) => {
    setIsLoading(boolean);
  };
  return { isLoading, handleChangeLoading };
};
export default useLoader;
