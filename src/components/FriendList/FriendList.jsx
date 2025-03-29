import FriendListItem from "./FriendListItem";
import friends from "./friends.json";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};
