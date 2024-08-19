"use client"

import React from "react";

interface NavbarProps {
  isCollapsed?: boolean;
  onResetWidth?: () => void;
}

const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  return <div>navbar!</div>;
};

export default Navbar;
