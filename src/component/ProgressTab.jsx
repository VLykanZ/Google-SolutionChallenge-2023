import '../style/progresstab.css'

function ProgressTab() {
    return (
    <aside className='progresstab'>
        <h3 className='progresstab'>Progress</h3>
        <ul className='progresstab'>
            <li><a className='progresstab' href="/">Select Bodypart</a></li>
            <li><a className='progresstab' href="/">Diagnose</a></li>
            <li><a className='progresstab' href="/">Exercise List</a></li>
            <li><a className='progresstab' href="/">Exercise!!</a></li>
            <li><a className='progresstab' href="/">Summary</a></li>
        </ul>
    </aside>
    );
}
export default ProgressTab;