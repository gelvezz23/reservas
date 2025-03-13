import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const getUserByEmail = async (email: string) => {
  try {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      return userDoc.id;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al obtener el ID del usuario:", error);
    return null;
  }
};

export default getUserByEmail;
