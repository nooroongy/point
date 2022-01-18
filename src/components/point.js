import Button from "./UI/Button";
import Card from "./UI/Card";

const Point = ({title,type,state})=>{
    function getButton (_type) {
        console.log(_type)
        switch (_type){
            case "A" : return (<Button>fail</Button>)
            case "B" : return (<><Button>start</Button><Button>done</Button></>)
            case "C" : return (<Button>success</Button>)
        }
    }

    return(
        <div>
            <Card>
                {title}
                {getButton(type)}
            </Card>
        </div>
    )

}

export default Point;