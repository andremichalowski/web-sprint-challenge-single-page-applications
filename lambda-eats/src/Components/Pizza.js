import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const Pizza = () => {
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={inputChange}
            data-cy="name"
          />
          {errors.name.length > 0 ? <p>{errors.name}</p> : null}
        </label>

        <label htmlFor="size">
          Pizza Size:
          <select name="size" data-cy="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>

        <h2>Toppings:</h2>
        <label htmlFor="pepperoni">
          Pepperoni&#160;
          <input
            type="checkbox"
            checked={formState.pepperoni}
            value={formState.pepperoni}
            name="pepperoni"
            onChange={inputChange}
            data-cy="pepperoni"
          />
        </label>

        <label htmlFor="mushroom">
          Mushroom&#160;
          <input
            type="checkbox"
            name="mushroom"
            checked={formState.mushroom}
            value={formState.mushroom}
            onChange={inputChange}
            data-cy="mushroom"
          />
        </label>

        <label htmlFor="onion">
          Onion&#160;
          <input
            type="checkbox"
            name="onion"
            checked={formState.onion}
            value={formState.onion}
            onChange={inputChange}
            data-cy="onion"
          />
        </label>

        <label htmlFor="sausage">
          Sausage&#160;
          <input
            type="checkbox"
            name="sausage"
            checked={formState.sausage}
            value={formState.sausage}
            onChange={inputChange}
            data-cy="sausage"
          />
        </label>

        <label htmlFor="special">
          Special Instructions:&#160;
          <textarea
            name="special"
            value={formState.special}
            onChange={inputChange}
            data-cy="special"
          />
          {errors.special.length > 0 ? <p>{errors.special}</p> : null}
        </label>

        <Button
          disabled={buttonDisabled}
          type="submit"
          color="danger"
          data-cy="submit"
        >
          Submit
        </Button>
        <h2>
          {" "}
          Congratulations! Pizza is on it's way! {JSON.stringify(post, null, 2)}
        </h2>
      </form>
    </div>
  );
};

export default Pizza;
