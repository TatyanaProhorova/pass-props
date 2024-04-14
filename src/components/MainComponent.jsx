export const MainComponent = (props) => {
  const { brand, title, description } = props;
  return (
    <div className="main-content">
      <h2>{brand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div> 
  );   
}
