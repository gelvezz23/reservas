import { HourGenerator } from "../../../entities/GenerateHours";

export const hourGenerator: HourGenerator = () => {
  const hours = [];
  for (let i = 0; i < 25; i++) {
    hours.push(i.toString().padStart(2, "0"));
  }
  return hours;
};
