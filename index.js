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

    return (<>
            {todos.map((todo,i) => <div key={i}>{todo.text}</div>)}
        </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)