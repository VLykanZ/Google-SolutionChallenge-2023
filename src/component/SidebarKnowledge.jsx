import '../style/sidebar.css'

function SidebarKnowledge() {
    return (
    <aside className='knowledge'>
        <h3 className='knowledge'>สารบัญ</h3>
        <ul className='knowledge'>
            <li><a className='knowledge' href="#WhatisOfficSyndrome">ออฟฟิศซินโดรม คืออะไร</a></li>
            <li><a className='knowledge' href="#OfficeSyndromeCause">โรคออฟฟิศซินโดรม มีสาเหตุมาจากอะไร</a></li>
            <li><a className='knowledge' href="#OfficeSyndromeSymptoms">อาการออฟฟิศซินโดรม ที่พบได้บ่อยดังนี้</a></li>
            <li><a className='knowledge' href="#OfficeSyndromeSelf-Observing">แนวทางการสังเกตอาการโรคออฟฟิศซินโดรมด้วยตัวเอง</a></li>
            <li><a className='knowledge' href="#WhoisLikelytoHaveOfficeSyndrome">ใครมีโอกาสเป็นโรคออฟฟิศซินโดรมได้บ้าง</a></li>
            <li><a className='knowledge' href="#OfficeSyndromeTreatment">แนวทางการรักษาออฟฟิศซินโดรม</a></li>
        </ul>
    </aside>
    );
}
export default SidebarKnowledge;