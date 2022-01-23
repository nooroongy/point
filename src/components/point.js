import Button from "./UI/Button";
import Card from "./UI/Card";
import '../css/point.css'
import Toogle from "./UI/Toogle";
import { useEffect, useState } from "react";


const Point = ({ title, type, score = 10, subScore = 5, onChange,failScore =0,subFailScore}) => {
    const [success, isSucces] = useState(false);
    const [subCount, setSubCount] = useState(0);
    const [point, setPoint] = useState(failScore);
    const [disabledToogle, setDisabledToogle] = useState(false)

    useEffect(() => {
        if (typeof onChange === 'function') onChange(-point)
        if (success && subCount > 0) setDisabledToogle(true);
        else setDisabledToogle(false)
        setPoint((success ? score*1 : failScore*1) + subScore * subCount)
    }, [subCount, success])

    useEffect(() => {
        if (typeof onChange === 'function') onChange(point)
    }, [point])

    const toggleSuccess = () => {
        isSucces(res => !res);
    }

    const plusSubCount = () => {
        if (!success) return;
        setSubCount(subCount + 1)
    }

    const minusSubCount = () => {
        if (!success) return;
        if (subCount > 0)
            setSubCount(subCount - 1)
    }

    function setUI(_type) {
        switch (_type) {
            case "A": return (<Toogle value={success} event={toggleSuccess}></Toogle>)
            case "B": return (<>
                <Toogle value={success} event={toggleSuccess} disabled={disabledToogle}></Toogle>
                <Button event={minusSubCount} icon={true}>remove_circle_outline</Button>
                <Button event={plusSubCount} icon={true}>add_circle_outline</Button>
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
                        {point}
                    </div>
                    <div className="point__info">
                        <span className="point__info_main">{score}</span>
                        {
                            (type === 'B') ? (<>
                                <span>/</span>
                                <span className="point__info_sub">{subScore}</span>
                            </>) : <></>
                        }
                    </div>
                </div>
            </Card>
        </div>
    )

}

export default Point;