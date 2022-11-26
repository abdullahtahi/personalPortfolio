import DownloadIcon from "../../assets/images/download-icon.png";
const DownloadResume = () => {
  return (
    <section>
      <a
        className="download-btn"
        href="https://image-assets-bucket.s3.ap-south-1.amazonaws.com/Abdullah%20tahir%20resume%20%282%29-1669449273180.docx"
        download="Abdullah Tahir"
      >
        <img
          src={DownloadIcon}
          alt="Download icon"
          className="download-img"
        ></img>
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
