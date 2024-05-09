"use client";
import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export default function MaterialProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
