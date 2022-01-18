import Point from '../components/point';
import Checker from '../components/UI/Checker';

const Home = () => {
    var testData = [
        {
            title: '영단어100개',
            state: 'success',
            type: "A"
        }, {
            title: '코딩공부하기',
            state: 'start',
            type: "B"
        }, {
            title: 'Real Class',
            state: 'fail',
            type: "C"
        },
    ]

    return (
        <div>
            {testData.map(v => {
                return <Point
                    title={v.title}
                    state={v.state}
                    type={v.type}
                />
            })}
            <Checker></Checker>
        </div>
    )
}

export default Home;