import { useState } from "react";
import { deleteTodo, getTodoById, getTodos, postTodos } from "./api/todoApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Todos = () => {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
  const [inputState, setInputState] = useState("")
  const [todo, setTodo] = useState("")

  const createSeed = async() => {
    await postTodos({title: `post ${new Date()}`})
    query.refetch()
  }

  const query = useQuery(['getTodo'], getTodos, {refetchOnMount: true})
  const result = useQuery(['getById', inputState], getTodoById, {enabled: !!inputState})

  const pagination = useQuery(['getById', page], getTodoById, {keepPreviousData: true})

  const addMutation = useMutation((newTodo) => postTodos(newTodo), {onSuccess: () => queryClient.invalidateQueries('getTodo')})
  const deleteMutate = useMutation((id) => deleteTodo(id), {onSuccess:  () => queryClient.invalidateQueries('getTodo')})

  const handleAddMutation = () => {
    addMutation.mutate({title: todo})
  }

  const handleDeleteMutation = (id) => {
    deleteMutate.mutate(id)
  }
  return <div>
    <input type="text" placeholder="search by id" value={inputState} onChange={(e) => setInputState(e.target.value)}/>
    <p>{result?.data?.title}</p>
    <br/>
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button onClick={handleAddMutation}>Click</button>
    <div>
      <p>{page}</p>
      <p>{pagination?.data?.title}</p>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
      <button onClick={() => setPage(page + 1)} disabled={page === query?.data?.length}>Next</button>
    </div>
    {
      query?.isLoading && <h1>Loading</h1>
    }
    {
        query?.data?.map((todo, index) => {
          return(
            <div  key={todo.id} style={{display: 'flex',justifyContent: "space-between", marginBottom: '20px'}}>
              <p>{todo.title}</p>
              <button onClick={() => handleDeleteMutation(todo.id)}>Delete</button>
            </div>
          )
        })
    }
  </div>;
};

export default Todos;
