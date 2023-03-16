import React from "react";
import { Link } from 'react-router-dom';
import '../style/page.css'
import '../style/button.css'

function RecommendComponent() {
    return (
            <div className="page">
                <h1>Recommendation</h1>
                    <div className="body" id="recommendation">
                        <div>
                            <p>
                                1. การปรับพฤติกรรมและสภาพแวดล้อมในการทำงาน ไม่ว่าจะเป็นการกำหนดเวลาพักเป็นระยะ (ข้อแนะนำคือ ทุก ๆ 2 ชั่วโมงหรือเร็วกว่านั้น) การลุกขึ้นมาเคลื่อนไหวหรือบริหารผ่อนคลายกล้ามเนื้อ หมั่นปรับเปลี่ยนท่าทาง ไม่ค้างอยู่ท่าใดท่าหนึ่งนานเกินไป
                                ที่สำคัญควรเลือกใช้โต๊ะและเก้าอี้ที่ความเหมาะสมกับสรีระ ควรปรับระดับของการนั่งที่ถูกต้อง และปรับท่านั่งให้ถูกต้อง คือ นั่งหลังตรง จอคอมพิวเตอร์จะต้องอยู่ในระดับสายตา ไม่ก้มหรือเงย และหัวไหล่ไม่ยกขณะทำงาน
                            </p>
                        </div>
                        <div>
                            <p>
                                2. การออกกำลังกายเป็นประจำ ด้วยวิธีการที่หลากหลาย ได้แก่
                                ออกกำลังกายแบบคาร์ดิโอ เช่น การวิ่ง ว่ายน้ำ ปั่นจักรยาน ซึ่งช่วยทำให้การหมุนเวียนโลหิตมีประสิทธิภาพ กล้ามเนื้อที่เกี่ยวข้องกับการเคลื่อนไหวจะมีความแข็งแรงขึ้น ป้องกันเอ็นและข้อยึด เกิดความยืดหยุ่น
                                ออกกำลังกายแบบเสริมสร้างกล้ามเนื้อ โดยการเสริมสร้างเพิ่มความแข็งแรงของกล้ามเนื้อที่เกี่ยวข้องกับการเคลื่อนไหวของเรา เช่น การหมุน การก้ม-เงย และการเสริมสร้างกล้ามเนื้อส่วนแกนกลางลำตัว เช่น การออกกำลังกายแบบพิลาทิส จะทำให้ลดโอกาสบาดเจ็บของ กระดูกสันหลัง ซึ่งมักได้รับผลกระทบโดยตรงจากท่านั่งของเรา
                                ออกกำลังกายแบบยืดเหยียด มีประโยชน์ในการยืดและบริหารกล้ามเนื้อส่วนต่าง ๆ ทำให้ข้อต่อเคลื่อนไหวได้เป็นปกติ และลดอาการตึงและเมื่อยล้าของกล้ามเนื้อ
                            </p>
                        </div>
                        </div>
                <div >
                    <label>xxx</label>
                    <input className="student-id" placeholder = "กรุณากรอก"/>
                </div>

                <div>
                <Link to="/Home">
                <button class="button-pushable" id="next">
                    <span class="button-shadow"></span>
                    <span class="button-edge"></span>
                    <span class="button-front text">
                    Finish!
                    </span>
                </button>
                </Link>
                </div>

            </div>
    )
    }
export default RecommendComponent