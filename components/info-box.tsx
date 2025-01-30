interface InfoBoxProps {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: {
    link: string;
    color: string;
    text: string;
  };
  children: React.ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor,
  buttonInfo,
  children
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${backgroundColor}`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
      <p className={`mt-2 mb-4 ${textColor}`}>{children} </p>
      <a
        href={buttonInfo.link}
        className={`inline-block text-white rounded-lg px-4 py-2 hover:opacity-80 ${buttonInfo.color}`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
