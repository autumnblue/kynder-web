import React, {useEffect} from 'react';

import CommonHeader from '../../common/header';
import Loader from '../../../animation/Loader';
import GreenButton from '../../common/form/button/greenButton';
import DefaultButton from '../../common/form/button/defaultButton';

const SelectedCharity = ({
  isLoading,
  match,
  history,
  location,
  selectedCharity,
  getCharityById,
  selectCharityForDonation,
}) => {
  useEffect(() => {
    if (match.params.id) {
      getCharityById(match.params.id);
    }
  }, [match.params.id]);

  if (isLoading) {
    return <Loader width={200} height={200} classes="animation-loader" />
  }

  const selectCharity = () => {
    const charityId = {
      id: match.params.id,
    }
    if ((location.pathname && location.pathname.indexOf('/edit') > -1)) {
      selectCharityForDonation(charityId, true);
    } else {
      selectCharityForDonation(charityId);
    }
  };

  return (
    <div className="selected-charity-container">
      <CommonHeader
        mainMode
        step={1}
        edit={(location.pathname && location.pathname.indexOf('/edit') > -1) || false}
        title="Сonfirm your choice"
      />
      <div className="charity-wrapper">
        <div className="charity-content">
          <div className="content-left">
            <img src={selectedCharity && selectedCharity.logoUrl} alt="" />
          </div>
          <div className="content-right">
            <p className="content-name">{selectedCharity && selectedCharity.name}</p>
            <p className="content-headline">{selectedCharity && selectedCharity.headline}</p>
            <p className="content-description">{selectedCharity && selectedCharity.description}</p>
            <div className="address-group">
              <div className="address-left">
                <a className="address explore-link" target="_blank" href={selectedCharity.websiteUrl}>
                  {selectedCharity && selectedCharity.websiteUrl}
                </a>
              </div>
              <div className="address-right">
                {selectedCharity && selectedCharity.address.split(',').map((item, index) => {
                  return <p className="detail-line" key={index.toString()}>{item}</p>
                })}
              </div>
            </div>
            <div className="button-group">
              <GreenButton
                title="Select this charity"
                action={selectCharity}
              />
              <DefaultButton
                title="Go back"
                mainMode
                action={() => history.goBack()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedCharity;
