//FriendListItem.jsx
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendlistitem}>
      <img src={avatar} alt="Avatar" width="88" />
      <p className={css.friendName}>{name}</p>
      <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
