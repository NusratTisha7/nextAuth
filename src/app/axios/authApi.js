import axios from "axios";

export const userSignin = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${process.env.SERVER}/api/user/b2blogin`,
      { email, password }
    );
     console.log({response})
    if (response?.data.isSuccess) {
      return response.data.data;
    } else {
      throw new Error(response?.data?.message);
      console.log({response})
    }
  } catch (error) {
    throw new Error(error);
    console.log({error})
  }
};