import React from "react";
import { Filter, TextInput } from "react-admin";
export const FilterBar = (props) => {
  return (
    <Filter {...props}>
      {props.bars.map((dat, i) => (
        <TextInput
          label={dat.label}
          source={dat.source}
          key={i}
          alwaysOn={i === 0}
        />
      ))}
    </Filter>
  );
};

export default Filter;
