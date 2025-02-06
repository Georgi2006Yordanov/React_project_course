function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <img src={props.photo} alt="" />
      <p>{props.text}</p>
    </div>
  );
}
  
export default Card;
  