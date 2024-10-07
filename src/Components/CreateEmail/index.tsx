import { useState } from "react";
import { Form, Input, Row, Col, Popover, Button, Skeleton } from "antd";
import UserIcon from "../../Assets/Images/userIcon.svg";
import TitleIcon from "../../Assets/Images/titleIcons.svg";
import EmailIcon from "../../Assets/Images/msgIcon.svg";
import PhoneIcon from "../../Assets/Images/phoneIcon.svg"
import FileIcon from "../../Assets/Images/fileIcon.svg"
import InfoIcon from "../../Assets/Images/InfoIcons.svg";
import Logo from "../../Assets/Images/logo.svg";
import GlobeIcon from "../../Assets/Images/globeIcon.svg";
import "./index.css";

const content = (
    <div>
        <p>Upload an image to your Dropbox, Postimg file manager, or a similar site and paste the URL here. The file size should not exceed 3 MB.</p>
    </div>
);
const CreateEmail = () => {
    const [loading, setLoading] = useState(true)
    const [fname, setFName] = useState("");
    const [jobTitle, setJobTitle] = useState("");

    const nameOnChange = (e: any) => {
        const nameValue = e.target.value;
        setFName(nameValue);
        console.log(nameValue);
    }
    const JobTitleOnChange = (e: any) => {
        const titleValue = e.target.value;
        setJobTitle(titleValue);
        console.log(titleValue);
    }

    return (
        <div className="create-email-wrapper">
            <h3 className="form-title"> Create Email Signature </h3>
            <Form layout="vertical">
                <Row>
                    <Col md={12}>
                        <Form.Item label="Full Name" style={{ marginRight: "30px" }}>
                            <Input type="text" placeholder="Full Name" value={fname} onChange={nameOnChange} suffix={<img src={UserIcon} alt="icon" />} />
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label="Job Title" >
                            <Input type="text" placeholder="Job Title" value={jobTitle} onChange={JobTitleOnChange} suffix={<img src={TitleIcon} alt="icon" />} />
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label="Email Address" style={{ marginRight: "30px" }}>
                            <Input type="Email" placeholder="Email Address" suffix={<img src={EmailIcon} alt="icon" />} />
                        </Form.Item>
                    </Col>
                    <Col md={12}>
                        <Form.Item label="Phone Number">
                            <Input type="number" placeholder="Phone Number" suffix={<img src={PhoneIcon} alt="icon" />} />
                        </Form.Item>
                    </Col>
                    <Col md={24}>
                        <Form.Item label="Image URL">
                            <div className="image-input-wrapper">
                                <Input type="text" placeholder="Enter Image URL" suffix={<img src={FileIcon} alt="icon" />} />
                                <Popover content={content} overlayStyle={{ width: "280px" }}>
                                    <img src={InfoIcon} alt="img" />
                                </Popover>
                            </div>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <div className="signature-wrapper">
                <div className="inner-signature">
                    <div className="inner-signature-left">
                        {loading === true ? <Skeleton avatar active paragraph={{ rows: 2 }} /> : null}
                        <div className="signature-content">
                            <h4> {fname} </h4>
                            <h4> {jobTitle} </h4>
                        </div>
                    </div>
                    <div className="inner-signature-right">
                        <div> <img src={Logo} alt="logo" /></div>
                        <span className="email"> <img src={GlobeIcon} alt="logo" /> www.luxare.com </span>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <Button size="large"> Reset </Button>
                    <Button size="large" type="primary">Copy signature</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateEmail;