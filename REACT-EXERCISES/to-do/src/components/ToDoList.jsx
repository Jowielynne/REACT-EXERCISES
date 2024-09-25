import ToDo from "./ToDo";

const ToDoList = ({item}) => {
   return (
      <>

         {item.map((m) => (
            <ToDo item={m} />
         ))}

      </>
   );
}

export default ToDoList;