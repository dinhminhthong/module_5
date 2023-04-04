import { useState } from "react";

const doanSo = [1, 2, 3];

function DoanSo() {
    const [num, setNum] = useState(null);

    const ranDomSo = () => {
        const index = Math.floor(Math.random() * doanSo.length);
        setNum(doanSo[index]);
    };

    return (
        <div>
            <h1>Đoán số 10k/1l trúng ăn 5k thôi</h1>
            <h3>{num ? `Số bạn đã chọn: ${num}` : "Bạn hãy chọn số từ 1 đến 3"}</h3>
            <button onClick={ranDomSo}>Play now</button>
        </div>
    );
}

export default DoanSo;
