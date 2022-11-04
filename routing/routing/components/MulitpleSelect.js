import * as React from "react";

import { Autocomplete, Chip, TextField } from "@mui/material";

const MultipleSelect = ({
  options,
  selectedValues,
  setSelectedValues,
  placeholder,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        style={{ backgroundColor: "#fff" }}
        value={selectedValues}
        onChange={(event, newValue) => {
          setSelectedValues(newValue);
        }}
        multiple
        freeSolo
        id="tags-filled"
        options={options}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              style={{ marginTop: 6 }}
              variant="secondary"
              label={option.label}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={placeholder}
            placeholder=""
          />
        )}
      />
    </div>
  );
};

export default MultipleSelect;
