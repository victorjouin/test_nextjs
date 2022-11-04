import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";

export const SearchInput = ({ onChange, value, id }) => {
  return (
    /* <OutlinedInput
      label="Search"
      id={id}
      onChange={onChange}
      value={value}
      style={{ backgroundColor: "#ffffff" }}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
    />*/
    <FormControl variant="outlined">
      <InputLabel htmlFor={id}>Search</InputLabel>
      <OutlinedInput
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search button"
              onClick={() => {}}
              onMouseDown={() => {}}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Search"
      />
    </FormControl>
  );
};

export const Input = ({
  onChange,
  value,
  placeholder,
  multiline,
  type,
  disabled,
}) => {
  return (
    <TextField
      disabled={disabled || false}
      label={placeholder}
      type={type || "text"}
      variant="outlined"
      multiline={multiline || false}
      rows={4}
      fullWidth
      onChange={onChange}
      value={value}
    />
  );
};

export const SelectInput = ({ onChange, value, placeholder, values }) => {
  return (
    <TextField
      label={placeholder}
      select
      variant="outlined"
      fullWidth
      onChange={onChange}
      value={value}
    >
      {values.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
