import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "shared/ui/input";
import { Button } from "shared/ui/button";
import { Modal } from "shared/ui/modal";
import { AddPaymentMethod } from "features/add-payment-method";
import { BookingSummary } from "widgets/booking-summary";
import { useToast } from "shared/lib/toast";
import styles from "./flight-booking.module.css";

export const FlightBookingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [payOption, setPayOption] = useState("full");
  const [selectedCard, setSelectedCard] = useState("visa");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const baseFare = 240;
  const taxes = 20;
  const serviceFee = 5;
  const total = baseFare + taxes + serviceFee;
  const halfAmount = (total / 2).toFixed(2);

  const handleContinue = () => {
    if (!phone.trim() || phone.length < 6) {
      toast("Enter a valid phone number");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast("Confirmation code sent!");
    }, 900);
  };

  return (
    <div className={`${styles.page} pageFadeIn`}>
      <div className={styles.breadcrumbs}>
        <span
          onClick={() => navigate("/flights")}
          style={{ cursor: "pointer" }}
        >
          Turkey
        </span>{" "}
        ›
        <span
          onClick={() => navigate("/flights/listing")}
          style={{ cursor: "pointer" }}
        >
          {" "}
          Istanbul
        </span>{" "}
        › CVK Park Bosphorus Hotel Istanbul
      </div>
      <div className={styles.header}>
        <div>
          <h1>Emirates A380 Airbus</h1>
          <p>📍 Gumussuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.price}>$240</div>
          <button
            className={styles.iconBtn}
            onClick={() => toast("Link copied!")}
          >
            ⤴
          </button>
          <Button onClick={() => toast("Downloading your ticket...")}>
            Download
          </Button>
        </div>
      </div>

      <div className={styles.boardingPass}>
        <div className={styles.bpLeft}>
          <div>
            <div className={styles.time}>12:00 pm</div>
            <div className={styles.code}>Newark(EWR)</div>
          </div>
          <div
            style={{
              fontSize: "28px",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            ✈
          </div>
          <div>
            <div className={styles.time}>12:00 pm</div>
            <div className={styles.code}>Newark(EWR)</div>
          </div>
        </div>
        <div className={styles.bpCenter}>
          <div className={styles.passenger}>
            <div className={styles.passengerInfo}>
              <img
                src="/images/user-avatar.png"
                alt="James"
                className={styles.avatar}
              />
              <div>
                <div className={styles.name}>James Doe</div>
                <div className={styles.status}>Boarding Pass N°123</div>
              </div>
            </div>
            <div className={styles.class}>Business Class</div>
          </div>
          <div className={styles.bpGrid}>
            <div>
              Date<strong>Newark(EWR)</strong>
            </div>
            <div>
              Flight time<strong>12:00</strong>
            </div>
            <div>
              Gate<strong>A12</strong>
            </div>
            <div>
              Seat<strong>128</strong>
            </div>
          </div>
          <div className={styles.barcode} />
        </div>
        <div className={styles.bpRight}>
          <div>
            <div className={styles.time}>12:00 pm</div>
            <div className={styles.code}>Newark(EWR)</div>
          </div>
          <div className={styles.route}>✈ --- ✈</div>
        </div>
      </div>

      <div className={styles.terms}>
        <h3>Terms and Conditions</h3>
        <h4>Payments</h4>
        <ul>
          <li>
            If you are purchasing your ticket using a debit or credit card via
            the Website, we will process these payments via the automated secure
            common payment gateway which will be subject to fraud screening
            purposes.
          </li>
          <li>
            If you do not supply the correct card billing address and/or
            cardholder information, your booking will not be confirmed and the
            overall cost may increase.
          </li>
          <li>
            Golobe may require the card holder to provide additional payment
            verification upon request.
          </li>
        </ul>
        <h4>Contact Us</h4>
        <p>
          If you have any questions about our Website or our Terms of Use,
          please contact:
        </p>
        <p>
          <strong>Golobe Group Q.C.S.C</strong>
          <br />
          Golobe Tower
          <br />
          P.O. Box: 22550
          <br />
          Doha, State of Qatar
        </p>
      </div>

      <div className={styles.card}>
        <h3 style={{ marginBottom: 16 }}>Payment method</h3>
        <div
          className={`${styles.payOption} ${payOption === "full" ? styles.active : ""}`}
          onClick={() => {
            setPayOption("full");
            toast("Pay in full selected");
          }}
        >
          <div>
            <div className={styles.title}>Pay in full</div>
            <div className={styles.desc}>Pay the total and you are all set</div>
          </div>
          <div className={styles.radio}>
            {payOption === "full" && <div className={styles.radioInner} />}
          </div>
        </div>
        <div
          className={`${styles.payOption} ${payOption === "partial" ? styles.active : ""}`}
          onClick={() => {
            setPayOption("partial");
            toast(`Split payment: $${halfAmount} × 2`);
          }}
        >
          <div>
            <div className={styles.title}>Pay part now, part later</div>
            <div className={styles.desc}>
              Pay ${halfAmount} now, and the rest (${halfAmount}) will be
              automatically charged to the same payment method on Nov 14, 2022.
              No extra fees.
            </div>
          </div>
          <div className={`${styles.radio} ${styles.radioEmpty}`}>
            {payOption === "partial" && <div className={styles.radioInner} />}
          </div>
        </div>
        <div style={{ marginTop: 20 }}>
          <div
            className={styles.cardItem}
            onClick={() => {
              setSelectedCard("visa");
              toast("Visa selected");
            }}
            style={{
              cursor: "pointer",
              opacity: selectedCard === "visa" ? 1 : 0.6,
            }}
          >
            <div>
              <span className={styles.visa}>VISA</span>
              <span className={styles.number}>**** 4321</span>
              <span style={{ marginLeft: 12, opacity: 0.7, fontSize: 12 }}>
                02/27
              </span>
            </div>
            <div className={styles.radio}>
              {selectedCard === "visa" && <div className={styles.radioInner} />}
            </div>
          </div>
          <button
            className={styles.addCardBtn}
            onClick={() => setModalOpen(true)}
          >
            <div className={styles.plus}>+</div>Add a new card
          </button>
        </div>
      </div>

      <div className={styles.loginForm}>
        <h3>Login or Sign up to book</h3>
        <Input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className={styles.note}>
          We'll call or text you to confirm your number. Standard message and
          data rates apply. <strong>Privacy Policy</strong>
        </div>
        <Button
          style={{ width: "100%", marginTop: 16 }}
          onClick={handleContinue}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loader" /> Sending code...
            </>
          ) : (
            "Continue"
          )}
        </Button>
        <div className={styles.orDivider}>Or</div>
        <div className={styles.socialRow}>
          <button
            className={styles.socialBtn}
            style={{ color: "#1877f2" }}
            onClick={() => toast("Facebook login...")}
          >
            f
          </button>
          <button
            className={styles.socialBtn}
            style={{ color: "#ea4335" }}
            onClick={() => toast("Google login...")}
          >
            G
          </button>
          <button
            className={styles.socialBtn}
            style={{ color: "#000" }}
            onClick={() => toast("Apple login...")}
          ></button>
        </div>
        <button
          className={styles.emailBtn}
          onClick={() => toast("Continue with email...")}
        >
          ✉ Continue with email
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddPaymentMethod
          onSuccess={() => {
            setModalOpen(false);
            toast("Card added successfully!");
          }}
        />
      </Modal>
    </div>
  );
};
