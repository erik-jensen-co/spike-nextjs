import styles from "./page.module.css";
import { createMessage, getMessages } from "./actions/messages";

const MessageList = async () => {
  const messages = await getMessages();

  return (
    <ul>
      {messages.map((message) => (
        <li key={message}>{message}</li>
      ))}
    </ul>
  );
};

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <form action={createMessage}>
          <input type="text" name="new-message" />
          <button type="submit">Add</button>
        </form>
        <MessageList/>
      </div>
    </main>
  );
}
