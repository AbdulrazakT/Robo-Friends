import Card from "../components/Card";
const CardList = (props) => {
  const cardComponent = props.bots.map((user, i) => {
    return <Card key={i} id={user.id} name={user.name} email={user.email} />;
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
