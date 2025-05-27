import React from "react";

interface WelcomeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className=" rounded-lg shadow-sm max-w-[300px] p-10 flex flex-col md:gap-2  justify-start transition hover:shadow-md">
      <div className=" w-14 h-14 bg-gray-100 text-gray-600 flex items-center justify-center  rounded-full mb-4">
        {icon && icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export { WelcomeCard };
