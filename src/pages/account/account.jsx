import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "shared/ui/modal";
import { AddPaymentMethod } from "features/add-payment-method";
import { useToast } from "shared/lib/toast";
import { getCards, removeCard } from "shared/lib/cards";
import { MOCK_FLIGHT_LISTINGS } from "shared/api/mocks";
import styles from "./account.module.css";

const PROFILE = [
  { label: "Name", value: "John Doe" },
  { label: "Email", value: "john.doe@gmail.com", extra: "Add another email" },
  { label: "Password", value: "••••••••••••" },
  { label: "Phone number", value: "+1 000-000-0000" },
  {
    label: "Address",
    value: "St 32 main downtown, Los Angeles, California, USA",
  },
  { label: "Date of birth", value: "01-01-1992" },
];

export const AccountPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [tab, setTab] = useState(0);
  const [histTab, setHistTab] = useState(0);
  const [modal, setModal] = useState(false);
  const [cover, setCover] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(getCards());
    const refresh = () => setCards(getCards());
    window.addEventListener("cards-updated", refresh);
    return () => window.removeEventListener("cards-updated", refresh);
  }, []);

  const handleChange = (label) => toast(`Editing ${label}...`);
  const handleDownload = (id) => toast(`Downloading ticket #${id}...`);
  const handleRemoveCard = (id) => {
    removeCard(id);
    toast("Card removed");
  };

  return (
    <div className={`${styles.page} pageFadeIn`}>
      <div
        className={`${styles.cover} ${cover ? styles.animatedCover : ""}`}
        style={!cover ? { background: "#e0e0e0" } : {}}
      >
        <button
          className={styles.coverBtn}
          onClick={() => {
            setCover(!cover);
            toast("Cover updated");
          }}
        >
          📷 Upload new cover
        </button>
      </div>

      <div className={styles.avatarWrap}>
        {/* Слот для картинки пользователя — замени путь на свой */}
        <img
          src="/images/account-avatar.png"
          alt="Avatar"
          className={styles.avatar}
          onError={(e) => {
            e.target.src = "/images/user-avatar.png";
          }}
        />
        <div className={styles.editBadge} onClick={() => toast("Edit avatar")}>
          ✎
        </div>
      </div>

      <h2 className={styles.name}>John Doe.</h2>
      <p className={styles.email}>john.doe@gmail.com</p>

      <div className={styles.tabs}>
        {["Account", "Tickets/Bookings", "Payment methods"].map((t, i) => (
          <button
            key={t}
            className={`${styles.tab} ${tab === i ? styles.active : ""}`}
            onClick={() => setTab(i)}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 0 && (
        <>
          <h3 className={styles.sectionTitle}>Account</h3>
          <div className={styles.profileCard}>
            {PROFILE.map((row) => (
              <div key={row.label} className={styles.profileRow}>
                <div>
                  <div className={styles.profileLabel}>{row.label}</div>
                  <div className={styles.profileValue}>{row.value}</div>
                </div>
                <div className={styles.changeBtnRow}>
                  {row.extra && (
                    <button
                      className={styles.changeBtn}
                      onClick={() => toast("Add another email")}
                    >
                      ✉ {row.extra}
                    </button>
                  )}
                  <button
                    className={styles.changeBtn}
                    onClick={() => handleChange(row.label)}
                  >
                    ✎ Change
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === 1 && (
        <>
          <h3 className={styles.sectionTitle}>Tickets/Bookings</h3>
          <div className={styles.histTabs}>
            <button
              className={`${styles.histTab} ${histTab === 0 ? styles.active : ""}`}
              onClick={() => setHistTab(0)}
            >
              ✈ Flights
            </button>
            <button
              className={`${styles.histTab} ${histTab === 1 ? styles.active : ""}`}
              onClick={() => setHistTab(1)}
            >
              🏨 Stays
            </button>
          </div>
          {histTab === 0 &&
            MOCK_FLIGHT_LISTINGS.slice(0, 3).map((f, i) => (
              <div
                key={i}
                className={styles.bookingCard}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className={styles.bookingLogo}>
                  <img
                    src="/images/emirates-logo.png"
                    alt="logo"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </div>
                <div className={styles.bookingCol}>
                  <div className={styles.label}>✈ From</div>
                  <div className={styles.value}>12:00 pm</div>
                </div>
                <div className={styles.bookingCol}>
                  <div className={styles.label}>✈ To</div>
                  <div className={styles.value}>6:00 pm</div>
                </div>
                <div className={styles.bookingCol}>
                  <div className={styles.label}>📅 Date</div>
                  <div className={styles.value}>12-11-22</div>
                </div>
                <div className={styles.bookingCol}>
                  <div className={styles.label}>🚪 Gate · Seat</div>
                  <div className={styles.value}>A12 · 128</div>
                </div>
                <button
                  className={styles.downloadBtn}
                  onClick={() => handleDownload(f.id)}
                >
                  Download Ticket
                </button>
                <button
                  className={styles.arrowBtn}
                  onClick={() => navigate(`/flights/${f.id}`)}
                >
                  ›
                </button>
              </div>
            ))}
          {histTab === 1 && (
            <div
              style={{ textAlign: "center", padding: 40, color: "var(--gray)" }}
            >
              No stays booked yet
            </div>
          )}
        </>
      )}

      {tab === 2 && (
        <>
          <h3 className={styles.sectionTitle}>Payment methods</h3>
          <div className={styles.cardsGrid}>
            {cards.map((card) => (
              <div key={card.id} className={styles.creditCard}>
                <button
                  className={styles.ccTrash}
                  onClick={() => handleRemoveCard(card.id)}
                >
                  🗑
                </button>
                <div>
                  <div className={styles.ccLabel}>CARD NUMBER</div>
                  <div className={styles.ccNumber}>
                    •••• •••• •••• {card.last4}
                  </div>
                </div>
                <div>
                  <div className={styles.ccLabel}>VALID THRU</div>
                  <div className={styles.ccValidity}>{card.exp}</div>
                </div>
                <span className={styles.ccVisa}>VISA</span>
              </div>
            ))}
            <button className={styles.addCard} onClick={() => setModal(true)}>
              <span className={styles.addPlus}>+</span>
              <span className={styles.addLabel}>Add a new card</span>
            </button>
          </div>
          {cards.length === 0 && (
            <p
              style={{
                textAlign: "center",
                color: "var(--gray)",
                marginTop: 24,
              }}
            >
              No saved cards yet. Add one to get started.
            </p>
          )}
        </>
      )}

      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <AddPaymentMethod
          onSuccess={() => {
            setModal(false);
            setCards(getCards());
          }}
        />
      </Modal>
    </div>
  );
};
