export const FORMSUBMIT = async (data) => {
  if (!data) return;
  try {
    if (!data.Phonenumber)
      throw new Error("debe asignar un número de teléfono");

    await fetch(
      "https://formsubmit.co/ajax/onlymodelsagencycontact@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {
          context: "Modelo Registrada",
          nickname: data.nickname,
          email: data.email,
          phonenumber: data.Phonenumber,
          nacionality: data.nacionality,
          pago: data.pay || false,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
