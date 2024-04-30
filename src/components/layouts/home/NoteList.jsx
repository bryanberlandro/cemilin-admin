import { useEffect, useState } from "react"
import { IoMdTrash } from "react-icons/io";


export function NoteList(){
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos')
        return storedTodos ? JSON.parse(storedTodos) : []
})
    const [newTodo, setNewTodo] = useState('')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        console.log('Data Tersimpan')
    }, [todos])

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const newNo = todos.length > 0 ? todos[todos.length - 1].no + 1 : 1
            const newTodoItem = { no: newNo, nama: newTodo,}
            setTodos([...todos, newTodoItem])
            setNewTodo('')
        }
    }

    const handleDeleteTodo = no => {
        const updateTodos = todos.filter(todo => todo.no !== no)
        setTodos(updateTodos)
    }

    return(
        <>
        <div className="gap-3 flex flex-col">
            <h1 className="font-medium">Notes</h1>
            
            <table className="w-full text-sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Todo</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.no}>
                            <td>{todo.no}</td>
                            <td>{todo.nama}</td>
                            <td>
                                <button onClick={() => handleDeleteTodo(todo.no)}><IoMdTrash/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <input
                        type="text"
                        value={newTodo}
                        onChange={e => setNewTodo(e.target.value)}
                        placeholder="Tambahkan Todo Baru"
                        className="border-2"
                    />
            </div>

            <div className="justify-center flex gap-5">
                <button className="bg-blue-600 py-2 px-8 text-white text-sm" onClick={handleAddTodo}>Add</button>
                <button className="bg-red-600 py-2 px-8 text-white text-sm" onClick={() => handleDeleteTodo(todo.no)}>Delete</button>
            </div>
        </div>
        </>
    )
}