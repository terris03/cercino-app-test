import React, { useContext, useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import { filtericon, searchicon } from 'resources/Images/images';
import Input from 'components/Input';
import { AppDataContext } from 'providers/AppDataProvider';
import { useNavigate } from 'react-router-dom';

const Search = ({ list_t }) => {
  const navigate = useNavigate();
  const [listToggle, setlistToggle] = useState(false);
  const [text, setText] = useState('');
  const [Data, setData] = useState({});
  const intervalIdRef = useRef();

  function on() {
    clearInterval(intervalIdRef.current); // clear any currently running intervals
    intervalIdRef.current = setInterval(function () {
      axios
        .get('http://localhost:8080/home_search')
        .then(function (response) {
          // handle success
          setData(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }, 5 * 1000);
  }
  function off() {
    clearInterval(intervalIdRef.current);
  }
  useEffect(() => {
    on();
    return () => off();
  }, []);
  const { strings } = useContext(AppDataContext);
  return (
    <>
      <div>
      <div className={styles.inputSearchStyles}>
        <Input
          type={'search'}
          placeholder={strings.searchStrings.searchText}
          customInputStyle={styles.searchInputStyles}
          image={searchicon}
          value={text}
          onChange={(e) => {
            setlistToggle (e.target.value.length>0)
            setText(e.target.value)
          }}
        />
        <div className={styles.filterWidthStyles}>
          <div
            onClick={() => navigate('/filter')}
            className={styles.filterIconStyles}
          >
            <img
              src={filtericon}
              alt="filtericon"
              className={styles.imageWidthStyles}
            />
          </div>
        </div>
      </div>
      {list_t ? (
        <>
          {listToggle ? (
            <>
              <div
                style={{
                  width: '100%',
                  borderRadius: '34px',
                  background: 'var(--darkblack)',
                  backdropFilter: 'blur(12px)',
                  padding:'10px'
                }}
              >
                {Object.entries(Data)
                  .filter((value) => {
                    return value[0].includes(text) || text === '';
                  })
                  .map((value) => (
                    <p style={{ color: 'white',textAlign:'center' }}>
                      {value[0]}
                      {'\n'}
                    </p>
                  ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
      </div>
    </>
  );
};

export default Search;
