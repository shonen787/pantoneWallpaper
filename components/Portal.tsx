export default function Portal({onclose}){
    return (
        <div className="modal" style={{zIndex: 1000}}>
            <div> I'm a modal dialog</div>
            <button onClick={onclose}>Close</button>
        </div>
    );
}