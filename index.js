function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false
        },
        {
            text: 'build todo app',
            isCompleted: false
        },
        {
            text: 'ask for help',
            isCompleted: false
        },
        {
            text: 'finish homework',
            isCompleted: false
        }
    ]);

    const [value, setValue] = React.useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        const newsTodos = [...todos, {text:value, isCompleted:false}];
        setTodos(newsTodos);
        setValue('');
    }

    const removeTodo = e => {
        const index = number(e.target.id);
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }

    return (<>
            {todos.map((todo,i) => <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add Todo ..."
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)