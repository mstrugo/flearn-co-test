import React from 'react';

export const Form = () => (
  <form>
    <p>
      For the best learning experience around,
      <br /> please log in to your account.
    </p>
    <fieldset className="content--padded-v-xs">
      <label htmlFor="email" className="block">
        Your email address
      </label>
      <input id="email" />
    </fieldset>
    <fieldset className="content--padded-v-xs">
      <label htmlFor="password" className="block">
        Your password
      </label>
      <input id="password" type="password" />
    </fieldset>

    <button className="button button--primary with-radius">Log in</button>
  </form>
);
