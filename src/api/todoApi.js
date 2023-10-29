import axios from "axios";

export const getTodos = async () => {
  try {
    const data = await axios.get(`http://localhost:3004/ports`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getTodoById = async (context) => {
  try {
    const data = await axios.get(
      `http://localhost:3004/ports/${context.queryKey[1]}`
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const postTodos = async (todo) => {
  try {
    console.log(todo);
    const data = await axios.post(`http://localhost:3004/ports`, todo);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = async (id) => {
  try {
    const data = await axios.delete(`http://localhost:3004/ports/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
