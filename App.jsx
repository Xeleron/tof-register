import IntlgameAccountApi from '@intlsdk/account-api';
import React, { useState } from 'react';

function App() {
  const [mail, setMail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');

  const sendCode = () => {
    accountApi.requestVerifyCode({
      account: mail,
      account_type: 1,
      code_type: 0,
    });
  };

  const register = () => {
    accountApi.register({
      account_type: 1,
      verify_code: code,
      account: mail,
      password: password,
    });
  };

  const accountApi = new IntlgameAccountApi({
    gameID: 29093,
    env: 'aws-na',
    gameid: 29093,
    channelID: 3,
    channelid: 3,
    langType: 'en',
    os: 5,
    source: '0',
    accountPlatType: 113,
    appID: 'a0ca7921668f7d18c096ad85011589fd',
    sigkey: '27e43e1c6a662db93590999c1ea1b85c',
    hostCAcc: 'https://aws-na-pass.intlgame.com',
  });

  accountApi.config.channelID = 3;

  return (
    <div className="app">
      <>
        <label for="mail">Mail: </label>
        <input
          value={mail}
          name="mail"
          onChange={(e) => setMail(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={sendCode}>
          Send Verification Code
        </button>
        <br />
        <label for="code">Verification Code: </label>
        <input
          value={code}
          name="code"
          onChange={(e) => setCode(e.target.value)}
          type="text"
        />
        <br />
        <label for="password">Password: </label>
        <input
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="text"
        />
        <button type="submit" onClick={register}>
          Register
        </button>
      </>
    </div>
  );
}

export default App;
