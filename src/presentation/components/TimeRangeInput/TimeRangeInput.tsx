/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import { hourGenerator } from "../../../applications/useCase/HourGenerator";

const TimeRangeInput: FC<{ handleOnChange: (event?: any) => void }> = ({
  handleOnChange,
}) => {
  const [startTime, setStartTime] = useState("12");
  const [endTime, setEndTime] = useState("23");
  const hours = hourGenerator();

  const filteredEndHours = () => {
    if (!startTime) return hours; // Si no hay hora de inicio, muestra todas las horas
    return hours.filter((hour) => hour >= startTime);
  };

  const onStartTimeChange = (event: { target: { value: string } }) => {
    setStartTime(event.target.value);
    handleOnChange(event);
  };

  const onEndTimeChange = (event: { target: { value: string } }) => {
    setEndTime(event.target.value);
    handleOnChange(event);
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <div>
          <label htmlFor="startHour">Hora de inicio:</label>
          <select
            id="startHour"
            name="startHour"
            value={startTime}
            onChange={onStartTimeChange}
            className="border rounded p-2"
            required
          >
            {hours.map((hour) => (
              <option key={hour} value={hour}>
                {`${hour}:00`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="endHour">Hora de fin:</label>
          <select
            id="endHour"
            name="endHour"
            value={endTime}
            onChange={onEndTimeChange}
            className="border rounded p-2"
            required
          >
            {filteredEndHours().map((hour) => (
              <option key={hour} value={hour}>
                {`${hour}:00`}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default TimeRangeInput;
