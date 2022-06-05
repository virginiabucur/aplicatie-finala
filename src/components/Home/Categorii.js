import {useState, useEffect} from "react";
import {Container, Row} from "reactstrap";


function Categorii(){
    
    const [categorii, setCategorii] = useState(null);
    const getCategorii = async()=>{
        const responseData = await fetch (
            "https://fakestoreapi.com/products/categories"
            );
        const apiCategorii = await responseData.JSON();
        setCategorii(apiCategorii);
    };

    useEffect (() => {
        getCategorii();
    }, []);

    return(
    <>
    <Container className="categorii">
        <Row>

        </Row>
        <Row>
            {categorii? (
            <>
                {categorii.map((categorii, index)=>{
                    return <Categorii categorii={categorii}/>;
                })}
            </>
            ):(
                <div>Loading...</div>
            )}
        </Row>
    </Container>
    </>
);
}
export default Categorii;
    