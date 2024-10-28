function ListGroup(){
    let items =[
        'Marrakech' ,
        'Casablanca' ,
        'Rabat' ,
        'Safi' ,
        'Agadir'
    ];

    /*
    You can use :
    function GetMessage(){
        return items.length === 0 ? <p>No items found </p> : null;
    }
     You can also use an arrow function  
    
    const GetMessage = () => {
        return items.length === 0 ? <p> No items found </p> : null;;
    }
    Best way used by REACT devs is : {items.lenght === 0 && <p> No item found </p>}
    In Js : True && 1 = 1 ; True && 'Dave' = 'Dave'; False && 'Dave' = False.
    */
    return (
        <>
            <h1> List </h1>
            {items.length=== 0 && <p> No item found </p>}
            <ul className="list-group">
                {items.map(item => (
                    <li key={item}>{item}</li>
                ))};
            </ul>
        </>
    );
}

export default ListGroup;