import { GetHostUrl } from "./utils/host";

const url = GetHostUrl()

export const getData = async (route) => {
  try {
    const requestData = await fetch(`${url}${route}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    return requestData;
  } catch (error) {
    console.log('this is the error' ,error)
    console.log(error);
  }
};