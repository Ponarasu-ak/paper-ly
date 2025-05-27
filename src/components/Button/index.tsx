import { Button, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

interface ButtonMuiProps {
  btnLable: string;
  btnVarient?: "contained" | "outlined" | "text";
  btnStartIcon?: ReactNode;
  btnEndIcon?: ReactNode;
  btnOnclick?: () => void;
  btnSize?: "small" | "medium" | "large";
  btnColor?: string;
  btnHeight?: string;
  btnWidth?: string;
  btnPadding?: string;
  btnRadius?: string;
  btnBorderColor?: string; // New prop for border color
}

const ButtonMui: React.FC<ButtonMuiProps> = ({
  btnLable,
  btnVarient = "contained",
  btnStartIcon,
  btnEndIcon,
  btnOnclick,
  btnSize = "medium",
  btnColor = "#000",
  btnHeight,
  btnWidth,
  btnPadding,
  btnRadius,
  btnBorderColor = btnColor, // Default to btnColor if not provided
}) => {
  const btnStyle: SxProps = {
    fontSize: "16px",
    fontWeight: 400,
    borderRadius: btnRadius,
    textTransform: "none",
    height: btnHeight,
    width: btnWidth,
    padding: btnPadding,
    ...(btnVarient === "contained" && {
      backgroundColor: btnColor,
      color: "#FFFFFF",
      boxShadow: "none",
      "&:hover": { backgroundColor: btnColor, opacity: 0.9, boxShadow: "none" },
    }),

    ...(btnVarient === "outlined" && {
      border: `1.5px solid ${btnBorderColor}`,
      color: btnColor,
      backgroundColor: "transparent",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: `${btnColor}20`,
        boxShadow: "none",
      },
    }),

    ...(btnVarient === "text" && {
      color: btnColor,
      backgroundColor: "transparent",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: `${btnColor}20`,
        boxShadow: "none",
      },
    }),
  };

  return (
    <Button
      sx={btnStyle}
      startIcon={btnStartIcon}
      endIcon={btnEndIcon}
      variant={btnVarient}
      onClick={btnOnclick}
      size={btnSize}
    >
      {btnLable}
    </Button>
  );
};

export { ButtonMui };
