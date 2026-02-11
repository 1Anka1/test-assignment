import axios from 'axios';
import { statusQueue } from '../helpers/utils/table/columns';

const getClientAPI = axios.create({
  baseURL: 'https://dummyjson.com/users',
});

export async function getClients() {
  try {
    const { data } = await getClientAPI();

    const sliceData = data.users.slice(0, 6);

    const newData = sliceData.map((el) => {
      const random = Math.floor(Math.random() * 3);
      el.statusQueue = statusQueue[random];
      return el;
    });

    return newData;
  } catch (error) {
    console.error(error);
  }
}
