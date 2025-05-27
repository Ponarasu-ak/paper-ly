import React, { useRef, useState } from "react";
import { EyeClose, EyeOpen } from "../../assets";

interface InputProps {
  type?: "text" | "number";
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  styles?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  id?: string;
  inputSize?: "small" | "medium" | "large";
  variant?: "default" | "password";
  inputLabel?: string;
}

const sizeStyles = {
  small: { padding: "6px 8px", fontSize: "12px" },
  medium: { padding: "10px", fontSize: "14px" },
  large: { padding: "14px 14px", fontSize: "16px" },
};

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  styles,
  className,
  disabled = false,
  id,
  inputSize = "medium",
  variant = "default",
  inputLabel,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordVariant = variant === "password";

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {inputLabel && (
        <div className=" font-medium text-sm mb-2">{inputLabel}</div>
      )}
      <input
        ref={inputRef}
        type={isPasswordVariant && !showPassword ? "password" : type}
        value={value}
        onChange={(e) =>
          onChange(
            type === "number" ? e.target.value.slice(0, 10) : e.target.value
          )
        }
        placeholder={placeholder}
        style={{
          ...styles,
          ...sizeStyles[inputSize],
          border: isFocused ? "1.5px solid #000" : "1.5px solid #E3DBD8",
          borderRadius: "5px",
          outline: "none",
          paddingRight: isPasswordVariant ? "45px" : undefined,
        }}
        className={`${className} custom-input`}
        disabled={disabled}
        id={id}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isPasswordVariant && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          style={{
            position: "absolute",
            right: "14px",
            top: "70%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            color: "#2563EB",
          }}
        >
          {showPassword ? <EyeOpen  /> : <EyeClose />}
        </button>
      )}
    </div>
  );
};

export { Input };
