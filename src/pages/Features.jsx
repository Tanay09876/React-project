import React from "react";
import { Routes, Route } from "react-router-dom";
import InnerNav from "../components/innernav";


function Features() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">All Projects</h1>
      <InnerNav />

    </div>
  );
}

export default Features;
