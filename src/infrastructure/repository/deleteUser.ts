import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import getUserByEmail from "./getUserByEmail";

const deleteUser = async (email: string) => {
  try {
    const userId = (await getUserByEmail(email)) || "";

    const userDocRef = doc(db, "users", userId);
    await deleteDoc(userDocRef);
    console.log(`Usuario con ID ${userId} eliminado con éxito.`);
    return true;
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return false;
  }
};

export default deleteUser;
