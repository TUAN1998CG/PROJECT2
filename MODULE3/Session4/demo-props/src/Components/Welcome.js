function Welcome(props) {
    return (<div>
        <h1>Hello : {props.name}</h1>

    </div>);
}
function Infomation(props){
    return(
        <div>
            <h1>Im : {props.years}</h1>
            <h1>ADD : {props.addr}</h1>
        </div>
    )
}

export default Welcome;
export {Infomation}