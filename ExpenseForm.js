const ExpenseForm=()=>{
    const titleChangeHandler =(event)=>{
        console.log(event.target.value)
    }
    return(
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title : </label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount : </label>
                <input type="text"/>
            </div>
            <div className="new-expense__control">
                <label>Date : </label>
                <input type="date"/>
            </div>
            <br></br>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
            </div>
            
        </form>
    )
}
export default ExpenseForm;