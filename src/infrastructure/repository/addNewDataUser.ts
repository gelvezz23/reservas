import { doc, setDoc } from "firebase/firestore";
import getUserByEmail from "./getUserByEmail"; // Asegúrate de que la ruta sea correcta
import { db } from "../firebase/config";
import { AddNewDataUsersType } from "../../entities/firebase/addNewDataUser";

const addNewDataUser = async (
  email: string,
  datosAdicionales: Partial<AddNewDataUsersType>
) => {
  try {
    const userId = await getUserByEmail(email);
    if (!userId) {
      console.log("Usuario no encontrado.");
      return false; // Indica que la operación falló
    }

    const userDocRef = doc(db, "users", userId);
    await setDoc(userDocRef, datosAdicionales, { merge: true });
    console.log("Datos adicionales agregados a Firestore:", userId);
    return true; // Indica que la operación fue exitosa
  } catch (error) {
    console.error("Error al agregar datos adicionales a Firestore:", error);
    return false; // Indica que la operación falló
  }
};

export default addNewDataUser;
