import { Navigate, Route, Routes } from "react-router-dom";

import { CountryPage } from "../countries/pages/CountryPage";
import { SearchPage } from "../countries/pages/SearchPage";
import { Navbar } from "../ui/components/Navbar";

export const AppRouter = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <Routes>
        <Route path="countries" element={<SearchPage />} />
        <Route path="country/:id" element={<CountryPage />} />

        <Route path="*" element={<Navigate to="countries" />} />
      </Routes>
    </div>
  );
};
