import Button from "../components/Button";

const SendEmail = () => {
  function sendEmai() {
    window.open(
      "mailto:tahirabdullah801@gmail.com?subject=SendMail&body=Description"
    );
  }
  return (
    <Button className="sendemail-btn" onClick={sendEmai}>
      Send Email
    </Button>
  );
};

export default SendEmail;
