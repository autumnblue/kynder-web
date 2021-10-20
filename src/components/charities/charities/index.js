import React, {useEffect, useState} from 'react';
import Images from '../../../assets/images';
import CommonHeader from '../../common/header';
import Loader from '../../../animation/Loader';

const Charities = ({
  isLoading,
  filteredCharities,
  getAllCharities, 
  searchCharities,
  selectCharity,
  history,
  location,
}) => {
  const [searchText, onChangeSearchText] = useState('');
  const [isFocus, setFocus] = useState(false);

  useEffect(() => {
    getAllCharities();
  }, []);

  if (isLoading) {
    return <Loader width={200} height={200} classes="animation-loader" />
  }

  const getFilteredCharities = (searchValue) => {
    onChangeSearchText(searchValue);
    searchCharities(searchValue);
  };

  const onSelectCharity = (selectedItem) => {
    selectCharity(selectedItem);
    if ((location.pathname && location.pathname.indexOf('/edit') > -1)) {
      history.push(`/charities/${selectedItem.id}/edit`);
    } else {
      history.push(`/charities/${selectedItem.id}`);
    }
  };

  return (
    <div className="charities-container">
      <div className="img-wrapper">
        <img src={Images.charityBackground.default} alt="" />
      </div>
      <CommonHeader
        mainMode
        step={1}
        edit={(location.pathname && location.pathname.indexOf('/edit') > -1) || false}
        title="Selected Charity"
      />
      <div className="charities-list-container">
        <div className="charities-content">
          <p className="title">Your charity</p>
          <p className="description">
            Choose a charity for Kynder to start accruing in your donation pot.
          </p>
          <div className={`charity-search-container ${(filteredCharities && filteredCharities.length > 0 && isFocus) ? 'non-border' : ''}`}>
            <input
              value={searchText}
              onChange={(e) => getFilteredCharities(e.currentTarget.value)}
              onFocus={() => setFocus(true)}
              // onBlur={() => setFocus(false)}
              placeholder="Which charity do you support?"
            />
          </div>
          <div className="charity-list">
            {isFocus && filteredCharities && filteredCharities.length > 0 && filteredCharities.sort((a, b) =>
                  a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1,
                ).map((item, index) => {
              return (
                <div key={index.toString()} className="list-item" onClick={() => onSelectCharity(item)}>
                  <p className="item-title">{item.name}</p>
                  <p className="item-description">{item.description}</p>
                </div>
              )
            })}
          </div>
          {searchText && (
            <div className="contact-us">
              <div className="link-btn">Did't find your favourite charity?</div>
              <div
                className="contact-us-btn"
                onClick={() => history.push('/charities/contact-us')}
              >
                Contact us
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Charities;
