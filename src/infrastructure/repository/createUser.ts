import { collection, addDoc } from "firebase/firestore";
import { db } from "./../firebase/config"; // Asume que tienes un archivo firebase.js
import { CreateUsersType } from "../../entities/firebase/CreateUsers";

const createUsers = async ({
  name,
  email,
  address,
  phone,
}: CreateUsersType) => {
  try {
    const data = await addDoc(collection(db, "users"), {
      name,
      email,
      address,
      phone,
    });
    console.log("Documento escrito con ID: ", data);
    return { data, error: "" };
  } catch (error) {
    console.error("Error al agregar documento: ", error);
    throw error;
  }
};

export default createUsers;
