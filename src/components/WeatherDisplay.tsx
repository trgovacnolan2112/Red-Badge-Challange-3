const Display = (props: any) => {
    return(
        <div>
            <h2>Current Temp: {props.weather}</h2>
        </div>
    )
}

export default Display;