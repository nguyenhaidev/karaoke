import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Switch,
} from "@chakra-ui/react";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";

// import { Container } from './styles';

const SearchBox: React.FC = () => {
  const [isKaraoke, setIsKaraoke] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [rowLayout, setRowLayout] = useState(false);

  const submit = () => {
    console.log(isKaraoke);
    console.log(searchValue);
  };

  return (
    <div className="sticky top-0 z-20">
      <FormControl className="flex w-full bg-white p-2 gap-3 items-center">
        <Input
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          type="text"
          className="shrink"
          placeholder="Search"
        />
        <FormLabel margin="0" htmlFor="karaoke">
          Karaoke
        </FormLabel>
        <Switch
          id="karaoke"
          onChange={() => setIsKaraoke(!isKaraoke)}
          isChecked={isKaraoke}
        />

        <Button onClick={submit}>Search</Button>
      </FormControl>

      <div className="text-white flex justify-between items-center mb-3 bg-black px-3 py-2">
        Kết quả
        <div className="flex items-center gap-2">
          Row
          <Switch
            isChecked={rowLayout}
            onChange={() => setRowLayout(!rowLayout)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
