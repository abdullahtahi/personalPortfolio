import DownloadIcon from "../../assets/images/download-icon.png";
const DownloadResume = () => {
  return (
    <section>
      <a
        className="download-btn"
        href="https://image-assets-bucket.s3.ap-south-1.amazonaws.com/Abdullah%20tahir%20resume-1676265082803.docx"
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
