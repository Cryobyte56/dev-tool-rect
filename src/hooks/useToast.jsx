import { useState, useEffect, useCallback } from "react";

const useToast = () => {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = useCallback(() => {
    setShowToast(true);
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return { showToast, triggerToast };
};

export default useToast;
