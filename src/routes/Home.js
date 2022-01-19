import Mobile from '../components/Layout/Mobile';
import Point from '../components/point';
import Checker from '../components/UI/Checker';
import Toogle from '../components/UI/Toogle';

const Home = () => {
    var testData = [
        {
            title: '자소서쓰기',
            state: 'success',
            type: "A"
        }, {
            title: '영단어 100개 외우기',
            state: 'start',
            type: "B"
        }, {
            title: '2시 전에 자기',
            state: 'fail',
            type: "A"
        },{
            title: '점심 운동',
            state: 'success',
            type: "A"
        }, {
            title: '유산소',
            state: 'start',
            type: "B"
        }, {
            title: 'Real Class 듣기',
            state: 'fail',
            type: "A"
        },{
            title: '블록체인 공부하기',
            state: 'success',
            type: "A"
        }, {
            title: 'Study Coding',
            state: 'start',
            type: "B"
        }, {
            title: 'Real Class',
            state: 'fail',
            type: "A"
        },{
            title: '100 english words',
            state: 'success',
            type: "A"
        }, {
            title: 'Study Coding',
            state: 'start',
            type: "B"
        }, {
            title: 'Real Class',
            state: 'fail',
            type: "A"
        },{
            title: '100 english words',
            state: 'success',
            type: "A"
        }, {
            title: 'Study Coding',
            state: 'start',
            type: "B"
        }, {
            title: 'Real Class',
            state: 'fail',
            type: "A"
        },
    ]

    return (
        <div className='home__wrap'>
            <Toogle value={false}></Toogle>
            <Mobile>
                {testData.map((v, i) => {
                    return <Point
                        key={i}
                        title={v.title}
                        state={v.state}
                        type={v.type}
                    />
                })}
            </Mobile>


            <Checker></Checker>
        </div>
    )
}

export default Home;