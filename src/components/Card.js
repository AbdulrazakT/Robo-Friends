import "tachyons";

const Card = (props) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow tc">
      <img alt="robots" src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
