import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { reviewAdd } from "../../reduxStore/actions/rating";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function RatingStar() {
  const [currentValue, setCurrentValue] = useState({value: 0});
  const [hoverValue, setHoverValue] = useState(undefined);
  const [ input, setInput ] = useState('');
  const dispatch = useDispatch();
  const stars = Array(10).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(reviewAdd({review: input, rating: currentValue}));
    setInput();
    setCurrentValue();
  }


  return (
    <div style={styles.container}>
      <div style={styles.profile_review}>
          <img style={styles.foto_profile} 
          src="https://s1.bukalapak.com/img/16826346611/large/Kacamata_Kucing_Lucu_Aksesoris_Hewan_Kesayangan_Fashion_Cat.png" 
          alt="foto"
          width="70"
          height="70" />
          <h4 style={styles.nama_user}>Angela Gizz</h4>
      </div>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              value={currentValue}
              onChange={(event) => setCurrentValue(event.target.value)}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
      <form onSubmit={handleAdd}>
        <input
          placeholder="Leave a review"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          style={styles.input}
        />

        <button
          style={styles.button}
        >
          Send
        </button>
      </form>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "50px",
    marginLeft: "140px",
    marginTop: "70px"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "80px"
  },
  input: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 80px",
    width: 500,
    height: 50
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 100,
    padding: 10,
    backgroundColor: "#fe024e",
    marginLeft: 10
  },
  profile_review: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: 20
  },
  foto_profile: {
    position: "relative",
    borderRadius: 50,
    marginRight: 15
  }

};




export default RatingStar;