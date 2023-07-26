import spinner from '../assets/1496.gif'

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ zIndex: 10, width: '64px', position: 'absolute', left: '50%', top: '50%', 
                 marginLeft: '-50px', marginTop: '-50px'}}
        alt="Loading..."
      />
    </div>
  );
};

export default Spinner;
