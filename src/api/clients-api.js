import axios from 'axios';
import status from '../data/status.json';

const getClientAPI = axios.create({
  baseURL: 'https://dummyjson.com/users',
});

export async function getClients() {
  try {
    const { data } = await getClientAPI();

    const sliceData = data.users.slice(0, 6);

    const newData = sliceData.map((el) => {
      const random = Math.floor(Math.random() * 3);
      el.status = status[random];
      return el;
    });
    console.log(newData);

    return newData;
  } catch (error) {
    console.error(error);
  }
}
