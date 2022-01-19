import Button from "./UI/Button";
import Card from "./UI/Card";
import '../css/point.css'
import Toogle from "./UI/Toogle";
import { useState } from "react";

const Point = ({ title, type, state ,score =10,subScore=5}) => {
    const [success, isSucces] = useState(false);
    const [subCount,setSubCount] = useState(0);

    const toggleSuccess = () => {
        isSucces(res => !res);
    }

    const plusSubCount = () =>{
        if(!success) return;
        setSubCount(subCount+1)
    }

    const minusSubCount = () =>{
        if(!success) return;
        if(subCount>0)
        setSubCount(subCount-1)
    }

    function setUI(_type) {
        switch (_type) {
            case "A": return (<Toogle value={success} event={toggleSuccess}></Toogle>)
            case "B": return (<>
                <Toogle value={success} event={toggleSuccess}></Toogle>
                <Button event={plusSubCount} icon ={true}>add_circle_outline</Button>
                <Button event={minusSubCount} icon ={true}>remove_circle_outline</Button>
            </>)
            case "C": return (<Button>success</Button>)
            default: return
        }
    }

    return (
        <div className={"point__wrap " + (success ? 'point__success' : '')}>
            <Card>
                <div className="point__contents_wrap">
                    <div className="point__title">
                        {title}
                    </div>
                    <div className="point__ui">
                        {setUI(type)}
                    </div>
                    <div className="point__score">
                        {(success ? score : 0) + subScore*subCount}
                    </div>
                </div>
            </Card>
        </div>
    )

}

export default Point;