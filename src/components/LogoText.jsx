import {Link} from "react-router-dom";

export default function LogoText() {
    return (
        <Link to="/" className="fw-normal d-flex align-items-center gap-2">
            {/* <img
                src={"/icon.svg"}
                alt="AccountingLab"
                style={{ width: "60px", height: "60px" }}
            /> */}
            <b className="fs-2 text-dark bald">AccountingLab</b>
        </Link>
    );
}