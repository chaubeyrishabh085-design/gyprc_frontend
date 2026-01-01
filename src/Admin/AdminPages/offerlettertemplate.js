export default function OfferLetterTemplate({
  data,
  preview,
  backgroundImage,
  headerImage,
  logoImage,
  stampImage,
}) 
{
  const BoldValue = ({ value, fallback }) => (
  <strong>{value || fallback}</strong>
);

  const bgImage =
    backgroundImage ||
    "https://res.cloudinary.com/dzjgoqfxm/image/upload/v1767267874/background_image_klkybg.png";
  const hdrImage =
    headerImage ||
    "https://res.cloudinary.com/dzjgoqfxm/image/upload/v1767267874/header_nyq0qc.png";
  const lgImage =
    logoImage ||
    "https://res.cloudinary.com/dzjgoqfxm/image/upload/v1767267875/width_464_ef3ixf.webp";
  const stpImage =
    stampImage ||
    "https://res.cloudinary.com/dzjgoqfxm/image/upload/v1767267875/stamp_n1jjky.webp";

  return (
    <div className="offer-letter-container">
      <style>{`
        .offer-letter-container {
          font-family: "Times New Roman", Times, serif;
        }
html, body {
  margin: 0;
  padding: 0;
      }
  @page {
  size: A4;
  margin: 0;
}
        
       .a4 {
  width: 210mm;
  height: 297mm;
  position: relative;
  overflow: hidden;
  background-image: url("${bgImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


        /* ================= HEADER ================= */
        .header-clip {
          width: 210mm;
          overflow: hidden;
        }

        .header {
          width: 228mm;
          margin-top: -24mm;
          position: relative;
        }

        .header img.bg {
          width: 100%;
          display: block;
        }

        .header .logo {
          position: absolute;
          left: 0mm;
          top: 35mm;
          height: 72px;
        }

        /* ================= CONTENT ================= */
        .content {
          padding: 8mm 7mm 78mm;
          font-size: 15.5px;
          line-height: 1.45;
          position: relative;
          z-index: 2;
        }

        .top-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* 🔥 important */
}

.to-block {
  width: 60mm;            
  text-align: left;       
  line-height: 1.45;
  word-break: break-word; 
}


        .subject {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          margin: 26px 0 20px;
        }

        p {
          margin: 7px 0;
          text-align: justify;
        }

        /* ================= BULLET FIX ================= */
        ul {
          margin: 10px 0 10px 18px;
          padding-left: 20px;
          list-style-type: disc;
          list-style-position: outside;
        }

        ul li {
          margin-bottom: 6px;
          text-align: justify;
          display: list-item;
        }

        .note {
          font-weight: bold;
          margin-top: 8px;
        }

        /* ================= ACK ================= */
        /* 🔒 ACKNOWLEDGMENT — BOLD + LEFT (FINAL) */
.ack {
  margin-top: 18px;
  width: 100%;
  text-align: left;
}

.ack-title {
  font-weight: bold;      /* ✅ BOLD */
  text-align: left;       /* ✅ LEFT */
  margin-left: 0;
}

.ack p {
  text-align: left;
  margin-left: 0;
}

        /* ================= FOOTER ================= */
        .footer {
          position: absolute;
          bottom: 18mm;
          left: 8mm;
          right: 8mm;
          height: 44mm;
          font-size: 13.8px;
        }

       .footer-top {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.footer-left {
  justify-self: start;
}


        .footer-left .blue {
          color: #1f4fd8;
          font-weight: bold;
        }

        .footer-center {
  justify-self: center;   
  text-align: center;
}

.footer-center img {
  height: 120px;
  margin: 0;             
}

.footer-right {
  justify-self: end;
  text-align: right;
}
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
        }

        .footer-bottom div {
          width: 48%;
        }

       @media print {
  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
  }

  .a4 {
    width: 210mm;
    height: 297mm;
    margin: 0 !important;
    padding: 0 !important;
    box-shadow: none;
    page-break-after: avoid;
  }
}

        }
          
      `}</style>

      <div className="a4" style={preview ? { transform: 'scale(0.5)', transformOrigin: 'top left' } : {}}>
        {/* HEADER */}
        <div className="header-clip">
          <div className="header">
            <img src={hdrImage} className="bg" alt="" />
            <img src={lgImage} className="logo" alt="" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          <div className="top-row">
            <div className="to-block">
  <strong>To</strong>
  <br />
  <BoldValue value={data.name} fallback="<Name>" />
  <br />
  <BoldValue value={data.addressLine1} fallback="<Address line 1>" />
  <br />
  <BoldValue value={data.addressLine2} fallback="<Address line 2>" />
  <br />
  <BoldValue value={data.addressLine3} fallback="<Address line 3>" />
</div>

            <div>
              <strong>Date:</strong> {data.date || "Month XX, year"}
            </div>
          </div>

          <div className="subject">Offer of Employment</div>

          <p>
  Dear <BoldValue value={data.name} fallback="<Name>" />,
</p>


          <p>
  We are pleased to offer you the position of{" "}
  <BoldValue value={data.designation} fallback="<Designation>" /> at GYPR Pvt. Ltd.
  Your annual stipend will be INR{" "}
  <BoldValue value={data.annualStipend} fallback="<<Annual stipend (in words)>>" /> Gross.
  Please report (login) on the joining date{" "}
  <BoldValue value={data.date} fallback="<Date (Day)>" /> at Time XX IST.
  Duration of this internship or probation period is 6 months (180 days).
</p>

          <p>
            Please note that it is important to be on time to complete the
            joining formalities, and you are required to bring the originals and
            a set of photocopies of the following documents on the day of your joining:
          </p>

          <ul>
            <li>Education degree certificate and all year mark sheets starting secondary to the highest degree attained.</li>
            <li>Relieving letter or resignation acceptance letter from your most recent employer.</li>
            <li>Offer letter or appointment letter, last 3 months salary slips or bank statement.</li>
            <li>Proof of identity (passport, driving license, voter’s ID, PAN, Aadhaar, etc.).</li>
            <li>Passport size color photographs.</li>
          </ul>

          <p>
            Joining form attached. You need to fill it and send it back along
            with the documents mentioned above.
          </p>

          <p className="note">
            * Please note that all the above documents are mandatory at the time of joining.
          </p>

          <div className="ack">
            <div className="ack-title">Acknowledgment and Acceptance:</div>
            <p>
              I have read, understood, and accept the terms and conditions of this offer letter.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <div className="footer-top">
            <div className="footer-left">
              Regards,
              <br />
              <br />
              <span className="blue">Talent Acquisition – GYPR Team</span>
            </div>

            <div className="footer-center">
              <img src={stpImage} alt="" />
            </div>

            <div className="footer-right">
              Signature: ____________
              <br />
              Date: ____________
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              <strong>Reg office address:</strong>
              <br />
              Flat No-402, DDA Janta Flats, Khirki, New Delhi-110017
              <br />
              CIN number: U74140DL2015PTC281237
              <br />
              Phone number: +918595903939
            </div>

            <div style={{ textAlign: "right" }}>
              <strong>Corp-office address:</strong>
              <br />
              2nd Floor, F-300, Noida Sector 63
              <br />
              GST number: 07AAHCG0901G1Z1
              <br />
              Uttar Pradesh 201301
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
