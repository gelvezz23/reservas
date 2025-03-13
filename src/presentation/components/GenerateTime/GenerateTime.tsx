import { hourGenerator } from "../../../applications/useCase/HourGenerator";
import { periodOfDay } from "../../../applications/useCase/PeriodOfDay";
import { SelectColors } from "../../../applications/useCase/SelectColors";

const GenerateTime = () => {
  const hours = hourGenerator();
  return hours.map((hour, index) => {
    const period = periodOfDay(hour);
    const color = SelectColors(hour);
    return (
      <>
        <div
          key={`${index}-${hour}`}
          className={`absolute -left-2  h-4 w-4 ${color} border border-gray-300 rounded-full`}
        ></div>
        <div className="pl-6 py-2" key={`${index}-${hour}-o`}>
          <p className="font-semibold">{hour}:00</p>
          <p className="text-sm text-gray-300">{period}</p>
        </div>
      </>
    );
  });
};

export default GenerateTime;
