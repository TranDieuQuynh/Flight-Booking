import styles from "./component.module.css";

export function ChatWidget() {
  return (
    <div className={styles["chat-widget"]}>
      <button id="chatBtn" className={styles["chat-btn"]}>
        <img src="/img/chat_icon.png" alt="Chat Icon" className={styles["chat-icon"]}/> Chat với QAMI
      </button>
      <div id="chatbox" className={styles["chatbox"]}>
        <div className={styles["chatbox-header"]}>
          <img src="/img/logo_tachnen.png" alt="Logo" className={styles["chatbox-logo"]}/>
          <div className={styles["header-text"]}>
            <h2>QAirline Love You</h2>
            <p>Chào bạn đến với QAirline. 
              Bạn hãy giới thiệu về mình để cùng trò chuyện với QAmy. 
              Chúc bạn ngày tốt lành, thật nhiều niềm vui bạn nhé.
            </p>
          </div>
        </div>
        <div className={styles["chatbox-body"]}>
          <div className={styles["messages"]}>
            <p>Xin chào! Tôi là AMI, bạn cần tôi giúp gì hôm nay?</p>
          </div>
          <input type="text" placeholder="Nhập câu hỏi..." id="chatInput" />
          <button id="sendMessage" className={styles["send-btn"]}>Gửi</button>
        </div>
      </div>
    </div>
  )
}