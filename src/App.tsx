import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/sessions");
  }, []);

  return (
    <div className="bg-base-100">
      <Outlet />
    </div>
  );
}
