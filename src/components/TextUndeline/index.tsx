interface TextUndelineProps {
  text: string;
  enableHoverEffect?: boolean;
}

const TextUndeline: React.FC<TextUndelineProps> = ({
  text,
  enableHoverEffect,
}) => {
  return (
    <>
      <div
        className={`font-medium cursor-pointer ${
          enableHoverEffect
            ? "hover:underline-offset-6 hover:transition-all hover:duration-300 hover:underline-from-left"
            : " underline underline-offset-6 "
        }`}
      >
        {text}
      </div>
      <style>{`
            .hover\\:underline-from-left::after {
                content: '';
                display: block;
                height: 2px;
                background: currentColor;
                transform: scaleX(0);
                transform-origin: left;
                transition: transform 0.3s ease;
            }
            .hover\\:underline-from-left:hover::after {
                transform: scaleX(1);
            }
        `}</style>
    </>
  );
};

export { TextUndeline };

