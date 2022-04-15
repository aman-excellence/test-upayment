import React from "react";
import Card from "../Components/Card";

const HomePage = () => {
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <div className="mt-16">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <Card />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
