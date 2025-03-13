import { doc, updateDoc } from "firebase/firestore";
import getUserByEmail from "./getUserByEmail";
import { UserType } from "../../entities/UsersState";
import { db } from "../firebase/config";

const updateUser = async (email: string, userData: UserType) => {
  try {
    const userId = await getUserByEmail(email);
    if (!userId) {
      console.log("Usuario no encontrado.");
      return false; // Indica que la actualización falló
    }

    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, userData);
    console.log("Usuario actualizado en Firestore:", userId);
    return true; // Indica que la actualización fue exitosa
  } catch (error) {
    console.error("Error al actualizar usuario en Firestore:", error);
    return false; // Indica que la actualización falló
  }
};

export default updateUser;
