import { APIConstants } from '../constants';

const test = () => {
  fetch(APIConstants.Auth.Login, { id: 'HT010', password: 'bkod19871' }).then(
    data => console.log(JSON.stringify(data)),
  );
};

export default test;
