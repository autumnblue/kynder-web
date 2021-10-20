import React, {useEffect, useState} from 'react';

import CommonHeader from '../../../common/header';
import Loader from '../../../../animation/Loader';

const AvailableBanks = ({
  isLoading,
  getAllBanks,
  filteredBanks,
  searchBanks,
  getAuthUrlForSelectedBank,
}) => {
  const [searchText, onChangeSearchText] = useState('');
  const [isFocus, setFocus] = useState(false);

  useEffect(() => {
    getAllBanks();
  }, []);

  if (isLoading) {
    return <Loader width={200} height={200} classes="animation-loader" />
  }

  const getFilteredBanks = (searchValue) => {
    onChangeSearchText(searchValue);
    searchBanks(searchValue);
  };

  const onSelectBank = (selectedItem) => {
    const data = {
      bankId: selectedItem.id,
    };
    if (data.bankId) {
      getAuthUrlForSelectedBank(data);
    }
  };

  return (
    <div className="available-banks-container">
      <CommonHeader mainMode step={3} />
      <div className="available-banks-wrapper">
        <div className="available-banks-content">
          <p className="title">Available Banks</p>
          <div className={`bank-search-container ${(filteredBanks && filteredBanks.length > 0 && isFocus) ? 'non-border' : ''}`}>
            <input
              value={searchText}
              onChange={(e) => getFilteredBanks(e.currentTarget.value)}
              onFocus={() => setFocus(true)}
              // onBlur={() => setFocus(false)}
              placeholder="Please select the bank"
            />
          </div>
          <div className="bank-list">
            {isFocus && filteredBanks && filteredBanks.length > 0 && filteredBanks.sort((a, b) =>
                  a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1,
                ).map((item, index) => {
              return (
                <div key={index.toString()} className="list-item" onClick={() => onSelectBank(item)}>
                  <div className="img-wrapper">
                    {item.iconUrl && <img src={item.iconUrl} alt="" />}
                  </div>
                  <p className="item-title">{item.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

export default AvailableBanks;
