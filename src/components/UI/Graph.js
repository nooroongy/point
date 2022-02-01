import '../../css/UI/graph.css'

const Graph = ({ data, max, width = 'default' }) => {
    return (
        <div className='graph__wrap' style={{
            width: width == 'default' ? '100vw' : width + 'px'
        }}>
            <div className='graph__contents' style={{
                width: data.length * 30 + 'px'
            }}>
                {data.map((v, i) => {
                    return <span 
                    className='graph__block' 
                    key={i}
                    style={{
                        height:v.value*100/max +'%'
                    }}>
                        <span className='graph__label'>{v.label}</span>
                    </span>
                })}
            </div>
        </div>
    )
}

export default Graph;