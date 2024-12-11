import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";
import React from "react";

export default function page() {
  const isAunthenticated = true;

  let children = <Login />;

  if (isAunthenticated) {
    children = <Dashboard />;
  }

  return <Main>{children}</Main>;
}
