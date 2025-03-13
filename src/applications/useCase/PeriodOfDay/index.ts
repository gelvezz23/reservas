export const periodOfDay = (hour: string): string => {
  if (hour <= "11") {
    return "Mañana";
  } else if (hour === "12") {
    return "Mediodía";
  } else if (hour >= "13" && hour <= "18") {
    return "Tarde";
  } else if (hour >= "19" && hour <= "23") {
    return "Noche";
  } else if (hour === "24" || hour === "00") {
    return "Medianoche";
  } else {
    return "Hora inválida";
  }
};
