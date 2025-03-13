export const SelectColors = (hour: string): string => {
  if (hour <= "10") {
    return "bg-purple-600";
  } else if (hour === "12" || hour === "11" || hour === "13") {
    return "bg-orange-300";
  } else if (hour >= "14" && hour <= "18") {
    return "bg-cyan-500";
  } else if (hour >= "19" && hour <= "23") {
    return "bg-teal-500";
  } else if (hour === "24" || hour === "00") {
    return "bg-teal-500";
  } else {
    return "bg-purple-600";
  }
};
